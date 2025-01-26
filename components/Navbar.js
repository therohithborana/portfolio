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
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
          <Link href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 