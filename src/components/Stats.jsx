import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { STATS } from '../data'

function Count({ to, go }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!go) return
    let start = null, id
    const tick = t => {
      start ??= t
      const p = Math.min((t - start) / 1400, 1)
      setV(Math.round(to * (1 - (1 - p) ** 3)))
      if (p < 1) id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [go, to])
  return v
}

export default function Stats() {
  const [ref, seen] = useInView(0.3)
  return (
    <div ref={ref} className="mt-16 grid grid-cols-1 overflow-hidden rounded-[22px] border border-line bg-surf min-[420px]:grid-cols-2 md:grid-cols-4">
      {STATS.map(([n, label]) => (
        <div key={label} className="border-b border-line p-6 md:border-b-0 md:border-r md:last:border-r-0">
          <strong className="block font-display text-4xl font-extrabold text-acc"><Count to={n} go={seen} /></strong>
          <span className="text-[.95rem] text-mut">{label}</span>
        </div>
      ))}
    </div>
  )
}
