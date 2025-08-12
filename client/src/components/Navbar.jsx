import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import { nav } from '../data/content'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-brand-500/20 ring-1 ring-brand-500/50 grid place-items-center">
            <span className="font-black text-brand-300">D</span>
          </div>
          <div>
            <p className="font-display text-lg font-extrabold leading-none">DCR Auto Electrics</p>
            <p className="text-xs text-slate-400 leading-none mt-1">Newcastle upon Tyne</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {nav.map(i => (
            <a key={i.id} href={`#${i.id}`} className="text-sm text-slate-300 hover:text-white transition">
              {i.label}
            </a>
          ))}
          <Button href="#contact" className="text-sm">Get a Quote</Button>
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
              <Button href="#contact" onClick={()=>setOpen(false)}>Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}