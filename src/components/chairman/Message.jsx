import React, { useEffect, useState, useRef } from 'react';

// International Standard Floating Metric Box with Count-Up
const MetricPillar = ({ endValue, suffix = "+", title, description, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; 
          const incrementTime = 30;
          const step = Math.ceil(endValue / (duration / incrementTime));

          const timer = setInterval(() => {
            start += step;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return (
    <div 
      ref={cardRef} 
      className="floating-card reveal" 
      style={{ 
        background: '#FFFFFF',
        border: '1px solid #E6E4DD',
        borderRadius: '12px',
        padding: '36px 28px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        animationDelay: delay,
        boxShadow: '0 10px 30px rgba(13, 24, 51, 0.03)'
      }}
    >
      <div style={{ fontSize: '38px', fontWeight: 800, color: '#0D1833', letterSpacing: '-0.03em', marginBottom: '8px', fontFamily: 'var(--font-display, "Urbanist", sans-serif)' }}>
        {count}{suffix}
      </div>
      <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#23646C', margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>{title}</h4>
      <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6C7086', margin: 0 }}>{description}</p>
    </div>
  );
};

export default function Message() {
  return (
    <section className="stg-message" style={{ background: '#F8F7F4', padding: '40px 0 120px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Executive Letter Body */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E6E4DD', borderRadius: '16px', padding: '70px 80px', boxShadow: '0 20px 40px rgba(13, 24, 51, 0.02)' }}>
          
          <p className="lead reveal" style={{ fontSize: '20px', lineHeight: 1.6, color: '#0D1833', fontWeight: 500, margin: '0 0 32px 0', fontFamily: 'serif', fontStyle: 'italic' }}>
            "We understand that real estate is not merely about properties; it’s about aspirations, dreams, and creating spaces where life unfolds with absolute distinction."
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', lineHeight: 1.8, color: '#4A4E58' }}>
            <p className="reveal">
              Our unwavering commitment is to bring those dreams to life and provide you with the highest level of service and satisfaction. Every master plan, every acre, and every partnership is guided by long-term thinking — ensuring what we build today remains relevant, sustainable, and cherished tomorrow.
            </p>
            <p className="reveal">
              Throughout our journey, we have upheld three fundamental pillars: <strong>Excellence, Integrity, and Community</strong>. These pillars form the bedrock of our corporate governance. We believe that by consistently delivering architectural excellence, operating with total transparency, and nurturing communities, we craft a lasting legacy.
            </p>
            <p className="reveal">
              The real estate landscape is in constant evolution. As Chairman, I assure you that we remain at the forefront of this transformation—leveraging advanced engineering and sustainable technologies to ensure your investment journey is completely seamless.
            </p>
          </div>

          {/* International Standard Bento Grid for Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '60px' }}>
            <MetricPillar 
              endValue={100} 
              suffix="%" 
              title="Excellence" 
              description="Uncompromising standards in design, structural engineering, and client service."
              delay="0s"
            />
            <MetricPillar 
              endValue={100} 
              suffix="%" 
              title="Integrity" 
              description="Total operational accountability, transparency, and ethical governance."
              delay="0.2s"
            />
            <MetricPillar 
              endValue={4} 
              suffix="" 
              title="Global Markets" 
              description="Delivering master-planned communities and iconic destinations across regions."
              delay="0.4s"
            />
          </div>

          {/* Global Footprint Executive Banner */}
          <div 
            className="reveal" 
            style={{ 
              marginTop: '50px', 
              padding: '32px 40px', 
              background: '#0D1833', 
              borderRadius: '12px', 
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <strong style={{ display: 'block', fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px', color: '#8BB4B8' }}>
                Global Impact
              </strong>
              <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>45+ projects · 3,200 acres · 4 markets — One unified standard.</p>
            </div>
            <div style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '20px' }}>
              Design &bull; Engineering &bull; Stewardship
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}