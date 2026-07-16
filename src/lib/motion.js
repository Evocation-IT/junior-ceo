export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const revealReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export const viewportOnce = { once: true, margin: '-80px' }
