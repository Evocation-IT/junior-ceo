const accentClasses = {
  yellow: 'text-jc-yellow border-jc-yellow',
  cyan: 'text-jc-cyan border-jc-cyan',
  magenta: 'text-jc-magenta border-jc-magenta',
  blue: 'text-jc-blue border-jc-blue',
}

export default function SectionEyebrow({ children, accent = 'magenta', className = '' }) {
  return (
    <p className={className}>
      <span
        className={`inline-block -rotate-1 rounded-full border-2 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] md:text-sm ${accentClasses[accent]}`}
      >
        {children}
      </span>
    </p>
  )
}
