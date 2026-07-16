import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import { finalCta } from '../data/content'
import Section from './Section'
import CTAButton from './CTAButton'

export default function FinalCTA() {
  const { contact } = finalCta

  return (
    <Section
      bg="bg-gradient-magenta-blue"
      containerClassName="mx-auto max-w-4xl px-6 py-24 text-center text-jc-white"
    >
      <div
        aria-hidden="true"
        className="halftone-light absolute inset-x-0 top-0 h-56 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
        Join Our Program <span className="font-display italic text-jc-yellow">Now!</span>
      </h2>
      <div className="mt-8">
        <CTAButton href="#" variant="solid" pulse>
          {finalCta.cta}
        </CTAButton>
      </div>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 text-sm text-jc-white/90 sm:grid-cols-2">
        <p className="font-semibold sm:col-span-2">{contact.company}</p>
        <p className="flex items-start gap-2 sm:col-span-2">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          {contact.address}
        </p>
        <p className="flex items-center justify-center gap-2">
          <Phone size={16} />
          {contact.phones.join(' / ')}
        </p>
        <p className="flex items-center justify-center gap-2">
          <Mail size={16} />
          {contact.email}
        </p>
        <p className="flex items-center justify-center gap-2 sm:col-span-2">
          <Globe size={16} />
          {contact.website}
        </p>
      </div>
    </Section>
  )
}
