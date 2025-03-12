'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:boranarohith07@gmail.com',
      icon: (color) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: '#EA4335'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohith-borana-b10778266/',
      icon: (color) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/therohithborana',
      icon: (color) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: '#333'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/therohithborana',
      icon: (color) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: '#000000'
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{ 
          fontSize: '1.5rem',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          RB
        </Link>

        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {!isMobile && (
            <>
              <Link href="/#about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>About</Link>
              <Link href="/projects" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Projects</Link>
            </>
          )}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            borderLeft: !isMobile ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            paddingLeft: !isMobile ? '1.5rem' : '0'
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
                  color: hoveredLink === index ? link.color : 'var(--text)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  transform: hoveredLink === index ? 'translateY(-2px)' : 'translateY(0)',
                  opacity: hoveredLink === index ? 1 : 0.7
                }}
                title={link.name}
              >
                {link.icon(hoveredLink === index ? link.color : 'currentColor')}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 