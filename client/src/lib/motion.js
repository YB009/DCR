import { easeInOut } from 'framer-motion'

export const fadeIn = (delay = 0, y = 24) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeInOut } }
})

export const slideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: easeInOut } }
})

export const stagger = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } }
})