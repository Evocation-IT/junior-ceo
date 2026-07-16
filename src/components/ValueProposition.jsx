import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { valueProposition } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'
import Placeholder from './Placeholder'

function Bullet({ text, index }) {
  const variants = useSectionReveal()
  return (
    <motion.li variants={variants} className="flex items-start gap-3">
      <Sparkles className="mt-1 shrink-0 text-jc-yellow" size={22} />
      <span className="text-lg text-jc-slate">{text}</span>
    </motion.li>
  )
}

export default function ValueProposition() {
  return (
    <Section bg="bg-jc-cloud" number="08">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <SectionEyebrow accent="magenta">Value Proposition</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
            {valueProposition.headline}
          </h2>
          <ul className="mt-8 space-y-5">
            {valueProposition.bullets.map((b, i) => (
              <Bullet key={b} text={b} index={i} />
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Placeholder label="Students Collaborating" ratio="4/5" />
        </motion.div>
      </div>
    </Section>
  )
}
