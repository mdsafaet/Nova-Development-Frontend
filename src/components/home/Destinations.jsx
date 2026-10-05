import { useEffect, useId, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  useMapContext,
} from "react-simple-maps";

import "../../styles/desnation.css";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const CITIES = [
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    countryId: "784",
    coordinates: [55.2708, 25.2048],
    image: "dubai.png",
    description: "Our home, and our tallest ambitions.",
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    countryId: "826",
    coordinates: [-0.1278, 51.5074],
    image: "london.png",
    description: "River-facing homes, Nine Elms to Mayfair.",
  },
  {
    id: "new-york",
    name: "New York",
    country: "United States",
    countryId: "840",
    coordinates: [-74.006, 40.7128],
    image: "new-york.png",
    description: "Explore our projects in New York.",
  },
  {
    id: "miami",
    name: "Miami",
    country: "United States",
    countryId: "840",
    coordinates: [-80.1918, 25.7617],
    image: "miami.png",
    description: "Explore our projects in Miami.",
  },
  {
    id: "dhaka",
    name: "Dhaka",
    country: "Bangladesh",
    countryId: "050",
    coordinates: [90.4125, 23.8103],
    image: "dhaka.png",
    description: "Explore our projects in Dhaka.",
  },
];

const NOVA_COUNTRIES = new Set(
  CITIES.map((city) => city.countryId)
);

const PROJECTION_CONFIG = {
  scale: 155,
  center: [10, 20],
};

function Connections() {
  const { projection } = useMapContext();
  const start = projection(CITIES[0].coordinates);

  if (!start) return null;

  const [startX, startY] = start;

  return (
    <g pointerEvents="none" aria-hidden="true">
      {CITIES.slice(1).map((city) => {
        const end = projection(city.coordinates);

        if (!end) return null;

        const [endX, endY] = end;

        const controlX = (startX + endX) / 2;
        const controlY =
          Math.min(startY, endY) -
          Math.max(35, Math.abs(endX - startX) * 0.22);

        return (
          <path
            key={city.id}
            d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
            fill="none"
            stroke="#AABBE5"
            strokeWidth="0.8"
            strokeOpacity="0.65"
            strokeDasharray="2 3"
            className="nova-map-arc"
          />
        );
      })}
    </g>
  );
}

