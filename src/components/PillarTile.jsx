import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useSectionReveal } from './Section'

export default function PillarTile({ icon, label }) {
  const variants = useSectionReveal()
  const Icon = Icons[icon]

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05, rotate: -2 }}
      className="flex flex-col items-center gap-3 rounded-2xl border-2 border-jc-ink bg-jc-white p-6 text-center shadow-[4px_4px_0_0_#00B4D8] transition-shadow duration-300 hover:shadow-[6px_6px_0_0_#FFC629]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-yellow-cyan">
        <Icon className="text-jc-ink" size={26} strokeWidth={1.75} />
      </div>
      <span className="text-sm font-semibold text-jc-ink">{label}</span>
    </motion.div>
  )
}
