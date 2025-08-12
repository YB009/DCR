import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Map from './Map'

export default function Contact(){
  const [state, setState] = useState({ status: 'idle', message: '' })

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setState({ status: 'loading', message: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(form.entries()))
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.error || 'Something went wrong')
      setState({ status: 'success', message: 'Thanks! We\'ll be in touch shortly.' })
      e.currentTarget.reset()
    } catch(err){
      setState({ status: 'error', message: err.message })
    }
  }

  return (
    <Section id="contact" eyebrow="Get in touch" title="Book a diagnostic or request a quote" subtitle="Tell us a little about the issue and your vehicle. We\'ll reply with availability and next steps.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.form onSubmit={onSubmit} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} className="glass rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input required name="name" className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Service</label>
              <select name="service" className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-brand-400">
                <option>Diagnostics</option>
                <option>Batteries/Charging</option>
                <option>Wiring/Fault‑finding</option>
                <option>Retrofits & Upgrades</option>
                <option>ECU Programming</option>
                <option>EV/Hybrid</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-slate-300">Vehicle (make, model, year)</label>
              <input name="vehicle" className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-slate-300">Tell us about the issue</label>
              <textarea required name="message" rows="5" className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-brand-400"></textarea>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <button className="btn-gradient disabled:opacity-60" disabled={state.status==='loading'}>
              <span>{state.status==='loading' ? 'Sending…' : 'Send message'}</span>
            </button>
            {state.message && (
              <p className={`text-sm ${state.status==='error' ? 'text-rose-300' : 'text-emerald-300'}`}>{state.message}</p>
            )}
          </div>
        </motion.form>

        <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} className="space-y-4">
          <Map />
          <div className="glass rounded-2xl p-6 text-slate-300">
            <p className="text-white font-semibold">DCR Auto Electrics</p>
            <p>Newcastle upon Tyne · North East, UK</p>
            <p className="mt-2">Mon–Fri 8:30–17:30 · Sat by appointment</p>
            <p className="mt-2">Phone: <a className="underline" href="tel:+441912345678">0191 123 45678</a></p>
            <p>Email: <a className="underline" href="mailto:info@dcr-autoelectrics.co.uk">info@dcr-autoelectrics.co.uk</a></p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}