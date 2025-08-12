import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import Logo from './Logo'
import { nav } from '../data/content'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top">
          <Logo />
        </a>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {nav.map(i => (
            <a key={i.id} href={`#${i.id}`} className="text-sm text-slate-300 hover:text-white transition">
              {i.label}
            </a>
          ))}
          <Button href="#contact" className="text-sm">Contact Us</Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10" 
          aria-label="Open menu" 
          onClick={()=>setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      
      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-black/90">
          {/* Close button */}
          <button 
            className="absolute right-4 top-4 z-20 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" 
            onClick={()=>setOpen(false)} 
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          {/* Menu content */}
          <div className="flex items-center justify-center min-h-screen px-6">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 w-full max-w-sm border border-white/10">
              <div className="flex flex-col space-y-6">
                {/* Navigation links */}
                {nav.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    className="text-xl font-medium text-white hover:text-brand-300 transition-colors text-center py-3" 
                    onClick={()=>setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Contact button */}
                <div className="pt-6 border-t border-white/10">
                  <Button 
                    href="#contact" 
                    onClick={()=>setOpen(false)} 
                    className="w-full justify-center text-lg py-3"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}