import { motion } from 'framer-motion'
import { Sprout, Rocket, GraduationCap } from 'lucide-react'
import { useSectionReveal } from './Section'

// One ink per level — the climb goes cyan → yellow → magenta
const levelStyles = [
  {
    Icon: Sprout,
    bubble: 'bg-jc-cyan text-jc-ink',
    shadow: 'shadow-[6px_6px_0_0_#00B4D8]',
    duration: 'text-jc-cyan',
    rise: 'md:translate-y-12',
    tilt: 'md:-rotate-1',
  },
  {
    Icon: Rocket,
    bubble: 'bg-jc-yellow text-jc-ink',
    shadow: 'shadow-[6px_6px_0_0_#FFC629]',
    duration: 'text-jc-yellow',
    rise: 'md:translate-y-0',
    tilt: 'md:rotate-1',
  },
  {
    Icon: GraduationCap,
    bubble: 'bg-jc-magenta text-jc-white',
    shadow: 'shadow-[6px_6px_0_0_#E63975]',
    duration: 'text-jc-magenta',
    rise: 'md:-translate-y-12',
    tilt: 'md:-rotate-1',
  },
]

export default function JourneyStep({ level, index }) {
  const variants = useSectionReveal()
  const { Icon, bubble, shadow, duration, rise, tilt } = levelStyles[index % levelStyles.length]
  const isFinal = index === levelStyles.length - 1

  return (
    <div className={`${rise} ${tilt}`}>
      <motion.div
        variants={variants}
        whileHover={{ y: -6 }}
        className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 border-jc-ink bg-jc-white p-7 text-center ${shadow}`}
      >
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-jc-ink ${bubble}`}
        >
          <Icon size={26} strokeWidth={2} />
        </span>
        <h3 className="text-xl font-extrabold text-jc-ink">{level.title}</h3>
        <span className={`text-xs font-extrabold uppercase tracking-[0.2em] ${duration}`}>
          {level.duration}
        </span>
        <p className="text-sm text-jc-slate">{level.focus}</p>

        {isFinal && (
          <span className="absolute -right-4 -top-6 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full border-2 border-jc-ink bg-jc-yellow text-[10px] font-extrabold uppercase leading-tight text-jc-ink shadow-[3px_3px_0_0_#E63975]">
            <GraduationCap size={20} strokeWidth={2.25} />
            By 20
          </span>
        )}
      </motion.div>
    </div>
  )
}