function LocationCard({ city }) {
  const { projection } = useMapContext();
  const [imageFailed, setImageFailed] = useState(false);

  const point = projection(city.coordinates);

  if (!point) return null;

  const [pinX, pinY] = point;

  // Display to the left of the marker while staying inside the map.
  const cardX = Math.max(8, Math.min(pinX - 226, 780));
  const cardY = Math.max(8, Math.min(pinY + 16, 252));

  return (
    <foreignObject
      x={cardX}
      y={cardY}
      width="212"
      height="240"
      pointerEvents="none"
      aria-hidden="true"
    >
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="nova-map-card"
      >
        {imageFailed ? (
          <div className="nova-map-image-fallback">
            {city.name}
          </div>
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}cities/${city.image}`}
            alt={`${city.name} skyline`}
            onError={() => setImageFailed(true)}
            className="nova-map-card-image"
          />
        )}

        <div className="nova-map-card-content">
          <p className="nova-map-card-country">
            {city.country}
          </p>

          <h3>{city.name}</h3>

          <p className="nova-map-card-description">
            {city.description}
          </p>
        </div>
      </div>
    </foreignObject>
  );
}

export default function Destinations() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [geography, setGeography] = useState(null);
  const [mapError, setMapError] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);

  const uniqueId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const basePatternId = `nova-dots-${uniqueId}`;
  const activePatternId = `nova-active-dots-${uniqueId}`;

  const previewId = hoveredId ?? focusedId ?? selectedId;

  const previewCity = CITIES.find(
    (city) => city.id === previewId
  );

  // Load the geographic data.
  useEffect(() => {
    const controller = new AbortController();

    async function loadMap() {
      try {
        const response = await fetch(GEO_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load map");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setGeography(data);
        }
      } catch {
        if (!controller.signal.aborted) {
          setMapError(true);
        }
      }
    }

    loadMap();

    return () => controller.abort();
  }, []);

  // Reveal when the section enters the viewport.
  useEffect(() => {
    if (!geography) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [geography]);

  function closePreview(event) {
    if (event.key !== "Escape") return;

    setSelectedId(null);
    setHoveredId(null);
    setFocusedId(null);
  }

  return (
    <section
      ref={sectionRef}
      id="destinations"
      aria-labelledby="nova-destinations-heading"
      onKeyDown={closePreview}
      className="nova-destinations"
    >
      <div className="nova-destinations-container">
        <div className="nova-destinations-heading">
          <h2 id="nova-destinations-heading">
            Four countries. <em>One</em> signature.
          </h2>

          <p>
            Headquartered in Dubai, building in the UAE, the
            United Kingdom, the United States and Bangladesh —
            with our own engineers on every site.
          </p>
        </div>

        <p className="nova-map-instructions">
          Hover or tap a city to explore.
          <span> Swipe horizontally on smaller screens.</span>
        </p>

        {!geography && (
          <p role="status" className="nova-map-loading">
            {mapError
              ? "The map could not load. Please refresh to try again."
              : "Loading map…"}
          </p>
        )}

        {geography && (
          <>
            <div
              role="region"
              aria-label="World map. Scroll horizontally on smaller screens."
              tabIndex={0}
              className="nova-map-viewport"
            >
              <div
                className={`nova-map-canvas ${
                  visible ? "nova-map-is-visible" : ""
                }`}
                onMouseLeave={() => setHoveredId(null)}
              >
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={PROJECTION_CONFIG}
                  width={1000}
                  height={500}
                  role="group"
                  aria-label="Nova destinations"
                  className="nova-dotted-map"
                >
                  <defs>
                    <pattern
                      id={basePatternId}
                      width="5.5"
                      height="5.5"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="2.75"
                        cy="2.75"
                        r="1.5"
                        fill="#66969C"
                      />
                    </pattern>

                    <pattern
                      id={activePatternId}
                      width="5.5"
                      height="5.5"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="2.75"
                        cy="2.75"
                        r="1.9"
                        fill="#AABBE5"
                      />
                    </pattern>
                  </defs>

                  <Geographies geography={geography}>
                    {({ geographies }) =>
                      geographies
                        .filter(
                          (geo) =>
                            geo.properties.name !== "Antarctica"
                        )
                        .map((geo) => {
                          const countryId = String(geo.id).padStart(
                            3,
                            "0"
                          );

                          const isNovaCountry =
                            NOVA_COUNTRIES.has(countryId);

                          const fill = `url(#${
                            isNovaCountry
                              ? activePatternId
                              : basePatternId
                          })`;

                          const countryStyle = {
                            fill,
                            stroke: "none",
                            outline: "none",
                          };

                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{
                                default: countryStyle,
                                hover: countryStyle,
                                pressed: countryStyle,
                              }}
                            />
                          );
                        })
                    }
                  </Geographies>

                  <Connections />

                  {CITIES.map((city) => {
                    const active = city.id === previewId;

                    return (
                      <Marker
                        key={city.id}
                        coordinates={city.coordinates}
                        role="button"
                        tabIndex={0}
                        aria-label={`Explore ${city.name}`}
                        aria-pressed={selectedId === city.id}
                        className="nova-map-marker"
                        onMouseEnter={() => setHoveredId(city.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onFocus={() => setFocusedId(city.id)}
                        onBlur={() => setFocusedId(null)}
                        onClick={() => setSelectedId(city.id)}
                        onKeyDown={(event) => {
                          if (
                            event.key === "Enter" ||
                            event.key === " "
                          ) {
                            event.preventDefault();
                            setSelectedId(city.id);
                          }
                        }}
                      >
                        <circle r="15" fill="transparent" />

                        <circle
                          className="nova-map-marker-ring"
                          r={active ? 12 : 7}
                          fill="none"
                          stroke={active ? "#FFFFFF" : "#AABBE5"}
                          strokeOpacity={active ? 1 : 0.7}
                        />

                        {active && (
                          <circle
                            r="9"
                            fill="none"
                            stroke="#FFFFFF"
                            className="nova-map-marker-pulse"
                          />
                        )}

                        <circle
                          r={active ? 3.8 : 3.2}
                          fill={active ? "#FFFFFF" : "#AABBE5"}
                        />

                        <text
                          x="12"
                          y="-10"
                          fill={active ? "#FFFFFF" : "#AEC8D0"}
                          className="nova-map-city-label"
                        >
                          {city.name}
                        </text>
                      </Marker>
                    );
                  })}

                  {previewCity && (
                    <LocationCard
                      key={previewCity.id}
                      city={previewCity}
                    />
                  )}
                </ComposableMap>
              </div>
            </div>

            <div
              role="group"
              aria-label="Choose a destination"
              className="nova-map-city-buttons"
            >
              {CITIES.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  aria-pressed={selectedId === city.id}
                  onMouseEnter={() => setHoveredId(city.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setFocusedId(city.id)}
                  onBlur={() => setFocusedId(null)}
                  onClick={() => setSelectedId(city.id)}
                  className={`nova-map-city-button ${
                    previewId === city.id ? "is-active" : ""
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </>
        )}

        <p role="status" className="nova-map-sr-only">
          {previewCity
            ? `${previewCity.name}, ${previewCity.country}. ${previewCity.description}`
            : ""}
        </p>
      </div>
    </section>
  );
}