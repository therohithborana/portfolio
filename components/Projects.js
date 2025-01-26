'use client'

const Projects = () => {
  const projects = [
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
      link: "https://image-go.vercel.app",
      github: "https://github.com/therohithborana/ImageGo",
      image: "/imagego-landing.png"
    }
  ]

  return (
    <section id="projects" style={{
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
          Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: 'var(--secondary)',
              padding: '1.5rem',
              borderRadius: '8px',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '100%',
                height: '200px',
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--text)'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--text)',
                flex: 1
              }}>
                {project.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    background: 'var(--accent)',
                    color: 'var(--text)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--text)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    flex: 1
                  }}
                >
                  Live Demo
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--secondary)',
                    border: '1px solid var(--accent)',
                    color: 'var(--text)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    flex: 1
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