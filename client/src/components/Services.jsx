import { motion } from 'framer-motion'
import Section from './ui/Section'
import { services } from '../data/content'
import { stagger, fadeIn } from '../lib/motion'

export default function Services(){
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Diagnostics, repairs & upgrades"
      subtitle="A comprehensive electrical service for cars, vans and EVs."
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {services.map((s, idx) => (
          <motion.div key={idx} variants={fadeIn(idx*0.05)} className="glass rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-11 w-11 rounded-xl bg-brand-500/15 ring-1 ring-brand-500/40 grid place-items-center">
                <s.icon className="h-6 w-6 text-brand-300"/>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-300">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}