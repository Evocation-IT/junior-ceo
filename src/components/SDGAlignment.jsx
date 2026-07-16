import { motion } from 'framer-motion'
import { sdgs } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'

const badgeStyles = [
  'bg-jc-magenta text-jc-white',
  'bg-jc-cyan text-jc-ink',
  'bg-jc-yellow text-jc-ink',
  'bg-jc-blue text-jc-white',
  'bg-jc-ink text-jc-white',
]
const tilts = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-1']

function SdgBadge({ sdg, index }) {
  const variants = useSectionReveal()
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.08, rotate: 0 }}
      className={`relative flex aspect-square flex-col items-center justify-center gap-1 rounded-full border-2 border-jc-ink p-4 text-center shadow-[3px_3px_0_0_#14161B] ${
        badgeStyles[index % badgeStyles.length]
      } ${tilts[index % tilts.length]}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-1.5 rounded-full border-2 border-dashed border-current opacity-50"
      />
      <span className="text-2xl font-extrabold">{sdg.number}</span>
      <span className="text-[10px] font-semibold leading-tight">{sdg.label}</span>
    </motion.div>
  )
}

export default function SDGAlignment() {
  return (
    <Section bg="bg-jc-white" className="text-center" number="05">
      <SectionEyebrow accent="magenta">Global Goals</SectionEyebrow>
      <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
        Program Designed as per UN SDGs
      </h2>

      <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 sm:grid-cols-5">
        {sdgs.map((sdg, i) => (
          <SdgBadge key={sdg.number} sdg={sdg} index={i} />
        ))}
      </div>
      <p className="mt-6 text-xs text-jc-slate">
        Placeholder badges — replace with official UN SDG icons before launch.
      </p>
    </Section>
  )
}
