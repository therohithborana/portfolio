'use client'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* Desktop Menu */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}>
          <Link href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
          <Link href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: '1rem',
            display: 'none',
            flexDirection: 'column',
            gap: '1rem',
            '@media (max-width: 768px)': {
              display: 'flex'
            }
          }}>
            <Link 
              href="#about" 
              style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 1rem' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#projects" 
              style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 1rem' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 1rem' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 