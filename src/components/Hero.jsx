import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { hero } from '../data/content'
import useReducedMotion from '../hooks/useReducedMotion'
import CTAButton from './CTAButton'
import Placeholder from './Placeholder'
import FloatingShapes from './FloatingShapes'

const words = hero.headline.split(' ')
const accentWords = ['Shine,', 'Soar']

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const wordItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-jc-ink pt-24"
    >
      {/* Halftone dot field fading down from top */}
      <div
        aria-hidden="true"
        className="halftone-light absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <FloatingShapes />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block -rotate-1 rounded-full border-2 border-jc-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-jc-yellow md:text-sm">
              {hero.eyebrow}
            </span>
          </motion.p>

          <motion.h1
            variants={reducedMotion ? undefined : wordContainer}
            initial={reducedMotion ? { opacity: 0 } : 'hidden'}
            animate={reducedMotion ? { opacity: 1 } : 'show'}
            className="mt-6 text-5xl font-extrabold leading-[1.08] text-jc-white sm:text-6xl md:text-7xl"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={reducedMotion ? undefined : wordItem}
                className={`inline-block ${
                  accentWords.includes(word) ? 'font-display italic text-jc-yellow' : ''
                }`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 max-w-lg text-lg text-jc-cloud/90"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <CTAButton href="#investment" variant="solid">
              {hero.primaryCta}
            </CTAButton>
            <CTAButton href="#curriculum" variant="ghost">
              {hero.secondaryCta}
            </CTAButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative"
        >
          <Placeholder label="Confident Kid-CEO Photo" ratio="4/5" dark />
          {/* Sticker badge — misregistered print shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ duration: 0.5, delay: 1.4, type: 'spring', bounce: 0.5 }}
            className="absolute -right-3 -top-6 flex h-28 w-28 rotate-12 items-center justify-center rounded-full border-2 border-jc-ink bg-jc-yellow p-3 text-center text-[11px] font-extrabold uppercase leading-tight text-jc-ink shadow-[4px_4px_0_0_#E63975] md:-right-6"
          >
            14-Week Program
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-jc-white/70"
        animate={reducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
