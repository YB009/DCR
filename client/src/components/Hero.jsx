import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Hero(){
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-400/30 via-indigo-500/20 to-cyan-400/20 blur-3xl"></div>
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <motion.div
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:.8}}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-slate-300">
            Trusted mobile auto electricians — Since 2009
          </p>
          <h1 className="mt-6 font-display text-5xl/tight sm:text-6xl/tight md:text-7xl/tight font-extrabold">
            DCR Auto Electrics
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Diagnostics, wiring repairs, batteries, alternators, starters, retrofits and EV electrical support — delivered with precision and care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact">Book Our Service</Button>
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10" href="tel:+441912345678">
              Call 0191 123 45678
            </a>
          </div>
        </motion.div>
        {/* Showcase card row */}
        <motion.div
          initial={{opacity:0, scale:.96}}
          animate={{opacity:1, scale:1}}
          transition={{delay:.25, duration:.7}}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {["Dealer‑level tools","Same‑day callouts","EV‑aware technicians"].map((t,i)=> (
            <div key={t} className="glass rounded-2xl p-5">
              <p className="text-sm text-slate-300">{t}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}