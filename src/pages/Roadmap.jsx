import AnimatedSection from '../components/ui/AnimatedSection';

export default function Roadmap() {
  const phases = [
    { phase: "Phase One", title: "Foundation", desc: "Gathering the brightest minds and kindest hearts to build our core principles." },
    { phase: "Phase Two", title: "Community Building", desc: "Forming alliances with those who share our vision for a compassionate future." },
    { phase: "Phase Three", title: "Registration", desc: "Solidifying our structure and preparing for official operations." },
    { phase: "Phase Four", title: "Projects", desc: "Launching our first initiatives in education and healthcare." },
    { phase: "Phase Five", title: "Long-term Impact", desc: "Sustaining change and nurturing communities across India." }
  ];

  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="text-h1" style={{ marginBottom: '1.5rem' }}>The Path Forward.</h1>
          <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
            We are playing a long game. Real change isn't measured in quarters, but in generations. Here is how we plan to unfold our vision.
          </p>
        </AnimatedSection>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--glass-border)'
          }} />

          {phases.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} style={{ 
              display: 'flex', 
              gap: '2rem',
              marginBottom: '4rem',
              position: 'relative'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '2px solid var(--accent-blue-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                fontWeight: 600,
                color: 'var(--accent-blue-text)'
              }}>
                {idx + 1}
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{item.phase}</span>
                <h3 className="text-h3" style={{ margin: '0.5rem 0' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
