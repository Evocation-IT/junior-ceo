import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'
import CTAButton from './CTAButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-jc-ink shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      {/* CMYK registration strip */}
      <div className="flex h-1.5" aria-hidden="true">
        <div className="flex-1 bg-jc-cyan" />
        <div className="flex-1 bg-jc-magenta" />
        <div className="flex-1 bg-jc-yellow" />
        <div className="flex-1 bg-jc-blue" />
      </div>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="flex items-center gap-2 focus-ring rounded">
          <img src="/logo_dark.png" alt="Junior CEO" className="h-[2.7rem] w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-jc-white focus-ring"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-jc-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTAButton href="#investment" variant="pill">
            {nav.cta}
          </CTAButton>
        </div>

        <button
          type="button"
          className="text-jc-white focus-ring rounded md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Scroll progress bar */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-jc-cyan via-jc-magenta to-jc-yellow"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden bg-jc-ink md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block min-h-[44px] py-2 text-base font-medium text-jc-white focus-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <CTAButton href="#investment" variant="pill" className="w-full" onClick={() => setOpen(false)}>
                  {nav.cta}
                </CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
