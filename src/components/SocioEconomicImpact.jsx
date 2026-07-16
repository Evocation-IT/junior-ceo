import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, HeartHandshake } from 'lucide-react'
import { socioEconomicImpact } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'

const icons = { Users, TrendingUp, HeartHandshake }

function ImpactCard({ item, elevated }) {
  const variants = useSectionReveal()
  const [hovered, setHovered] = useState(false)
  const Icon = icons[item.icon]

  return (
    <motion.div
      variants={variants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`flex flex-col items-center rounded-2xl border-2 border-jc-ink bg-jc-white p-8 text-center shadow-[6px_6px_0_0_#E63975] transition-transform duration-300 hover:-translate-y-2 ${
        elevated ? 'md:-translate-y-6 shadow-[6px_6px_0_0_#2D4EF5]' : ''
      }`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-magenta-blue">
        <Icon className="text-jc-white" size={26} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-jc-ink">{item.title}</h3>
      <motion.p
        initial={false}
        animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
        className="mt-2 overflow-hidden text-sm text-jc-slate"
      >
        {item.body}
      </motion.p>
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
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {socioEconomicImpact.map((item, i) => (
          <ImpactCard key={item.key} item={item} elevated={i === 1} />
        ))}
      </div>
    </Section>
  )
}
