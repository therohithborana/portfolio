'use client'
import { useState, useEffect, useRef } from 'react'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
  </svg>
);

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(new Set())
  const [activeProject, setActiveProject] = useState(null)
  const projectRefs = useRef([])
  const timelineRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectIndex = projectRefs.current.indexOf(entry.target)
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set([...prev, projectIndex]))
            setActiveProject(projectIndex)
            
            // Reset active project after animation time
            setTimeout(() => {
              if (setActiveProject) {
                setActiveProject(null)
              }
            }, 1000)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    )

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "OneStep",
      description: "A goal-tracking web app that helps you build consistency with daily progress tracking, heatmap visualizations, and detailed statistics. Stay motivated and achieve your goals!",
      tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Clerk"],
      link: "https://onestep-azure.vercel.app/",
      github: "https://github.com/therohithborana/onestep",
      year: "2025"
    },
    {
      title: "File.Jalebi",
      description: "Jalebi-Fafda is a peer-to-peer file sharing application that operates without the need for a central server. Leveraging WebRTC technology, it enables users to share files directly between browsers, ensuring efficient and secure transfers.",
      tech: ["NextJs", "WebRTC", "Peer-to-Peer File sharing"],
      link: "https://jalebi-fafda.vercel.app/",
      github: "https://github.com/therohithborana/jalebi_webrtc",
      image: "/jalebi.png",
      year: "2025"
    },
    {
      title: "RagaChat",
      description: "RagaChat is a real-time chat app with a musical twist! Connect with fellow music lovers, share your favorite tunes, and discuss everything from classical ragas to modern beats on public forums. Built with Next.js, it features Clerk authentication and real-time messaging powered by GetStream.io.",
      tech: ["Next.js", "ClerkAuth", "GetStream.io", "Vercel"],
      link: "https://ragachat.vercel.app",
      github: "https://github.com/therohithborana/RagaChat",
      image: "/ragachat-landing.png",
      year: "2025"
    },
    {
      title: "CypherNote",
      description: "CypherNote is a platform that allows users to take secure and encrypted notes. It ensures privacy by encrypting content, making it accessible only to the user.",
      tech: ["JavaScript", "Vite JS"],
      link: "https://cyphernote.vercel.app/",
      github: "https://github.com/therohithborana/cyphernote",
      image: "/cyphernote-landing.png",
      year: "2025"
    },
    {
      title: "BariGuru",
      description: "You want to write your college assignment but you are lazy? We got you! Find people from your college who are ready to write assignments for you! And guess what, you can be a writer too.",
      tech: ["JavaScript", "Supabase", "HTML/CSS", "Node.js", "Vercel"],
      link: "https://bariguru.vercel.app",
      github: "https://github.com/therohithborana/bari-guru",
      image: "/bariguru-landing.png",
      year: "2025"
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
         Some recent things I built, arranged in a timeline
        </p>

        {/* Timeline container */}
        <div 
          ref={timelineRef}
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '1rem 0 2rem'
          }}
        >
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: isMobile ? '20px' : '50%',
            width: '4px',
            backgroundColor: 'rgba(112, 0, 255, 0.2)',
            transform: isMobile ? 'none' : 'translateX(-2px)'
          }} />

          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              style={{
                display: 'flex',
                position: 'relative',
                margin: '3rem 0',
                opacity: visibleProjects.has(index) ? 1 : 0,
                transform: visibleProjects.has(index) 
                  ? 'translateY(0)' 
                  : `translateY(${index % 2 === 0 || isMobile ? '50px' : '-50px'})`,
                transition: 'all 0.8s ease',
                flexDirection: isMobile ? 'row' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                justifyContent: 'flex-start',
                width: '100%'
              }}
            >
              {/* Year indicator */}
              <div style={{
                position: 'absolute',
                left: isMobile ? '20px' : '50%',
                top: 0,
                transform: isMobile ? 'translateX(-50%)' : 'translateX(-50%) translateY(-150%)',
                backgroundColor: 'var(--accent)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                zIndex: 5,
                display: index === 0 || projects[index-1].year !== project.year ? 'block' : 'none'
              }}>
                {project.year}
              </div>

              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: isMobile ? '20px' : '50%',
                top: isMobile ? '0' : '50%',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--secondary)',
                border: '4px solid var(--background)',
                transform: isMobile ? 'translateX(-50%)' : 'translate(-50%, -50%)',
                zIndex: 2,
                transition: 'all 0.5s ease',
                boxShadow: activeProject === index ? '0 0 15px rgba(112, 0, 255, 0.8)' : 'none',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'var(--accent)',
                  opacity: visibleProjects.has(index) ? 1 : 0,
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transform: visibleProjects.has(index) ? 'scale(1)' : 'scale(0)',
                  borderRadius: '50%'
                }} />
              </div>

              {/* Content */}
              <div style={{
                width: isMobile ? 'calc(100% - 50px)' : '45%',
                marginLeft: isMobile ? '40px' : (index % 2 === 0 ? '0' : 'auto'),
                marginRight: isMobile ? '0' : (index % 2 === 0 ? 'auto' : '0'),
                position: 'relative'
              }}>
                <div style={{
                  backgroundColor: 'var(--secondary)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  border: '1px solid transparent',
                  transition: 'all 0.5s ease',
                  transform: visibleProjects.has(index) ? 'translateY(0)' : 
                    (index % 2 === 0 || isMobile ? 'translateY(30px)' : 'translateY(-30px)'),
                  opacity: visibleProjects.has(index) ? 1 : 0,
                  boxShadow: activeProject === index ? '0 10px 30px rgba(112, 0, 255, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.2)',
                  borderColor: activeProject === index ? 'var(--accent)' : 'transparent'
                }}>
                  <h3 style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    color: activeProject === index ? 'var(--accent)' : 'var(--text)',
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    lineHeight: '1.6',
                    color: 'var(--text)',
                    opacity: 0.9,
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        background: activeProject === index ? 'var(--accent)' : 'var(--secondary)',
                        color: 'var(--text)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                        border: '1px solid',
                        borderColor: activeProject === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
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
                        background: activeProject === index ? 'var(--accent)' : 'var(--secondary)',
                        color: 'var(--text)',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        textAlign: 'center',
                        flex: 1,
                        border: '1px solid',
                        borderColor: activeProject === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.5s ease',
                        fontWeight: '500',
                        transform: activeProject === index ? 'translateY(-2px)' : 'translateY(0)',
                        boxShadow: activeProject === index ? '0 5px 15px rgba(112, 0, 255, 0.2)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <LiveIcon />
                      Live
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
                        borderColor: activeProject === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.5s ease',
                        fontWeight: '500',
                        opacity: visibleProjects.has(index) ? 1 : isMobile ? 0.7 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <GitHubIcon />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* More Projects Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            <a 
              href="https://github.com/therohithborana"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'var(--secondary)',
                color: 'var(--text)',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(112, 0, 255, 0.3)';
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
              <GitHubIcon />
              More Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 