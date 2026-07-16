import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { journey } from '../data/content'
import Section from './Section'
import SectionEyebrow from './SectionEyebrow'
import JourneyStep from './JourneyStep'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Journey() {
  const reducedMotion = useReducedMotion()

  return (
    <Section
      bg="bg-jc-ink"
      className="text-center"
      number="10"
      numberClassName="text-white/[0.06]"
    >
      {/* Halftone field bleeding in from the top */}
      <div
        aria-hidden="true"
        className="halftone-light absolute inset-x-0 top-0 h-56 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <SectionEyebrow accent="magenta">The Journey</SectionEyebrow>
      <h2 className="mt-3 text-3xl font-extrabold text-jc-white md:text-4xl">
        Graduate as <span className="font-display italic text-jc-yellow">Junior CEO</span>
      </h2>

      {/* Path chips: Startup → SLT → Degree Graduate by 20 */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {journey.path.map((stop, i) => (
          <span key={stop} className="flex items-center gap-2">
            <span
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold md:text-sm ${
                i === journey.path.length - 1
                  ? 'border-jc-yellow bg-jc-yellow text-jc-ink'
                  : 'border-white/30 text-jc-cloud'
              }`}
            >
              {stop}
            </span>
            {i < journey.path.length - 1 && (
              <ArrowRight size={16} className="text-jc-magenta" aria-hidden="true" />
            )}
          </span>
        ))}
      </div>

      <div className="relative mt-20 md:mt-24 md:pb-12">
        {/* Dotted climb line, drawn on scroll, behind the cards */}
        <svg
          className="absolute inset-x-0 top-0 hidden h-full w-full md:block"
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M 40 290 C 250 280, 330 190, 500 165 S 780 60, 960 20"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 14"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </svg>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {journey.levels.map((level, i) => (
            <JourneyStep key={level.key} level={level} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}
