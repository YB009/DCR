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
        <div className="hidden md:flex items-center gap-8">
          {nav.map(i => (
            <a key={i.id} href={`#${i.id}`} className="text-sm text-slate-300 hover:text-white transition">
              {i.label}
            </a>
          ))}
          <Button href="#contact" className="text-sm">Contact Us</Button>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" aria-label="Open menu" onClick={()=>setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" onClick={()=>setOpen(false)}>
          <div className="absolute right-3 top-3">
            <button className="p-2 rounded-lg bg-white/10" onClick={()=>setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="glass absolute inset-x-4 top-20 rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              {nav.map(i => (
                <a key={i.id} href={`#${i.id}`} className="text-base" onClick={()=>setOpen(false)}>{i.label}</a>
              ))}
              <Button href="#contact" onClick={()=>setOpen(false)}>Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}