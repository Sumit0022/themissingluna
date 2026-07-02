import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Excluded '/vision' and other non-operational pages
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Story' },
    { path: '/focus-areas', label: 'Focus' },
  ];

  return (
    <>
      <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/images/logo.png" alt="The Missing Luna Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
        <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>The Missing Luna</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div className="desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => {
                if (location.pathname !== link.path) e.target.style.color = 'var(--text-secondary)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="/join" className="desktop-only" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Join
          </motion.div>
        </Link>
        
        {/* Mobile Hamburger Button */}
        <div 
          className="mobile-only" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ cursor: 'pointer', flexDirection: 'column', gap: '5px', width: '24px', justifyContent: 'center' }}
        >
          <div style={{ width: '100%', height: '2px', background: 'var(--text-primary)', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ width: '100%', height: '2px', background: 'var(--text-primary)', transition: '0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '100%', height: '2px', background: 'var(--text-primary)', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 49,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '1.25rem',
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/join" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <div
              style={{
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 500
              }}
            >
              Join
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
