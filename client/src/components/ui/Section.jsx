import { motion } from 'framer-motion'
import { stagger } from '../../lib/motion'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="section-edge absolute inset-x-0 top-0 h-40 pointer-events-none"></div>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || subtitle) && (
          <motion.header
            className="max-w-3xl"
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {eyebrow && (
              <motion.p className="mb-3 text-sm uppercase tracking-widest text-brand-300/90" variants={{hidden:{opacity:0,y:10},show:{opacity:1,y:0}}}>
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2 className="font-display text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-extrabold text-white" variants={{hidden:{opacity:0,y:18},show:{opacity:1,y:0}}}>
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p className="mt-4 text-lg text-slate-300" variants={{hidden:{opacity:0,y:18},show:{opacity:1,y:0}}}>
                {subtitle}
              </motion.p>
            )}
          </motion.header>
        )}
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  )
}