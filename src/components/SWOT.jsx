import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { swot } from '../data/content'
import Section from './Section'
import SectionEyebrow from './SectionEyebrow'

function Column({ title, items, accent, fromLeft }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-jc-ink">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className={`flex items-start gap-3 rounded-lg border-l-4 bg-jc-white p-4 shadow-sm ${accent}`}
          >
            <CheckCircle2 className="mt-0.5 shrink-0 text-jc-blue" size={20} />
            <span className="text-jc-slate">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default function SWOT() {
  return (
    <Section bg="bg-jc-cloud" number="06">
      <div className="text-center">
        <SectionEyebrow accent="blue">Strategic Position</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
          Strengths & Opportunities
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Column title="Strengths" items={swot.strengths} accent="border-jc-magenta" fromLeft />
        <Column title="Opportunities" items={swot.opportunities} accent="border-jc-cyan" fromLeft={false} />
      </div>
    </Section>
  )
}
