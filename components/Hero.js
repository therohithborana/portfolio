'use client'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Rohith Borana"

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
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, var(--text) 30%, var(--accent) 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {displayText}
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: 'var(--accent)',
          marginBottom: '2rem'
        }}>
          Cracked Engineer | Builder | Beatboxer
        </p>
      </div>
    </section>
  )
}

export default Hero 