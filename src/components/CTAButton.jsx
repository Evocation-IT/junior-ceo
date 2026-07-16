const base =
  'inline-flex items-center justify-center rounded-full font-bold px-7 py-3.5 min-h-[44px] transition-all duration-200 focus-ring'

const variants = {
  solid:
    'bg-jc-yellow text-jc-ink border-2 border-jc-ink shadow-[4px_4px_0_0_#14161B] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#14161B]',
  ghost:
    'border-2 border-jc-white text-jc-white hover:bg-jc-white hover:text-jc-ink hover:shadow-[4px_4px_0_0_#FFC629]',
  ghostDark:
    'border-2 border-jc-ink text-jc-ink hover:bg-jc-ink hover:text-jc-white',
  pill: 'bg-jc-yellow text-jc-ink border-2 border-jc-ink px-6 py-2.5 shadow-[3px_3px_0_0_#E63975] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#E63975]',
}

export default function CTAButton({
  children,
  href = '#',
  variant = 'solid',
  className = '',
  pulse = false,
  ...props
}) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${pulse ? 'animate-bounce-subtle' : ''} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
