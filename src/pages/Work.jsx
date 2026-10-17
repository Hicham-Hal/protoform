import { useState } from 'react'
import { WORKS } from '../data'

const FILTERS = [['all', 'All'], ['app', 'Mobile apps'], ['web', 'Websites']]

export default function Work() {
  const [filter, setFilter] = useState('all')
  const shown = WORKS.filter(w => filter === 'all' || w[1] === filter)

  return (
    <section className="animate-page pb-20 pt-9 sm:pt-14">
      <h1 className="text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold">Selected work</h1>
      <p className="mt-3.5 text-mut">A few prototypes we built for students. Filter by type.</p>

      <div role="group" aria-label="Filter projects" className="my-7 flex flex-wrap gap-2">
        {FILTERS.map(([id, label]) => (
          <button
            key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}
            className={`cursor-pointer rounded-full border px-[18px] py-2 font-medium ${filter === id ? 'border-ink bg-ink text-bg' : 'border-line bg-surf text-ink'}`}
          >{label}</button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,310px),1fr))] gap-5">
        {shown.map(([title, type, desc, meta, color, soft]) => (
          <article key={title} className="group overflow-hidden rounded-[22px] border border-line bg-surf transition hover:-translate-y-1.5">
            <div className="grid h-[200px] place-items-center overflow-hidden" style={{ background: soft }}>
              <div className={`flex translate-y-9 flex-col gap-2 rounded-2xl bg-white p-3 shadow-[0_18px_30px_-14px_#0006] transition duration-300 group-hover:translate-y-2.5 group-hover:-rotate-2 ${type === 'web' ? 'h-[130px] w-[200px]' : 'h-[160px] w-[120px]'}`}>
                <i className="block h-2 w-3/5 rounded" style={{ background: color }} />
                <u className="block h-11 rounded-lg opacity-25" style={{ background: color }} />
                <i className="block h-2 rounded bg-[#e7e4fb]" />
                <i className="block h-2 w-4/5 rounded bg-[#e7e4fb]" />
              </div>
            </div>
            <div className="px-5 pb-6 pt-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mb-3 mt-1.5 text-[.95rem] text-mut">{desc}</p>
              <span className="text-sm font-semibold text-acc">{meta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
