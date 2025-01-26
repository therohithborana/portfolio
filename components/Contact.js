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
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: 'var(--text)'
        }}>
          Get In Touch
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'var(--text)',
          marginBottom: '2rem'
        }}>
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out!
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <a 
            href="mailto:boranarohith07@gmail.com" 
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: 'var(--accent)',
              color: 'var(--text)',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '1.1rem',
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
            gap: '1.5rem',
            alignItems: 'center'
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
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--text)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>{link.icon}</span>
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