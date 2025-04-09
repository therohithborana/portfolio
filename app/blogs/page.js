'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import BlogsList from '@/components/BlogsList'

export default function BlogsPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Blog data
  const blogs = [
    {
      title: "12 Roles You Can Play in a Group Discussion and How to Use Them Right",
      description: "Group discussions can be challenging to navigate. Learn about 12 distinct roles you can adopt to make the most of these interactions, whether in interviews, team meetings, or academic settings.",
      date: "Apr 7, 2025",
      url: "https://medium.com/@boranarohith07/12-roles-you-can-play-in-a-group-discussion-and-how-to-use-them-right-eb1de465e5b8",
      readTime: "5 min read",
      platform: "Medium",
      image: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*rAzD_QNQX1kmpWuR.jpg"
    }
    // Add more blogs here as you publish them
  ]

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <main>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '7rem 2rem 4rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>My Blog</h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          maxWidth: '800px',
          textAlign: 'center',
          marginBottom: '3rem',
          opacity: 0.8
        }}>
          Thoughts on technology, communication, and more.
        </p>

        {isLoading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px'
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
        ) : (
          <BlogsList blogs={blogs} />
        )}

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