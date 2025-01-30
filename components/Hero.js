'use client'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Rohith Borana!"

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setDisplayText(fullText.substring(0, i))
      i++
      if (i > fullText.length) clearInterval(typing)
    }, 100)
    return () => clearInterval(typing)
  }, [])

  return (
    <section id="home" style={{
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px',
      paddingBottom: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, var(--text) 30%, var(--accent) 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2'
        }}>
          {displayText}
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
          color: 'var(--accent)',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
<<<<<<< HEAD
          Cracked Engineer in Making | Builder | Beatboxer
=======
          Cracked Engineer in making | Builder | Beatboxer
>>>>>>> 0e0d3befa05c40e4261ca6e927b926d76cfb98bf
        </p>
      </div>
    </section>
  )
}

export default Hero 
