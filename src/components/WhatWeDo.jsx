import { motion } from 'framer-motion'
import { whatWeDo } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'

const styles = [
  { ring: 'bg-jc-blue text-jc-white', shadow: 'shadow-[6px_6px_0_0_#2D4EF5]', tilt: 'md:-rotate-2' },
  { ring: 'bg-jc-magenta text-jc-white', shadow: 'shadow-[6px_6px_0_0_#E63975]', tilt: 'md:rotate-1' },
  { ring: 'bg-jc-cyan text-jc-ink', shadow: 'shadow-[6px_6px_0_0_#00B4D8]', tilt: 'md:-rotate-1' },
]

function WhatWeDoCard({ item, index }) {
  const variants = useSectionReveal()
  const { ring, shadow, tilt } = styles[index % styles.length]

  return (
    <div className={tilt}>
      <motion.div
        variants={variants}
        whileHover={{ y: -6 }}
        className={`relative flex aspect-square flex-col items-center justify-center rounded-full border-2 border-jc-ink bg-jc-white p-8 text-center transition-transform duration-300 ${shadow}`}
      >
        <span
          className={`absolute -top-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-jc-ink text-xl font-extrabold ${ring}`}
        >
          {item.number}
        </span>
        <h3 className="mt-4 text-lg font-extrabold text-jc-ink">{item.title}</h3>
        <p className="mt-2 text-sm text-jc-slate">{item.body}</p>
      </motion.div>
    </div>
  )
}

export default function WhatWeDo() {
  return (
    <Section bg="bg-jc-white" number="09">
      <div className="text-center">
        <SectionEyebrow accent="blue">What We Do</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
          From Idea to Impact
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
        {whatWeDo.map((item, i) => (
          <WhatWeDoCard key={item.key} item={item} index={i} />
        ))}
      </div>
    </Section>
  )
}
