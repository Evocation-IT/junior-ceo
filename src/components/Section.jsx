import { createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'
import { container, reveal, revealReduced, viewportOnce } from '../lib/motion'

const SectionMotionContext = createContext(reveal)

export function useSectionReveal() {
  return useContext(SectionMotionContext)
}

export default function Section({
  id,
  as: Tag = 'section',
  bg = 'bg-jc-white',
  className = '',
  containerClassName = 'mx-auto max-w-6xl px-6 py-20 md:py-28',
  number,
  numberClassName = 'text-jc-ink/[0.05]',
  children,
}) {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion ? revealReduced : reveal

  return (
    <Tag id={id} className={`relative overflow-hidden ${bg} ${className}`}>
      {number && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -top-8 right-0 select-none font-poppins text-[9rem] font-extrabold leading-none md:text-[13rem] ${numberClassName}`}
        >
          {number}
        </span>
      )}
      <motion.div
        className={containerClassName}
        variants={{ hidden: {}, show: { transition: container.show.transition } }}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <SectionMotionContext.Provider value={variants}>
          {children}
        </SectionMotionContext.Provider>
      </motion.div>
    </Tag>
  )
}
