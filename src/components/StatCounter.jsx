import ReactCountUpModule from 'react-countup'

const CountUp = ReactCountUpModule.default ?? ReactCountUpModule
import useReducedMotion from '../hooks/useReducedMotion'

export default function StatCounter({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2.2,
  className = '',
  label,
}) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={className}>
      <div className="text-4xl md:text-5xl font-extrabold text-jc-ink">
        {prefix}
        {reducedMotion ? (
          end.toLocaleString()
        ) : (
          <CountUp
            end={end}
            decimals={decimals}
            duration={duration}
            enableScrollSpy
            scrollSpyOnce
            separator=","
          />
        )}
        {suffix}
      </div>
      {label && <p className="mt-1 text-sm text-jc-slate">{label}</p>}
    </div>
  )
}
