import { whatWeDo } from '../data/content'
import Section from './Section'
import SectionEyebrow from './SectionEyebrow'
import Card from './Card'

const accents = ['blue', 'magenta', 'cyan']

export default function WhatWeDo() {
  return (
    <Section bg="bg-jc-white" number="09">
      <div className="text-center">
        <SectionEyebrow accent="blue">What We Do</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
          From Idea to Impact
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {whatWeDo.map((item, i) => (
          <Card key={item.key} accent={accents[i % accents.length]}>
            <span className="text-4xl font-extrabold text-jc-slate/20">{item.number}</span>
            <h3 className="mt-3 text-xl font-bold text-jc-ink">{item.title}</h3>
            <p className="mt-3 text-jc-slate">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
