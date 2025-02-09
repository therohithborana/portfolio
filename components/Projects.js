'use client'
import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [visibleProjects, setVisibleProjects] = useState(new Set())
  const projectRefs = useRef([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 400)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const projectIndex = projectRefs.current.indexOf(entry.target)
            if (entry.isIntersecting) {
              setVisibleProjects(prev => new Set([...prev, projectIndex]))
            } else {
              setVisibleProjects(prev => {
                const newSet = new Set(prev)
                newSet.delete(projectIndex)
                return newSet
              })
            }
          })
        },
        {
          threshold: 0.3, // Trigger when 30% of the project is visible
          rootMargin: '-10% 0px' // Slightly delay the trigger
        }
      )

      projectRefs.current.forEach(ref => {
        if (ref) observer.observe(ref)
      })

      return () => observer.disconnect()
    }
  }, [isMobile])

  const projects = [
    {
      title: "File.Jalebi",
      description: "Jalebi-Fafda is a peer-to-peer file sharing application that operates without the need for a central server. Leveraging WebRTC technology, it enables users to share files directly between browsers, ensuring efficient and secure transfers.",
      tech: ["NextJs", "WebRTC", "Peer-to-Peer File sharing"],
      link: "https://jalebi-fafda.vercel.app/",
      github: "https://github.com/therohithborana/jalebi_webrtc",
      image: "/jalebi.png"
    },
    {
      title: "RagaChat",
      description: "RagaChat is a real-time chat app with a musical twist! Connect with fellow music lovers, share your favorite tunes, and discuss everything from classical ragas to modern beats on public forums. Built with Next.js, it features Clerk authentication and real-time messaging powered by GetStream.io.",
      tech: ["Next.js", "ClerkAuth", "GetStream.io", "Vercel"],
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
         Some recent things I built :) 
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              onMouseEnter={() => !isMobile && setHoveredProject(index)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
              style={{
                background: 'var(--secondary)',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                borderRadius: '12px',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transform: (hoveredProject === index || visibleProjects.has(index)) ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: (hoveredProject === index || visibleProjects.has(index))
                  ? '0 10px 30px rgba(112, 0, 255, 0.2)'
                  : '0 4px 20px rgba(0, 0, 0, 0.2)',
                border: '1px solid',
                borderColor: (hoveredProject === index || visibleProjects.has(index)) ? 'var(--accent)' : 'transparent',
                opacity: visibleProjects.has(index) ? 1 : isMobile ? 0.7 : 1
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
                gap: isMobile ? '1rem' : '1.5rem',
                flexDirection: isMobile ? 'column' : 'row'
              }}>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: (hoveredProject === index || visibleProjects.has(index)) ? 'var(--accent)' : 'var(--secondary)',
                    color: 'var(--text)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    textAlign: 'center',
                    flex: 1,
                    border: '1px solid',
                    borderColor: (hoveredProject === index || visibleProjects.has(index)) ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.5s ease',
                    fontWeight: '500',
                    transform: (hoveredProject === index || visibleProjects.has(index)) ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: (hoveredProject === index || visibleProjects.has(index)) 
                      ? '0 5px 15px rgba(112, 0, 255, 0.2)'
                      : 'none'
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
                    borderColor: (hoveredProject === index || visibleProjects.has(index)) ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.5s ease',
                    fontWeight: '500',
                    opacity: visibleProjects.has(index) ? 1 : isMobile ? 0.7 : 1
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