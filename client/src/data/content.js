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
    name: 'Daniel Dorey',
    quote: 'Had a wiring issue that was causing an engine light in my car, turned out to be a simple fix, had my car in and out the garage within 20 minutes and was charged a very reasonable price. Highly recommend'
  },
  {
    name: 'Brad James',
    quote: 'Got recommended to sort out a problem with the ignition and electrical fault I was having with my Ford Focus. Problem was diagnosed within minutes and booked in same day for a repair. Fantastic service, honest, hard working owner. Highly recommended. Thank you'
  },
  {
    name: 'Thomas Wright',
    quote: 'Great service. Managed to fix my Astra rear light cluster on the same day. Would highly recommend.'
  },
  {
    name: 'Kels',
    quote: 'Absolutely cracking guy. Very very well versed on diagnostics, software and systems including component coding/recycling. Also a nice guy with affordable pricing. Glad I found the place and would definitely recommend'
  }
]