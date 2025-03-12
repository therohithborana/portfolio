'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
      paddingBottom: '20px',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        width: '100%',
        textAlign: 'center'
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
          Cracked Engineer in Making | Builder | Beatboxer
        </p>

        {/* Add mobile navigation */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          marginTop: '2rem',
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '1.1rem'
        }}>
          <Link href="#about" style={{
            color: 'var(--text)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--accent)',
            paddingBottom: '0.25rem'
          }}>
            About Me
          </Link>
          <Link href="/projects" style={{
            color: 'var(--text)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--accent)',
            paddingBottom: '0.25rem'
          }}>
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero 
