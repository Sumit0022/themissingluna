import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';
import AnimatedText from '../ui/AnimatedText';

export default function Footer() {
  return (
    <footer style={{
      padding: '8rem 2rem 4rem',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient for the footer */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '400px',
        background: 'var(--accent-blue)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0,
        opacity: 0.3
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', display: 'block' }}>
            Next Steps
          </span>
          <AnimatedText 
            text="Be Part Of The Change."
            className="text-h1"
            style={{ marginBottom: '3rem', color: 'var(--text-primary)', display: 'inline-block' }}
          />
          <div>
            <Link to="/join" style={{ textDecoration: 'none' }}>
              <MagneticButton>
                Join The Waitlist
              </MagneticButton>
            </Link>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/logo.png" alt="Logo" style={{ width: '28px', height: '28px', opacity: 0.8 }} />
            </Link>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} The Missing Luna.
            </span>
          </div>
          
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Story</Link>
            <Link to="/focus-areas" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Focus Areas</Link>
            <Link to="/join" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Join</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
