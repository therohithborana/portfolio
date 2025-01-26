'use client'

const About = () => {
  return (
    <section id="about" style={{
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
          I'm Rohith Borana, a third-year AI & ML engineering student at PES College of Engineering. I create projects that solve real-world problems, often inspired by my own experiences. My interests span psychology and neuroscience-focused ML research, while my creative side shines through music production, playing instruments, and beatboxing. Fun fact: I type at 100 wpm!
        </p>
      </div>
    </section>
  )
}

export default About 