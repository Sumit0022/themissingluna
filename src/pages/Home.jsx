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
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <MagneticButton>
                Read The Story <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </MagneticButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract background shapes */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50vw', height: '50vw', background: 'var(--accent-purple)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.15, zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50vw', height: '50vw', background: 'var(--accent-blue)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.15, zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-cols-2" style={{ alignItems: 'center', gap: '6rem' }}>
            <AnimatedSection>
              <h2 className="text-h2" style={{ marginBottom: '2.5rem', color: 'var(--bg-primary)' }}>
                Why We Exist<br/>Before We Begin.
              </h2>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent-blue-text)', marginBottom: '2.5rem' }} />
              <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                We believe that true impact requires deep preparation. The Missing Luna is currently in its foundational phase, gathering the brightest minds and kindest hearts.
              </p>
              <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                Our focus areas will span across education, healthcare, and animal welfare, rooted deeply in the spirit of India.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'relative' }}
              >
                {/* Glowing Aura Behind Card */}
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  background: 'linear-gradient(135deg, var(--accent-purple-text), var(--accent-blue-text))',
                  filter: 'blur(25px)',
                  opacity: 0.8,
                  zIndex: 0,
                  borderRadius: '32px'
                }} />
                
                {/* Dark Glass Card */}
                <div style={{ 
                  background: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '32px',
                  padding: 'clamp(3rem, 5vw, 5rem)', 
                  position: 'relative', 
                  zIndex: 1, 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
                    borderRadius: '50%',
                    margin: '0 auto 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 0 30px rgba(224, 242, 254, 0.5)'
                  }}>
                    0
                  </div>
                  <h3 className="text-h2" style={{ marginBottom: '1.5rem', color: 'var(--bg-primary)' }}>Zero Fake Numbers.</h3>
                  <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    You won't find any donation trackers or fabricated impact metrics here. 
                    We communicate purely what we aspire to achieve.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
