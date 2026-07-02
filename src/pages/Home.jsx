import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';
import MagneticButton from '../components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      <section 
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y,
            opacity,
            zIndex: -1,
            backgroundImage: 'url(/images/hero_vision_1783015805267.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Subtle gradient overlay to ensure text readability on the image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, rgba(255,255,255,1) 100%)',
          zIndex: -1
        }} />

        <div className="container" style={{ textAlign: 'center', paddingTop: '120px', paddingBottom: '4rem' }}>
          <AnimatedSection delay={0.2} style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem', 
              background: 'var(--accent-blue)', 
              color: 'var(--accent-blue-text)', 
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '2rem'
            }}>
              Coming Soon
            </span>
          </AnimatedSection>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AnimatedText 
              text="A Compassionate Future" 
              className="text-hero" 
              style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-primary)' }} 
            />
          </div>
          
          <AnimatedSection delay={0.6}>
            <p className="text-body-lg" style={{ 
              maxWidth: '600px', 
              margin: '0 auto 3rem',
              color: 'var(--text-secondary)'
            }}>
              The Missing Luna is not just an organization. It's a vision for a kinder world. 
              We are currently laying the foundation for our official launch.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <Link to="/vision" style={{ textDecoration: 'none' }}>
              <MagneticButton>
                Explore The Vision <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </MagneticButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-cols-2" style={{ alignItems: 'center' }}>
            <AnimatedSection>
              <h2 className="text-h2" style={{ marginBottom: '2rem' }}>
                Why We Exist<br/>Before We Begin.
              </h2>
              <p className="text-body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We believe that true impact requires deep preparation. The Missing Luna is currently in its foundational phase, gathering the brightest minds and kindest hearts.
              </p>
              <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
                Our focus areas will span across education, healthcare, and animal welfare, rooted deeply in the spirit of India.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
                filter: 'blur(40px)',
                opacity: 0.5,
                zIndex: 0,
                borderRadius: '50%'
              }} />
              <div className="glass-panel" style={{ 
                padding: 'clamp(2rem, 6vw, 4rem)', 
                position: 'relative', 
                zIndex: 1, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                aspectRatio: '1'
              }}>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>Zero Fake Numbers.</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  You won't find any donation trackers or fabricated impact metrics here. 
                  We communicate purely what we aspire to achieve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
