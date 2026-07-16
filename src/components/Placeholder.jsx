const ratioClasses = {
  '16/9': 'aspect-video',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
}

export default function Placeholder({ label, ratio = '16/9', className = '', dark = false }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed ${
        dark ? 'border-white/40 bg-white/5 text-white/70' : 'border-jc-slate/30 bg-jc-cloud text-jc-slate'
      } ${ratioClasses[ratio] ?? 'aspect-video'} ${className}`}
    >
      <span className="px-6 text-center text-sm font-medium uppercase tracking-wide">
        [ {label} ]
      </span>
    </div>
  )
}
