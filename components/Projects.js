'use client'
import { useState, useEffect } from 'react'

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 400)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    {
      title: "RagaChat",
      description: "A real-time chat application with a musical twist! Connect with fellow music enthusiasts, share your favorite tunes, and discuss everything from classical ragas to modern beats. Built with Next.js and real-time messaging capabilities.",
      tech: ["Next.js", "JavaScript", "Real-time Chat", "Vercel"],
      link: "https://ragachat.vercel.app",
      github: "https://github.com/therohithborana/RagaChat",
      image: "/ragachat-landing.png"
    },
    {
      title: "BariGuru",
      description: "You want to write your college assignment but you are lazy? We got you! Find people from your college who are ready to write assignments for you! And guess what, you can be a writer too.",
      tech: ["JavaScript", "Supabase", "HTML/CSS", "Node.js", "Vercel"],
      link: "https://bariguru.vercel.app",
      github: "https://github.com/therohithborana/bari-guru",
      image: "/bariguru-landing.png"
    },
    {
      title: "ImageGo",
      description: "A simple yet powerful image sharing platform. Upload your images and share them using unique 4-character codes. Quick, easy, and hassle-free!",
      tech: ["JavaScript", "Firebase", "Vercel", "Node.js", "HTML/CSS"],
      link: "https://less-goo.vercel.app",
      github: "https://github.com/therohithborana/lessGoo",
      image: "/imagego-landing.png"
    }
  ]

  return (
    <section id="projects" style={{
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
        background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)',
        opacity: 0.05,
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
          Projects I Built
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          lineHeight: '1.8',
          color: 'var(--text)',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 3rem',
          textAlign: 'center'
        }}>
          Here are some of my recent projects that showcase my skills and passion for building great software.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)'
        }}>
          {projects.map((project, index) => (
            <div key={index} 
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: 'var(--secondary)',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transform: hoveredProject === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredProject === index 
                  ? '0 10px 30px rgba(112, 0, 255, 0.2)'
                  : '0 4px 20px rgba(0, 0, 0, 0.2)',
                border: '1px solid',
                borderColor: hoveredProject === index ? 'var(--accent)' : 'transparent'
              }}
            >
              <div style={{
                width: '100%',
                height: 'clamp(150px, 30vw, 200px)',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>
              
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                color: hoveredProject === index ? 'var(--accent)' : 'var(--text)',
                transition: 'color 0.3s ease'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.6',
                color: 'var(--text)',
                opacity: 0.9,
                flex: 1
              }}>
                {project.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    background: hoveredProject === index ? 'var(--accent)' : 'var(--secondary)',
                    color: 'var(--text)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                    border: '1px solid',
                    borderColor: hoveredProject === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: isMobile ? 'column' : 'row'
              }}>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: hoveredProject === index ? 'var(--accent)' : 'var(--secondary)',
                    color: 'var(--text)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    textAlign: 'center',
                    flex: 1,
                    border: '1px solid',
                    borderColor: hoveredProject === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    fontWeight: '500'
                  }}
                >
                  Live Demo
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'transparent',
                    color: 'var(--text)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    textAlign: 'center',
                    flex: 1,
                    border: '1px solid',
                    borderColor: hoveredProject === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    fontWeight: '500'
                  }}
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 