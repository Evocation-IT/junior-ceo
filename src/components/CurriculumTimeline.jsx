import { curriculum } from '../data/content'
import Section from './Section'
import SectionEyebrow from './SectionEyebrow'
import TimelineWeek from './TimelineWeek'

const milestones = {
  11: 'Pitch Day',
  14: 'Graduation',
}

const half = Math.ceil(curriculum.length / 2)
const columns = [curriculum.slice(0, half), curriculum.slice(half)]

export default function CurriculumTimeline() {
  return (
    <Section id="curriculum" bg="bg-jc-white" className="text-center" number="11">
      <SectionEyebrow accent="cyan">14-Week Journey</SectionEyebrow>
      <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">Curriculum Timeline</h2>
      <p className="mx-auto mt-3 max-w-xl text-jc-slate">
        From first idea to graduation day — a week-by-week path to becoming a Junior CEO.
      </p>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
        {columns.map((col, ci) => (
          <ol key={ci} className="relative space-y-6">
            {/* Connector line running behind the bubbles */}
            <span
              aria-hidden="true"
              className="absolute bottom-5 left-[21px] top-5 w-0.5 bg-jc-ink/15"
            />
            {col.map((item) => (
              <TimelineWeek
                key={item.week}
                week={item.week}
                title={item.title}
                milestone={milestones[item.week]}
              />
            ))}
          </ol>
        ))}
      </div>
    </Section>
  )
}
