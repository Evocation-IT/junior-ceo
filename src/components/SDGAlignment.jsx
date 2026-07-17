import { motion } from 'framer-motion'
import { sdgs } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'

const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-1']

function SdgTile({ sdg, index }) {
  const variants = useSectionReveal()
  return (
    <div className={tilts[index % tilts.length]}>
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.06 }}
        className="overflow-hidden rounded-xl border-2 border-jc-ink shadow-[4px_4px_0_0_#14161B]"
      >
        <img
          src={sdg.icon}
          alt={`UN Sustainable Development Goal ${sdg.number}: ${sdg.label}`}
          className="block h-full w-full"
          loading="lazy"
        />
      </motion.div>
    </div>
  )
}

export default function SDGAlignment() {
  return (
    <Section bg="bg-jc-white" className="text-center" number="05">
      <SectionEyebrow accent="magenta">Global Goals</SectionEyebrow>
      <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
        Program Designed as per UN SDGs
      </h2>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-6 sm:grid-cols-5 sm:gap-8">
        {sdgs.map((sdg, i) => (
          <SdgTile key={sdg.number} sdg={sdg} index={i} />
        ))}
      </div>
    </Section>
  )
}
