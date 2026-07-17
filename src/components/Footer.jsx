import { Globe, AtSign, Share2 } from 'lucide-react'
import { footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-jc-ink px-6 py-14 text-jc-white/80">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="order-2 flex justify-center gap-4 md:order-1 md:justify-start">
            <a href="#" aria-label="Facebook (placeholder link)" className="focus-ring hover:text-jc-yellow">
              <Share2 size={20} />
            </a>
            <a href="#" aria-label="Instagram (placeholder link)" className="focus-ring hover:text-jc-yellow">
              <AtSign size={20} />
            </a>
            <a href="#" aria-label="Website" className="focus-ring hover:text-jc-yellow">
              <Globe size={20} />
            </a>
          </div>

          <img
            src="/logo_dark.png"
            alt="Junior CEO"
            className="order-1 h-16 w-auto justify-self-center md:order-2"
          />

          <ul className="order-3 flex flex-wrap justify-center gap-6 text-sm md:justify-end">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring hover:text-jc-yellow">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-xs uppercase tracking-widest text-jc-white/50">Organised by</p>
          <p className="mt-1 font-semibold">{footer.organisedBy}</p>

          <p className="mt-4 text-xs uppercase tracking-widest text-jc-white/50">Supported by</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {footer.supportedBy.map((partner) => (
              <span
                key={partner}
                className="rounded border border-dashed border-white/30 px-3 py-1 text-xs text-jc-white/60"
              >
                [ {partner} ]
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-jc-white/50">{footer.copyright}</p>
        </div>
      </div>

      {/* CMYK registration strip — closes the loop with the navbar */}
      <div className="mt-10 -mb-14 flex h-1.5" aria-hidden="true">
        <div className="flex-1 bg-jc-cyan" />
        <div className="flex-1 bg-jc-magenta" />
        <div className="flex-1 bg-jc-yellow" />
        <div className="flex-1 bg-jc-blue" />
      </div>
    </footer>
  )
}
