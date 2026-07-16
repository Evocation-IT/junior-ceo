import { motion } from 'framer-motion'
import { intro } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'
import FloatingShapes from './FloatingShapes'

const accentCycle = ['text-jc-magenta', 'text-jc-blue', 'text-jc-cyan']

function renderHighlighted(text, highlights) {
  const pattern = new RegExp(`\\{(${highlights.join('|')})\\}`, 'g')
  const parts = text.split(pattern)
  return parts.map((part, i) => {
    const idx = highlights.indexOf(part)
    if (idx !== -1) {
      return (
        <span
          key={i}
          className={`font-display text-[1.15em] font-semibold italic ${accentCycle[idx % accentCycle.length]}`}
        >
          {part}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

function Paragraph({ text }) {
  const variants = useSectionReveal()
  return (
    <motion.p variants={variants} className="text-lg leading-relaxed text-jc-slate md:text-xl">
      {renderHighlighted(text, intro.highlights)}
    </motion.p>
  )
}

export default function Intro() {
  return (
    <Section bg="bg-jc-white" className="text-center" number="01">
      <FloatingShapes className="opacity-60" />
      <div className="relative mx-auto max-w-3xl space-y-6">
        <SectionEyebrow accent="magenta">{intro.eyebrow}</SectionEyebrow>
        {intro.paragraphs.map((p, i) => (
          <Paragraph key={i} text={p} />
        ))}
      </div>
    </Section>
  )
}
