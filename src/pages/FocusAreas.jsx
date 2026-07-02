import AnimatedSection from '../components/ui/AnimatedSection';
import GlassCard from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export default function FocusAreas() {
  const areas = [
    {
      id: "education",
      title: "Education",
      desc: "Reimagining learning through modern, compassionate systems that empower the next generation.",
      img: "/images/focus_education_1783015814821.png",
      color: "var(--accent-orange)"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      desc: "Building foundations for accessible, empathetic care that prioritizes well-being over metrics.",
      img: "/images/focus_healthcare_1783015824827.png",
      color: "var(--accent-green)"
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      desc: "Fostering environments where leadership and independence can flourish.",
      img: "/images/focus_women.png",
      color: "var(--accent-purple)"
    },
    {
      id: "animal-welfare",
      title: "Animal Welfare",
      desc: "Extending our kindness to all living beings, creating safe havens for those without a voice.",
      img: "/images/focus_animal.png",
      color: "var(--accent-blue)"
    }
  ];

  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="text-h1" style={{ marginBottom: '1.5rem' }}>Where We Will Begin.</h1>
          <p className="text-body-lg" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Our vision encompasses several core areas where we believe deep, systemic change is both necessary and possible.
          </p>
        </AnimatedSection>

        <div className="grid-cols-2">
          {areas.map((area, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <Link to={`/focus-areas/${area.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <GlassCard>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <div style={{ 
                      width: '200px',
                      height: '200px', 
                      borderRadius: '50%', 
                      background: area.img ? `url(${area.img}) center/contain no-repeat` : area.color,
                      mixBlendMode: 'multiply',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                    }} />
                  </div>
                  <h3 className="text-h3">{area.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{area.desc}</p>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
