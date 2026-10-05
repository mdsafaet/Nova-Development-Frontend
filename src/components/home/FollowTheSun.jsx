import { useEffect, useId, useMemo, useRef, useState } from "react";
import * as SunCalc from "suncalc";
import { Link } from "react-router-dom";
import { sunCities } from "../../data/sunCities";
import "../../styles/follow-the-sun.css";

const getLocalTime = (date, timezone) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  let hour = Number(
    parts.find((part) => part.type === "hour")?.value || 0
  );

  const minute =
    parts.find((part) => part.type === "minute")?.value || "00";

  if (hour === 24) {
    hour = 0;
  }

  return {
    hour,
    minute,
    time: `${String(hour).padStart(2, "0")}:${minute}`,
  };
};

const getPeriod = (hour) => {
  if (hour >= 5 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 14) return "Midday";
  if (hour >= 14 && hour < 18) return "Afternoon";
  if (hour >= 18 && hour < 20) return "Evening";

  return "After dark";
};

const getOffset = (date, timezone) => {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "shortOffset",
    }).formatToParts(date);

    return (
      parts.find((part) => part.type === "timeZoneName")?.value || ""
    );
  } catch {
    return "";
  }
};

const formatDuration = (milliseconds) => {
  const totalMinutes = Math.max(
    0,
    Math.floor(milliseconds / 60000)
  );

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return `${hours} h ${minutes} min`;
};

const getSolarText = (city, now) => {
  // Search surrounding solar cycles, independent of the visitor's timezone.
  const events = [];
  for (let offset = -2; offset <= 2; offset++) {
    const times = SunCalc.getTimes(new Date(now.getTime() + offset * 86400000), city.lat, city.lng);
    for (const [key, label] of [["sunrise", "Sunrise"], ["sunset", "Sunset"]]) {
      const time = times[key]?.getTime();
      if (Number.isFinite(time) && time > now.getTime()) events.push({ time, label });
    }
  }
  events.sort((a, b) => a.time - b.time);
  return events.length ? events[0].label + " in " + formatDuration(events[0].time - now.getTime()) : "Solar times unavailable";
};

/*
  Real-time visual treatment.

  Morning       = slightly soft
  Midday        = brightest
  Afternoon     = warm / balanced
  Evening       = darker
  Night         = significantly darker + blue tint
*/
const getVisualState = (hour) => {
  if (hour >= 5 && hour < 8) {
    return {
      brightness: 0.78,
      saturation: 0.95,
      cobaltOpacity: 0.12,
      purpleOpacity: 0.08,
    };
  }

  if (hour >= 8 && hour < 12) {
    return {
      brightness: 0.92,
      saturation: 1.05,
      cobaltOpacity: 0.06,
      purpleOpacity: 0.03,
    };
  }

  if (hour >= 12 && hour < 15) {
    return {
      brightness: 1,
      saturation: 1.05,
      cobaltOpacity: 0.03,
      purpleOpacity: 0,
    };
  }

  if (hour >= 15 && hour < 18) {
    return {
      brightness: 0.92,
      saturation: 1.05,
      cobaltOpacity: 0.05,
      purpleOpacity: 0.05,
    };
  }

  if (hour >= 18 && hour < 20) {
    return {
      brightness: 0.67,
      saturation: 0.88,
      cobaltOpacity: 0.16,
      purpleOpacity: 0.14,
    };
  }

  return {
    brightness: 0.4,
    saturation: 0.7,
    cobaltOpacity: 0.42,
    purpleOpacity: 0.16,
  };
};

