'use client'

import Navbar from '@/components/Navbar.js'
import Hero from '@/components/Hero.js'
import About from '@/components/About.js'
import Projects from '@/components/Projects.js'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
} 