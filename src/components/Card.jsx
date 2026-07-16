import { motion } from 'framer-motion'
import { useSectionReveal } from './Section'

const hardShadow = {
  yellow: 'shadow-[6px_6px_0_0_#FFC629] hover:shadow-[9px_9px_0_0_#FFC629]',
  cyan: 'shadow-[6px_6px_0_0_#00B4D8] hover:shadow-[9px_9px_0_0_#00B4D8]',
  magenta: 'shadow-[6px_6px_0_0_#E63975] hover:shadow-[9px_9px_0_0_#E63975]',
  blue: 'shadow-[6px_6px_0_0_#2D4EF5] hover:shadow-[9px_9px_0_0_#2D4EF5]',
}

export default function Card({ children, accent = 'magenta', className = '', elevated = false }) {
  const variants = useSectionReveal()

  return (
    <motion.div
      variants={variants}
      className={`group relative rounded-2xl border-2 border-jc-ink bg-jc-white p-8 transition-all duration-300 hover:-translate-y-1.5 ${hardShadow[accent]} ${
        elevated ? 'md:-translate-y-4' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
