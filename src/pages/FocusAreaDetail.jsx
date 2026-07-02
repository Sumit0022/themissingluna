import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

const areaDetails = {
  "education": {
    title: "Education",
    subtitle: "Reimagining learning through modern, compassionate systems.",
    content: [
      "Education in India stands at a crossroads. For too long, our systems have prioritized rote memorization and standardized testing over true comprehension and emotional intelligence. The Missing Luna envisions a paradigm shift.",
      "We believe that education should not merely prepare a child for an examination, but for life. Our upcoming blueprint involves creating curriculums that foster critical thinking, creativity, and deep empathy.",
      "Furthermore, accessibility remains a profound challenge. We are designing technological and physical infrastructure to bring world-class, compassionate education to the most marginalized communities, ensuring that geographical birthplaces do not dictate a child's future."
    ]
  },
  "healthcare": {
    title: "Healthcare",
    subtitle: "Building foundations for accessible, empathetic care.",
    content: [
      "True healthcare extends beyond the treatment of physical ailments; it encompasses the holistic well-being of an individual. Currently, many systems are driven by metrics, margins, and profit rather than patient care.",
      "Our vision for healthcare revolves around empathy. We are laying the groundwork for facilities where mental health is treated with the same urgency as physical health, and where patients are heard, not just processed.",
      "A significant portion of our roadmap is dedicated to rural healthcare—bridging the massive divide between urban hospitals and village clinics through telemedicine, mobile health units, and community-trained empathetic caregivers."
    ]
  },
  "women-empowerment": {
    title: "Women Empowerment",
    subtitle: "Fostering environments where leadership and independence flourish.",
    content: [
      "Empowerment is not a buzzword; it is a fundamental restructuring of society to ensure safety, equality, and opportunity. The Missing Luna approaches women's empowerment through the lens of economic and social independence.",
      "We are designing programs focused on financial literacy, entrepreneurial support, and skill development that directly address systemic barriers.",
      "Beyond economics, we are committed to creating safe spaces—both physical and digital—where women can collaborate, lead, and shape the future of India without fear or prejudice."
    ]
  },
  "animal-welfare": {
    title: "Animal Welfare",
    subtitle: "Extending our kindness to all living beings.",
    content: [
      "The measure of a society's compassion is often reflected in how it treats its most defenseless members. In India, millions of stray animals navigate harsh urban environments daily.",
      "The Missing Luna is designing scalable solutions for animal welfare that go beyond temporary shelters. We are planning comprehensive trap-neuter-return (TNR) programs, widespread rabies vaccination drives, and community education to foster peaceful coexistence.",
      "Our future vision includes building state-of-the-art veterinary infrastructure accessible to street animals, ensuring they receive the dignity and care that every living creature deserves."
    ]
  }
};

export default function FocusAreaDetail() {
  const { id } = useParams();
  const detail = areaDetails[id];

  if (!detail) {
    return <div className="container" style={{ paddingTop: '150px' }}>Area not found.</div>;
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Back button */}
          <Link to="/focus-areas" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'var(--text-secondary)', 
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500
          }}>
            &larr; Back to Focus Areas
          </Link>

          <div className="detail-layout">
            
            {/* Sidebar (Index) */}
            <aside className="detail-sidebar">
              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '24px' }}>
                <span className="eyebrow" style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                  The Index
                </span>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {Object.entries(areaDetails).map(([key, area]) => (
                    <Link 
                      key={key} 
                      to={`/focus-areas/${key}`}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: key === id ? 'var(--accent-blue-text)' : 'var(--text-secondary)',
                        background: key === id ? 'var(--accent-blue)' : 'transparent',
                        fontWeight: key === id ? 600 : 500,
                        fontSize: '0.875rem',
                        transition: 'all 0.2s'
                      }}
                    >
                      {area.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="detail-main">
              <AnimatedSection>
                <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '32px' }}>
                  <h1 className="text-h1" style={{ marginBottom: '1rem' }}>{detail.title}</h1>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '3rem' }}>
                    {detail.subtitle}
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {detail.content.map((paragraph, idx) => (
                      <p key={idx} className="text-body-lg" style={{ 
                        color: 'var(--text-primary)', 
                        lineHeight: '1.8' 
                      }}>
                        {idx === 0 ? (
                          <span style={{ 
                            float: 'left', 
                            fontSize: '4rem', 
                            lineHeight: '0.8', 
                            paddingRight: '0.5rem', 
                            color: 'var(--accent-blue-text)',
                            fontFamily: 'Outfit, sans-serif',
                            fontWeight: 'bold'
                          }}>
                            {paragraph.charAt(0)}
                          </span>
                        ) : null}
                        {idx === 0 ? paragraph.substring(1) : paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}
