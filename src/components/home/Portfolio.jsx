import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { img } from "@/assets/images";
import "@/styles/portfolio.css";

const projects = [
  {
    image: img.project1,
    location: "BANGLADESH",
    type: "LAND DEVELOPMENT",
    title: "Nova Meadows",
    description:
      "A fully planned land estate positioned within Dhaka's eastern growth corridor.",
  },
  {
    image: img.project2,
    location: "DUBAI",
    type: "RESIDENTIAL",
    title: "Nova Harbour Residences",
    description:
      "Branded waterfront residential development in Dubai Harbour.",
  },
  {
    image: img.project3,
    location: "USA",
    type: "COMMERCIAL",
    title: "Nova Quay",
    description:
      "Grade-A commercial destination in New York.",
  },
  {
    image: img.project4,
    location: "DUBAI",
    type: "COMMERCIAL",
    title: "Nova Quay",
    description:
      "Grade-A commercial destination in Dubai.",
  },
  {
    image: img.project5,
    location: "USA",
    type: "COMMERCIAL",
    title: "Nova Quay",
    description:
      "Grade-A commercial destination in the United States.",
  },
  {
    image: img.project6,
    location: "UK",
    type: "COMMERCIAL",
    title: "Nova Quay",
    description:
      "Grade-A commercial destination in the United Kingdom.",
  },
];

export default function Portfolio() {
  const navigate = useNavigate();

  const openProject = () => {
    navigate("/portfolio-single");
  };

  return (
    <section
      id="portfolio"
      className="nova-portfolio-section nova-portfolio-carousel-section"
    >
      <div className="container">
        <div className="nova-portfolio-header">
          <div>
            <div className="nova-section-label reveal">
              <span>Portfolio</span>
            </div>

            <h2
              className="nova-display-title reveal"
              style={{ "--d": ".1s" }}
            >
              Selected <span>developments.</span>
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="nova-outline-button reveal"
            style={{ "--d": ".2s" }}
          >
            View complete portfolio <span>↗</span>
          </Link>
        </div>
      </div>

      <div className="nova-portfolio-full-carousel">
        <Swiper
          modules={[Autoplay]}
          className="nova-project-swiper"
          loop={true}
          grabCursor={true}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1.08}
          spaceBetween={16}
          breakpoints={{
            480: {
              slidesPerView: 1.25,
              spaceBetween: 18,
            },

            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1000: {
              slidesPerView: 2.7,
              spaceBetween: 24,
            },

            1200: {
              slidesPerView: 3.3,
              spaceBetween: 26,
            },

            1500: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`${project.title}-${index}`}>
              <article
                className="nova-project-card nova-carousel-project-card"
                onClick={openProject}
                role="link"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    openProject();
                  }
                }}
              >
                <div className="nova-project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <span className="nova-project-location">
                    {project.location}
                  </span>
                </div>

                <div className="nova-project-info">
                  <div>
                    <span className="eyebrow text-gold">
                      {project.type}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <p>{project.description}</p>

                  <Link
                    to="/portfolio-single"
                    className="nova-circle-arrow"
                    aria-label={`View ${project.title}`}
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    ↗
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}