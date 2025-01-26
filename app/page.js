'use client'

import Navbar from '@/components/Navbar.js'
import Hero from '@/components/Hero.js'
import About from '@/components/About.js'
import Projects from '@/components/Projects.js'
import Contact from '@/components/Contact.js'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
} 