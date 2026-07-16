import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { investment } from '../data/content'
import Section from './Section'
import SectionEyebrow from './SectionEyebrow'
import StatCounter from './StatCounter'
import CTAButton from './CTAButton'

export default function Investment() {
  return (
    <Section id="investment" bg="bg-jc-cloud" className="text-center" number="12">
      <SectionEyebrow accent="blue">Investment</SectionEyebrow>
      <h2 className="mt-3 text-3xl font-extrabold text-jc-ink md:text-4xl">
        Enroll in Junior CEO
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto mt-12 max-w-md -rotate-1 rounded-2xl border-2 border-jc-ink bg-jc-white p-10 shadow-[8px_8px_0_0_#FFC629]"
      >
        <StatCounter end={investment.price} prefix="RM " className="mx-auto" />
        <p className="text-sm text-jc-slate">{investment.priceUnit}</p>

        <p className="mt-4 text-sm font-medium text-jc-ink">
          + RM {investment.registrationFee} one-time registration fee
        </p>

        {/* Ticket perforation */}
        <div className="relative -mx-10 mt-6" aria-hidden="true">
          <div className="border-t-2 border-dashed border-jc-ink/30" />
          <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-jc-ink bg-jc-cloud" />
          <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-jc-ink bg-jc-cloud" />
        </div>

        <ul className="mt-6 space-y-3 text-left">
          {investment.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-2 text-jc-slate">
              <CheckCircle2 className="mt-0.5 shrink-0 text-jc-cyan" size={18} />
              <span>{inc}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-jc-slate">
          School contribution: {investment.schoolContribution}
        </p>

        <CTAButton href="#" variant="solid" pulse className="mt-8 w-full">
          {investment.cta}
        </CTAButton>
      </motion.div>
    </Section>
  )
}
