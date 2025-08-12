import { motion } from 'framer-motion'
import Section from './ui/Section'
import StarRating from './ui/StarRating'
import { testimonials } from '../data/content'

export default function Testimonials(){
  return (
    <Section id="testimonials" eyebrow="Happy drivers" title="Local reviews">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((t, i) => (
          <motion.figure key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}}
            className="glass rounded-2xl p-6">
            <div className="mb-3">
              <StarRating />
            </div>
            <blockquote className="text-slate-200">"{t.quote}"</blockquote>
            <figcaption className="mt-4 text-sm text-slate-400">— {t.name}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  )
}