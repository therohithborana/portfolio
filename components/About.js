'use client'

const About = () => {
  return (
    <section id="about" style={{
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
          About Me
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'var(--text)',
          marginBottom: '1.5rem'
        }}>
          I'm a passionate AI/ML Engineer with a strong foundation in problem-solving and software development. 
          I love building innovative solutions and exploring new technologies.
        </p>
      </div>
    </section>
  )
}

export default About 