function StarIcon({ moon = false }) {
  if (moon) {
    return (
      <svg
        viewBox="0 0 12 12"
        className="follow-sun__star"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M10.5 8.2A5 5 0 0 1 4.3 1.1a5 5 0 1 0 6.2 7.1Z"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 20 20"
      className="follow-sun__star"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M10 0C10.9 5.6 14.4 9.1 20 10C14.4 10.9 10.9 14.4 10 20C9.1 14.4 5.6 10.9 0 10C5.6 9.1 9.1 5.6 10 0Z"
      />
    </svg>
  );
}


export default function FollowTheSun() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [now, setNow] = useState(null);
  const tabs = useRef([]);
  const sectionRef = useRef(null);
  const zoomRef = useRef(1.4);
  const indexRef = useRef(0);
  const switchTimer = useRef(null);
  const lockUntil = useRef(0);
  const [zooms, setZooms] = useState(() => sunCities.map(() => 1.4));

  function selectCity(index) {
    clearTimeout(switchTimer.current);
    switchTimer.current = null;
    indexRef.current = index;
    zoomRef.current = 1.4;
    setZooms(values => values.map((value, i) => i === index ? 1.4 : value));
    setActiveIndex(index);
    lockUntil.current = performance.now() + 1000;
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function handleWheel(event) {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.cancelable) return;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? section.clientHeight : 1;
      const delta = event.deltaY * unit;
      if (!Number.isFinite(delta) || delta === 0) return;
      const direction = delta > 0 ? 1 : -1;
      const index = indexRef.current;
      const nextIndex = index + direction;
      const canSwitch = nextIndex >= 0 && nextIndex < sunCities.length;
      const atLimit = direction > 0 ? zoomRef.current >= 1.8 : zoomRef.current <= 1;

      // Exit the section normally at the first/last city's outer limit.
      if (!canSwitch && atLimit && switchTimer.current === null) return;
      event.preventDefault();
      // Wait for the image transition and reject trackpad momentum.
      if (switchTimer.current !== null || performance.now() < lockUntil.current) return;

      const zoom = Math.max(1, Math.min(1.8, zoomRef.current + delta * 0.001));
      zoomRef.current = zoom;
      setZooms(values => values.map((value, i) => i === index ? zoom : value));
      const reachedLimit = direction > 0 ? zoom >= 1.8 : zoom <= 1;
      if (!reachedLimit || !canSwitch) return;

      // Let the image reach its scale before crossfading to the new city.
      switchTimer.current = setTimeout(() => {
        switchTimer.current = null;
        indexRef.current = nextIndex;
        zoomRef.current = 1.4;
        setZooms(values => values.map((value, i) => i === nextIndex ? 1.4 : value));
        setActiveIndex(nextIndex);
        lockUntil.current = performance.now() + 1000;
      }, 220);
    }

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      section.removeEventListener("wheel", handleWheel);
      clearTimeout(switchTimer.current);
      switchTimer.current = null;
    };
  }, []);
  const id = useId();

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = setInterval(update, 1000);
    const onVisibility = () => { if (!document.hidden) update(); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const minute = now ? Math.floor(now.getTime() / 60000) : null;
  const cities = useMemo(() => sunCities.map(city => {
    if (minute === null) return { ...city, time: "--:--", period: "", offset: "", solarText: "", visual: getVisualState(14) };
    const date = new Date(minute * 60000);
    const local = getLocalTime(date, city.timezone);
    const isNight = SunCalc.getPosition(date, city.lat, city.lng).altitude < 0;
    const period = isNight ? "After dark" : getPeriod(local.hour);
    return { ...city, time: local.time, period, offset: getOffset(date, city.timezone), solarText: getSolarText(city, date), visual: getVisualState(isNight ? 0 : local.hour) };
  }), [minute]);

  function navigateTabs(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % cities.length;
    else if (event.key === "ArrowLeft") next = (index + cities.length - 1) % cities.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = cities.length - 1;
    else return;
    event.preventDefault();
    selectCity(next);
    tabs.current[next]?.focus();
  }

  return (
    <section ref={sectionRef} className="follow-sun" aria-labelledby={id + "-title"}>
      {cities.map((city, index) => (
        <div key={city.id} aria-hidden="true" className={"follow-sun__bg" + (index === activeIndex ? " active" : "")}>
          <img src={city.image} alt="" className="follow-sun__image"
            style={{ transform: "scale(" + zooms[index] + ")", transformOrigin: "center center", objectPosition: city.imagePosition || "center", filter: "brightness(" + city.visual.brightness + ") saturate(" + city.visual.saturation + ")" }}
            onError={event => { event.currentTarget.style.visibility = "hidden"; }} />
          <div className="follow-sun__cobalt" style={{ opacity: city.visual.cobaltOpacity }} />
          <div className="follow-sun__purple" style={{ opacity: city.visual.purpleOpacity }} />
        </div>
      ))}
      <div className="follow-sun__overlay" aria-hidden="true" />
      <div className="follow-sun__inner">
        <header className="follow-sun__top">
          <div>
            <h2 id={id + "-title"} className="follow-sun__heading">Follow the sun</h2>
            <p className="follow-sun__subheading">Nova in four regions, on local time.</p>
          </div>
          <span className="follow-sun__live"><span className="follow-sun__live-dot" />Live local time</span>
        </header>
        <div className="follow-sun__stage">
          {cities.map((city, index) => (
            <div key={city.id} role="tabpanel" id={id + "-panel-" + index}
              aria-labelledby={id + "-tab-" + index} hidden={index !== activeIndex} tabIndex={0}
              className="follow-sun__city-content">
              <p className="follow-sun__location">{city.city}, {city.country}</p>
              <div className="follow-sun__time-row">
                <span className="follow-sun__time">{city.time}</span>
                <span className="follow-sun__period">{city.period}</span>
              </div>
              <p className="follow-sun__solar">{city.period ? city.period + " over " + city.area + ". " + city.solarText + "." : "Loading local time…"}</p>
              <div className="follow-sun__meta">
                <p className="follow-sun__office">{city.office}, {city.area}</p>
                <Link to={city.contactTo} className="follow-sun__cta">Talk to the {city.city} team <span aria-hidden="true">⟶</span></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="follow-sun__bottom">
          <div className="follow-sun__tabs" role="tablist" aria-label="Nova regions">
            {cities.map((city, index) => (
              <button key={city.id} ref={element => { tabs.current[index] = element; }} type="button" role="tab"
                id={id + "-tab-" + index} aria-controls={id + "-panel-" + index}
                aria-selected={index === activeIndex} tabIndex={index === activeIndex ? 0 : -1}
                onClick={() => selectCity(index)} onKeyDown={event => navigateTabs(event, index)}
                className={"follow-sun__tab" + (index === activeIndex ? " active" : "")}>
                <span className="follow-sun__tab-name"><StarIcon moon={city.period === "After dark"} />{city.city}</span>
                <span className="follow-sun__tab-time">{city.time} <span className="follow-sun__tab-extra">{city.offset}{city.period ? ", " + city.period.toLowerCase() : ""}</span></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
