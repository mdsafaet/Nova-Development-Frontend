import { Reveal } from "@/components/company-profile/Float";

export default function Intro() {
  return (
    <section className="nvv-purpose">
      <div className="container">
        <Reveal>
          <div className="nvv-section-head nvv-section-head--center">
            <span>01</span>
            <i />
            <strong>Our Purpose</strong>
          </div>
        </Reveal>

        <div className="nvv-purpose-content">
          <Reveal>
            <span
              className="nvv-quote"
              aria-hidden="true"
            >
              “
            </span>
          </Reveal>

          <Reveal>
            <h2>
              We develop places
              <span>that outlive us.</span>
            </h2>
          </Reveal>

          <Reveal>
            <p>
              Not measured by quarters, but by
              decades. Every master plan, every
              acre and every partnership is guided
              by long-term thinking — ensuring what
              we build today remains relevant and
              cherished tomorrow.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}