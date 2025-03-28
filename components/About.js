'use client'

const About = () => {
  return (
    <section id="about" style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '20px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)',
        opacity: 0.05,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '2rem',
          color: 'var(--text)'
        }}>
          About Me
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          lineHeight: '1.8',
          color: 'var(--text)',
          marginBottom: '1.5rem',
          maxWidth: '800px'
        }}>
          I'm Rohith Borana, a third-year AI & ML engineering student at PES College of Engineering. I love building projects that solve real-world problems, often inspired by my own experiences. I'm passionate about psychology and neuroscience-focused ML research, and I'm also a bit of a polymath—loving music production, playing instruments, and beatboxing. Fun fact: I can type at 100 wpm!
        </p>
        
        <div style={{
          marginTop: '2rem'
        }}>
          <a 
            href="https://drive.google.com/file/d/1F2o31Pra9fbVB4SCHhItWYNycY69d50Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--secondary)',
              color: 'var(--text)',
              padding: '0.875rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(112, 0, 255, 0.3)';
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--secondary)';
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707L9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About 