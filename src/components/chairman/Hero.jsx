import React from 'react';
import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Hero() {
  return (
    <section
      className="inner-hero"
      style={{
        background: `linear-gradient(135deg, rgba(13, 24, 51, 0.92) 0%, rgba(13, 24, 51, 0.75) 100%), url('${img.chairmanBg}') center center / cover no-repeat`,
        padding: '120px 0 100px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ 
            fontSize: '12px', 
            letterSpacing: '0.25em', 
            textTransform: 'uppercase', 
            color: 'rgba(255, 255, 255, 0.6)', 
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>Home</Link> 
          <span>/</span> 
          <span>Company</span> 
          <span>/</span>
          <span style={{ color: 'var(--gold-soft, #8BB4B8)', fontWeight: 600 }}>Profile</span>
        </div>

        <div style={{ maxWidth: '840px' }}>
          <h1
            className="animate__animated animate__fadeInUp"
            style={{
              fontFamily: 'var(--font-display, "Urbanist", sans-serif)',
              fontSize: 'clamp(42px, 5.5vw, 76px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#fff',
              margin: '0 0 28px 0'
            }}
          >
            We develop places <span style={{ display: 'block', color: '#8BB4B8', fontWeight: 400, fontStyle: 'italic', fontFamily: 'serif' }}>that outlive us.</span>
          </h1>
          <p
            className="animate__animated animate__fadeInUp"
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.75)',
              margin: 0,
              maxWidth: '680px'
            }}
          >
            Nova Development is a global land &amp; real estate group creating master-planned communities, residences, and commercial destinations — governed by an uncompromised standard of design, engineering, and stewardship.
          </p>
        </div>
      </div>
    </section>
  );
}