import { motion } from 'framer-motion'
import { marketTrends } from '../data/content'
import Section, { useSectionReveal } from './Section'
import SectionEyebrow from './SectionEyebrow'
import StatCounter from './StatCounter'

const barWidths = [78, 92, 85]
const barColors = ['bg-jc-cyan', 'bg-jc-magenta', 'bg-jc-blue']
const blockShadows = [
  'shadow-[6px_6px_0_0_#00B4D8]',
  'shadow-[6px_6px_0_0_#E63975]',
  'shadow-[6px_6px_0_0_#2D4EF5]',
]

function TrendBlock({ trend, index }) {
  const variants = useSectionReveal()
  return (
    <motion.div
      variants={variants}
      className={`rounded-2xl border-2 border-jc-ink bg-jc-white p-8 ${blockShadows[index % blockShadows.length]}`}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-jc-slate">{trend.label}</p>
      <StatCounter
        end={trend.stat}
        prefix={trend.prefix}
        suffix={trend.suffix}
        decimals={trend.stat % 1 !== 0 ? 1 : 0}
        className="mt-2"
      />
      <p className="mt-2 text-sm text-jc-slate">{trend.caption}</p>
      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-jc-cloud">
        <motion.div
          className={`h-full rounded-full ${barColors[index % barColors.length]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${barWidths[index % barWidths.length]}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

export default function GlobalMarketTrends() {
  return (
    <Section bg="bg-jc-cloud" number="04">
      <div className="text-center">
        <SectionEyebrow accent="cyan">Global Market Trends</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
          A Booming Youth-Entrepreneurship Landscape
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {marketTrends.map((trend, i) => (
          <TrendBlock key={trend.key} trend={trend} index={i} />
        ))}
      </div>
    </Section>
  )
}
