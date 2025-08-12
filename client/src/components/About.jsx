import { motion } from 'framer-motion'
import Section from './ui/Section'

export default function About(){
  return (
    <Section
      id="about"
      eyebrow="Why choose DCR"
      title="Specialists in auto electrics"
      subtitle="We combine modern diagnostics with years of hands‑on experience. Expect straight answers, careful workmanship and clear pricing."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:.6}} className="glass rounded-3xl p-8">
          <ul className="space-y-4 text-slate-300">
            {[
              'IMI‑qualified technicians with EV awareness',
              'Dealer‑level scan tools and programming where supported',
              'Mobile callouts across Newcastle & surrounding areas',
              'Up‑front quotes and no‑surprise invoices'
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400"></span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{opacity:0, scale:.96}} whileInView={{opacity:1, scale:1}} viewport={{ once: true }} transition={{duration:.7}} className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-1">
            <div className="h-full w-full rounded-[22px] bg-grid-slate bg-grid-16 glass p-8">
              <div className="flex h-full w-full flex-col items-center justify-center text-center">
                <p className="text-5xl font-black text-white/90">12k+</p>
                <p className="text-slate-300">Vehicles diagnosed & repaired</p>
                <div className="mt-6 flex gap-6 text-sm text-slate-300">
                  <p>⭐️⭐️⭐️⭐️⭐️ Rated</p>
                  <p>Same‑day Callouts</p>
                  <p>Fully Insured</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}