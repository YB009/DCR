import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // enable focus ring only when tabbing
  useEffect(() => {
    function handleMouseDown() { document.body.classList.add('using-mouse') }
    function handleKeyDown(e) { if (e.key === 'Tab') document.body.classList.remove('using-mouse') }
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('keydown', handleKeyDown)
    return () => { window.removeEventListener('mousedown', handleMouseDown); window.removeEventListener('keydown', handleKeyDown) }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}