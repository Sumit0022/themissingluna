import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

export default function About() {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <AnimatedSection style={{ marginBottom: '4rem' }}>
          <AnimatedText 
            text="The Story Before The Beginning" 
            className="text-h1" 
            style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2} style={{ marginBottom: '4rem' }}>
          <h3 className="text-h3" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            A World Running Out of Time for Kindness
          </h3>
          <p className="text-body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            We live in an era of unprecedented technological advancement. We are more connected than ever, yet paradoxically, more isolated. In the race toward the future, something vital is being left behind: empathy.
          </p>
          <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
            The Missing Luna was conceived from a single, quiet realization—that true progress cannot be measured solely by innovation or scale. It must be measured by how gently we treat the vulnerable among us.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4} style={{ marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem)', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '100px',
              height: '100px',
              background: 'var(--accent-blue)',
              filter: 'blur(30px)',
              borderRadius: '50%',
              zIndex: -1,
              opacity: 0.6
            }} />
            <h2 className="text-h2" style={{ marginBottom: '2rem' }}>
              Why "Luna"?
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              The moon does not produce its own light; it reflects the light of the sun to illuminate the darkest hours of the night. 
            </p>
            <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
              Like the moon, we do not claim to be the source of all goodness. Instead, we aim to reflect the kindness, resources, and compassion of humanity into the corners of society that need it the most—whether that is bringing modern education to forgotten children, or creating safe havens for animals. The "Missing" piece is the gap we intend to fill.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <h3 className="text-h3" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            The Blueprint of the Future
          </h3>
          <p className="text-body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Right now, The Missing Luna is an idea taking root. We are carefully designing our systems, gathering passionate minds, and laying an unshakable foundation. We are not rushing to launch. We are taking the time to ensure that when we do open our doors, our impact is profound, sustainable, and purely transparent.
          </p>
          <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
            This is not just another organization. This is a movement waiting to be born.
          </p>
        </AnimatedSection>

      </div>
    </div>
  );
}
