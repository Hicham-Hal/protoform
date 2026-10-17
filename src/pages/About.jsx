import { useState } from 'react'
import { VALUES, TEAM } from '../data'

export default function About() {
  const [open, setOpen] = useState(0)
  return (
    <section className="animate-page pb-20 pt-9 sm:pt-14">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold">Built by people who just finished their own defense.</h1>
          <p className="mt-4 max-w-[60ch] text-mut">Protoform started in a university library, when three friends kept getting asked to design each other's final projects. Now we do it properly, for students everywhere.</p>
          <p className="mt-4 max-w-[60ch] text-mut">We know the budget is tight and the deadline is close, so we keep our process short, our prices student-friendly and our files easy to hand in.</p>
        </div>
        <div className="grid gap-3">
          {VALUES.map(([title, text], i) => (
            <button
              key={title} aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}
              className={`w-full cursor-pointer rounded-2xl border bg-surf px-5 py-5 text-left transition ${open === i ? 'border-acc' : 'border-line'}`}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className={`overflow-hidden text-mut transition-all duration-300 ${open === i ? 'mt-2 max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>{text}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {TEAM.map(([name, role, color, bio]) => (
          <div key={name} className="rounded-[20px] border border-line bg-surf p-5">
            <div className="mb-3 grid size-14 place-items-center rounded-full font-display text-xl font-extrabold text-white" style={{ background: color }}>{name[0]}</div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <b className="text-sm text-acc">{role}</b>
            <p className="mt-1 text-sm text-mut">{bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
