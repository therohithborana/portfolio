'use client'

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohith-borana-b10778266/',
      icon: '🔗'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/therohithborana',
      icon: '💻'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/therohithborana',
      icon: '🐦'
    }
  ]

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '2rem',
          color: 'var(--text)'
        }}>
          Get In Touch
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          lineHeight: '1.8',
          color: 'var(--text)',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out!
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1.5rem, 4vw, 2rem)'
        }}>
          <a 
            href="mailto:boranarohith07@gmail.com" 
            style={{
              display: 'inline-block',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
              backgroundColor: 'var(--accent)',
              color: 'var(--text)',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              transition: 'opacity 0.2s',
              width: 'fit-content'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.8'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Send Email
          </a>

          <div style={{
            display: 'flex',
            gap: 'clamp(0.75rem, 2vw, 1.5rem)',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--text)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)',
                  transition: 'transform 0.2s',
                  flexGrow: window.innerWidth <= 500 ? 1 : 0,
                  justifyContent: window.innerWidth <= 500 ? 'center' : 'flex-start'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 