import { Rocket, Eye, Target } from 'lucide-react'
import { missionVisionGoals } from '../data/content'
import Section from './Section'
import Card from './Card'
import StatCounter from './StatCounter'

const icons = { Rocket, Eye, Target }
const accents = ['yellow', 'cyan', 'magenta']

export default function MissionVisionGoals() {
  return (
    <Section id="mission" bg="bg-jc-cloud" number="02">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {missionVisionGoals.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <Card key={item.key} accent={accents[i % accents.length]}>
              <Icon className="text-jc-ink" size={36} strokeWidth={1.75} />
              <h3 className="mt-4 text-xl font-bold text-jc-ink">{item.title}</h3>
              {item.stat ? (
                <div className="mt-3 space-y-2">
                  <p className="text-jc-slate">
                    Business & social innovation with leadership knowledge for
                  </p>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <StatCounter end={item.stat.count} />
                    <span className="text-jc-slate">students by</span>
                    <StatCounter end={item.stat.year} />
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-jc-slate">{item.body}</p>
              )}
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
