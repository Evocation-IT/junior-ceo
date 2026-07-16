import { motion } from 'framer-motion'
import { useSectionReveal } from './Section'

// CMYK cycle — each week bubble stamps the next ink in the sequence
const cmyk = [
  'bg-jc-cyan text-jc-ink',
  'bg-jc-magenta text-jc-white',
  'bg-jc-yellow text-jc-ink',
  'bg-jc-blue text-jc-white',
]

export default function TimelineWeek({ week, title, milestone }) {
  const variants = useSectionReveal()
  const bubble = cmyk[(week - 1) % cmyk.length]

  return (
    <motion.li variants={variants} className="relative flex items-center gap-4">
      <span
        className={`z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-jc-ink text-sm font-extrabold shadow-[2px_2px_0_0_#14161B] ${bubble}`}
      >
        {week}
      </span>
      <div className="flex flex-wrap items-center gap-2 text-left">
        <span className="text-sm font-semibold text-jc-ink md:text-base">{title}</span>
        {milestone && (
          <span className="inline-block -rotate-2 rounded-full border-2 border-jc-ink bg-jc-yellow px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-jc-ink">
            ✦ {milestone}
          </span>
        )}
      </div>
    </motion.li>
  )
}
