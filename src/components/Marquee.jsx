const defaultItems = ['Educate', 'Inspire', 'Innovate', 'Launch', 'Pitch', 'Lead', 'Graduate']

const bands = {
  yellow: 'bg-jc-yellow text-jc-ink',
  cyan: 'bg-jc-cyan text-jc-ink',
  magenta: 'bg-jc-magenta text-jc-white',
}

export default function Marquee({ items = defaultItems, band = 'yellow', tilt = '-rotate-1' }) {
  const row = items.map((item) => `${item}`)

  return (
    <div aria-hidden="true" className="relative z-10 -my-4 overflow-hidden">
      <div className={`${tilt} -mx-4 border-y-2 border-jc-ink ${bands[band]}`}>
        <div className="flex w-max animate-marquee whitespace-nowrap py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {row.map((item, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="flex items-center gap-6 px-6 text-sm font-extrabold uppercase tracking-[0.25em] md:text-base"
                >
                  {item}
                  <span className="text-lg leading-none">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
