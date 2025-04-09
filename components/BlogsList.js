'use client'
import { useState } from 'react'

const BlogsList = ({ blogs }) => {
  const [hoveredBlog, setHoveredBlog] = useState(null)

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 380px))',
      gap: '2rem',
      width: '100%',
      maxWidth: '1200px',
      justifyContent: 'center'
    }}>
      {blogs.map((blog, index) => (
        <a 
          key={index}
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
          onMouseEnter={() => setHoveredBlog(index)}
          onMouseLeave={() => setHoveredBlog(null)}
        >
          <div style={{
            background: 'var(--secondary)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid',
            borderColor: hoveredBlog === index ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            transform: hoveredBlog === index ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: hoveredBlog === index ? '0 10px 30px rgba(112, 0, 255, 0.2)' : 'none',
            maxWidth: '100%'
          }}>
            <div style={{
              width: '100%',
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={blog.image}
                alt={blog.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.5s ease',
                  transform: hoveredBlog === index ? 'scale(1.05)' : 'scale(1)'
                }}
              />
            </div>
            
            <div style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              flex: 1
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                fontSize: '0.8rem',
                opacity: 0.8
              }}>
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              
              <h2 style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
                color: hoveredBlog === index ? 'var(--accent)' : 'var(--text)',
                transition: 'color 0.3s ease'
              }}>
                {blog.title}
              </h2>
              
              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.5,
                opacity: 0.9,
                marginBottom: '1rem',
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {blog.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: 'auto'
              }}>
                {blog.platform === "Medium" && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: hoveredBlog === index ? 'var(--accent)' : '#ccc',
                    transition: 'color 0.3s ease'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 1043.63 592.71" fill="currentColor">
                      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                    </svg>
                    Read on Medium
                  </div>
                )}
                {!blog.platform || blog.platform !== "Medium" && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: hoveredBlog === index ? 'var(--accent)' : '#ccc',
                    transition: 'color 0.3s ease'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.51 16.998c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12.6c-3.092 0-5.6 2.508-5.6 5.6s2.508 5.6 5.6 5.6 5.6-2.508 5.6-5.6-2.508-5.6-5.6-5.6z"></path>
                      <path d="M7.499 21.991c-1.031 0-2.063-.394-2.851-1.183-1.572-1.574-1.572-4.129 0-5.701l3.035-3.036c.377-.377.989-.377 1.366 0 .377.377.377.989 0 1.365l-3.035 3.036c-.818.818-.818 2.151 0 2.971.818.818 2.151.818 2.971 0l3.035-3.036c.377-.377.989-.377 1.365 0 .377.377.377.989 0 1.365l-3.036 3.036c-.787.789-1.818 1.183-2.85 1.183z"></path>
                      <path d="M19.521 10.018c-.256 0-.512-.098-.707-.293l-3.035-3.035c-.818-.818-.818-2.151 0-2.971.818-.818 2.151-.818 2.971 0l3.035 3.035c.377.377.377.989 0 1.365-.195.196-.451.293-.707.293-.256 0-.512-.098-.708-.293z"></path>
                    </svg>
                    Read on {blog.platform}
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default BlogsList 