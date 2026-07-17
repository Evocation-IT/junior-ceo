import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, HeartHandshake, ChevronRight } from 'lucide-react'
import { socioEconomicImpact } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'

const icons = { Users, TrendingUp, HeartHandshake }

const inks = [
  { stroke: '#00B4D8', text: 'text-jc-cyan', badge: 'bg-jc-cyan/15 text-jc-cyan' },
  { stroke: '#FFC629', text: 'text-jc-yellow', badge: 'bg-jc-yellow/20 text-[#B8860B]' },
  { stroke: '#E63975', text: 'text-jc-magenta', badge: 'bg-jc-magenta/15 text-jc-magenta' },
]

// Rounded pentagon: flat left edge (rounded corners), point tip on the right —
// the shape itself reads as "arrow", chained left to right it reads as a flow.
const ARROW_PATH =
  'M 12 2 H 74 C 82 2 86 6 90 16 L 105 48 C 107 51 107 53 105 56 L 90 88 C 86 98 82 102 74 102 H 12 C 6 102 2 98 2 92 V 12 C 2 6 6 2 12 2 Z'

function ArrowShape({ index, className }) {
  const ink = inks[index % inks.length]

  return (
    <svg
      viewBox="0 0 110 104"
      className={className}
      style={{ filter: `drop-shadow(3px 4px 0px ${ink.stroke}55)` }}
      aria-hidden="true"
    >
      <path d={ARROW_PATH} className="fill-jc-white" stroke={ink.stroke} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function ImpactCard({ item, index }) {
  const variants = useSectionReveal()
  const [hovered, setHovered] = useState(false)
  const Icon = icons[item.icon]
  const ink = inks[index % inks.length]

  return (
    <motion.div variants={variants} className={`relative ${index === 1 ? 'md:mt-8' : ''}`}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6 }}
        className="relative aspect-[10.5/12] w-full max-w-[260px] mx-auto md:aspect-[11/10.5]"
      >
        <ArrowShape index={index} className="absolute inset-0 h-full w-full rotate-90 md:rotate-0" />

        <div className="relative flex h-full flex-col items-center justify-center gap-3 px-8 py-10 text-center text-jc-ink md:py-6">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${ink.badge}`}>
            <Icon size={22} strokeWidth={2.25} />
          </div>
          <h3 className="text-base font-extrabold leading-tight">{item.title}</h3>
          <motion.p
            initial={false}
            animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
            className="overflow-hidden text-xs leading-snug text-jc-slate"
          >
            {item.body}
          </motion.p>
        </div>
      </motion.div>

      <p className={`mt-3 text-center text-xs font-extrabold uppercase tracking-[0.25em] ${ink.text}`}>
        Step {index + 1}
      </p>
    </motion.div>
  )
}

export default function SocioEconomicImpact() {
  return (
    <Section id="impact" bg="bg-jc-white" number="07">
      <div className="text-center">
        <SectionEyebrow accent="magenta">Impact</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
          Socio-Economic Impact
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-jc-slate">
          One outcome drives the next — youth empowerment fuels economic growth,
          economic growth fuels social development.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:gap-6">
        {socioEconomicImpact.map((item, i) => (
          <div key={item.key} className="flex flex-col items-center md:flex-row md:items-start">
            <ImpactCard item={item} index={i} />
            {i < socioEconomicImpact.length - 1 && (
              <ChevronRight
                className="my-4 shrink-0 text-jc-ink/15 md:my-0 md:mt-16 md:rotate-0 rotate-90"
                size={28}
                strokeWidth={2.5}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
