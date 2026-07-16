import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { steamPillars, learningLadder } from '../data/content'
import Section from './Section'
import SectionEyebrow from './SectionEyebrow'
import PillarTile from './PillarTile'
import useReducedMotion from '../hooks/useReducedMotion'

function LearningLadder() {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative mt-16">
      <svg
        className="absolute left-0 top-6 hidden w-full md:block"
        height="4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="12%"
          x2="88%"
          y1="2"
          y2="2"
          stroke="#2D4EF5"
          strokeWidth="3"
          strokeLinecap="round"
          style={reducedMotion ? { pathLength: 1 } : { pathLength }}
        />
      </svg>
      <ol className="relative grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {learningLadder.map((stage, i) => (
          <li key={stage} className="flex flex-col items-center gap-2 text-center">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${
                i === learningLadder.length - 1
                  ? 'bg-jc-magenta text-jc-white'
                  : 'bg-jc-blue text-jc-white'
              }`}
            >
              {i + 1}
            </span>
            <span className="text-sm font-semibold text-jc-ink">{stage}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function ProgramPillars() {
  return (
    <Section id="pillars" bg="bg-jc-white" number="03">
      <div className="text-center">
        <SectionEyebrow accent="blue">Program Pillars</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
          STEAM + Entrepreneurship
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
        {steamPillars.map((pillar) => (
          <PillarTile key={pillar.key} icon={pillar.icon} label={pillar.label} />
        ))}
      </div>

      <LearningLadder />
    </Section>
  )
}
