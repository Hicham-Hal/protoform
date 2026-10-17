import useInView from '../hooks/useInView'
import { STEPS } from '../data'

export default function Steps() {
  const [ref, seen] = useInView(0.3)
  return (
    <section className="mt-24">
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold">From sketch to demo in four moves</h2>
      <div ref={ref} className="mt-8 grid gap-5 min-[420px]:grid-cols-2 md:grid-cols-4">
        {STEPS.map(([title, text], i) => (
          <div key={title} className="relative border-t-[3px] border-line pt-5">
            <span className="absolute -top-[3px] left-0 h-[3px] bg-acc transition-[width] duration-1000" style={{ width: seen ? '100%' : 0, transitionDelay: `${i * 0.3}s` }} />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-[.95rem] text-mut">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
