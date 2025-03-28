'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function BlogsPage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 2rem 4rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>My Blog</h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          maxWidth: '800px',
          textAlign: 'center',
          marginBottom: '3rem',
          opacity: 0.8
        }}>
          Coming soon! I'll be sharing my thoughts on technology, programming, and more.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            border: '2px solid var(--accent)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'pulse 2s infinite'
          }}>
            <span style={{
              fontSize: '1.5rem',
              color: 'var(--accent)'
            }}>📝</span>
          </div>
        </div>

        <style jsx global>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </main>
  )
} 