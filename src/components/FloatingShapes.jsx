import { motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'

const shapes = [
  { color: 'bg-jc-yellow', size: 'w-16 h-16', top: '15%', left: '8%', duration: 14 },
  { color: 'bg-jc-cyan', size: 'w-24 h-24', top: '60%', left: '4%', duration: 18 },
  { color: 'bg-jc-magenta', size: 'w-12 h-12', top: '25%', left: '90%', duration: 16 },
  { color: 'bg-jc-blue', size: 'w-20 h-20', top: '75%', left: '88%', duration: 20 },
  { color: 'bg-jc-yellow', size: 'w-10 h-10', top: '45%', left: '50%', duration: 22 },
]

export default function FloatingShapes({ className = '' }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-20 blur-xl ${shape.color} ${shape.size}`}
          style={{ top: shape.top, left: shape.left }}
          animate={
            reducedMotion
              ? {}
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -40, 20, 0],
                  scale: [1, 1.15, 0.95, 1],
                }
          }
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
