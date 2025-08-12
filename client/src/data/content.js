import { Battery, Wrench, Cable, Gauge, ScanLine, PlugZap } from 'lucide-react'

export const nav = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

export const services = [
  {
    icon: ScanLine,
    title: 'Full Diagnostics',
    desc: 'Latest dealer‑level diagnostics for faults, warning lights & non‑starts.'
  },
  {
    icon: Battery,
    title: 'Batteries & Charging',
    desc: 'Battery testing & replacement, alternators and starters supplied and fitted.'
  },
  {
    icon: Cable,
    title: 'Wiring & Fault‑finding',
    desc: 'Shorts, parasitic drain, sensor & loom repairs with clean workmanship.'
  },
  {
    icon: Wrench,
    title: 'Retrofits & Upgrades',
    desc: 'Dash cams, parking sensors, trackers, stereos, lighting and more.'
  },
  {
    icon: Gauge,
    title: 'ECU Programming',
    desc: 'Key coding, module setup and calibrations where supported.'
  },
  {
    icon: PlugZap,
    title: 'EV & Hybrid',
    desc: 'High‑voltage aware diagnostics and component support for modern EVs.'
  },
]

export const testimonials = [
  {
    name: 'Lewis R.',
    quote: 'Turned up the same day and found a wiring fault my garage missed. Professional and tidy job.'
  },
  {
    name: 'Amira K.',
    quote: 'Reset an airbag light and fitted a new battery on‑site. Great price and top service!'
  },
  {
    name: 'Callum D.',
    quote: 'Booked diagnostics for my EV—clear explanation and fixed within the hour.'
  }
]