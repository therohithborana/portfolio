'use client'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohith-borana-b10778266/',
      icon: '🔗',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/therohithborana',
      icon: '💻',
      color: '#333'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/therohithborana',
      icon: '🐦',
      color: '#1DA1F2'
    }
  ]

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 0',
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
        background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 50%)',
        opacity: 0.1,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '1rem',
          color: 'var(--text)',
          textAlign: 'center'
        }}>
          Let's Connect!
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          lineHeight: '1.8',
          color: 'var(--text)',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          textAlign: 'center',
          opacity: 0.9
        }}>
          Whether you want to discuss a project, talk about tech, or just say hi,
          I'm always excited to connect with fellow developers and creators!
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(2rem, 4vw, 3rem)',
          alignItems: 'center'
        }}>
          <a 
            href="mailto:boranarohith07@gmail.com" 
            style={{
              display: 'inline-block',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--accent)',
              color: 'var(--text)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              boxShadow: '0 4px 20px rgba(112, 0, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 8px 30px rgba(112, 0, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 20px rgba(112, 0, 255, 0.2)'
            }}
          >
            ✉️ Send me an email
          </a>

          <div style={{
            display: 'flex',
            gap: 'clamp(1rem, 2vw, 2rem)',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 2vw, 2rem)',
                  backgroundColor: hoveredLink === index ? link.color : 'var(--secondary)',
                  color: 'var(--text)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  transition: 'all 0.3s ease',
                  transform: hoveredLink === index ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: hoveredLink === index 
                    ? `0 8px 30px ${link.color}33`
                    : '0 4px 20px rgba(0, 0, 0, 0.2)',
                  minWidth: isMobile ? '100%' : 'auto',
                  justifyContent: 'center'
                }}
              >
                <span style={{ 
                  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                  filter: hoveredLink === index ? 'grayscale(0)' : 'grayscale(0.2)'
                }}>
                  {link.icon}
                </span>
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