import { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlassCard from '../components/ui/GlassCard';
import MagneticButton from '../components/ui/MagneticButton';
import AnimatedText from '../components/ui/AnimatedText';

export default function Join() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId || botToken.includes('your_bot_token')) {
      // Simulate success if API keys are not yet configured
      setTimeout(() => setStatus('success'), 1500);
      return;
    }

    const text = `🌟 *New Waitlist Entry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message || 'N/A'}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Telegram API Error:", error);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1.25rem',
    borderRadius: '16px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(255,255,255,0.4)',
    outline: 'none',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    color: 'var(--text-primary)'
  };

  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Side: Typography */}
          <AnimatedSection>
            <div style={{ maxWidth: '500px' }}>
              <span className="eyebrow" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'block' }}>
                The Missing Luna
              </span>
              <AnimatedText 
                text="Wait With Us For The Future." 
                className="text-h1" 
                style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}
              />
              <p className="text-body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                We are currently building the foundation. We are not accepting donations, volunteers, or partners just yet. 
                <br/><br/>
                If our vision resonates with you, leave your details below. You will be the first to know when we are ready to change the world.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side: Form */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem)', width: '100%', position: 'relative', overflow: 'hidden' }}>
              
              {/* Decorative Blur */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-blue)', filter: 'blur(60px)', borderRadius: '50%', zIndex: -1, opacity: 0.5 }} />

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '4rem 0', animation: 'fadeIn 0.5s ease' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-green)', color: 'var(--accent-green-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2rem' }}>
                    ✓
                  </div>
                  <h3 className="text-h2" style={{ marginBottom: '1rem' }}>Received.</h3>
                  <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
                    Your details have been securely sent. We will reach out when the time is right.
                  </p>
                  <button 
                    onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); }}
                    style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'var(--accent-blue-text)', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe" 
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue-text)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="hello@example.com" 
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue-text)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Why do you want to join? (Optional)</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="I believe in your vision because..." 
                      style={{...inputStyle, resize: 'vertical'}}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue-text)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '-0.5rem' }}>
                      Failed to send. Please check your API credentials.
                    </div>
                  )}

                  <MagneticButton style={{ marginTop: '1rem', width: '100%', opacity: status === 'submitting' ? 0.7 : 1 }}>
                    {status === 'submitting' ? 'Sending...' : 'Join The Waitlist'}
                  </MagneticButton>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
