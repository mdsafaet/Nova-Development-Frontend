import React from 'react';
import { img } from "@/assets/images";

export default function Top() {
  return (
    <section className="stg-top" style={{ background: '#F8F7F4', padding: '90px 0 40px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Architectural Image Container */}
        <div 
          className="stg-image fade-reveal" 
          style={{ 
            position: 'relative', 
            maxWidth: '420px', 
            width: '100%',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(13, 24, 51, 0.08)'
          }}
        >
          <img 
            src={img.chairmen} 
            alt="Group Chairman — Nova Development" 
            style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block', filter: 'grayscale(15%) contrast(105%)' }}
          />
          {/* Subtle architectural border frame accent */}
          <div style={{ position: 'absolute', inset: '16px', border: '1px solid rgba(255, 255, 255, 0.25)', pointerEvents: 'none' }} />
        </div>

        {/* Minimalist Corporate Label */}
        <div className="stg-name" style={{ textAlign: 'center', marginTop: '32px' }}>
          <h2 className="reveal" style={{ fontSize: '32px', fontWeight: 800, color: '#0D1833', letterSpacing: '-0.02em', margin: '0 0 8px 0' }}>
            Chairman’s Office
          </h2>
          <span className="reveal" style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#23646C', fontWeight: 700 }}>
            Group Chairman — Nova Development
          </span>
        </div>

      </div>
    </section>
  );
}