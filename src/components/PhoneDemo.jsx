import { useEffect, useState } from 'react'

const chip = 'flex justify-between rounded-xl bg-[#f1efff] px-3 py-2.5 text-[.82rem]'

function Goal({ label, pct, active }) {
  return (
    <>
      <div className={chip}><span>{label}</span><span>{pct}%</span></div>
      <div className="h-2.5 overflow-hidden rounded-full bg-[#e7e4fb]">
        <i className="block h-full bg-acc transition-[width] duration-1000 delay-300" style={{ width: active ? `${pct}%` : 0 }} />
      </div>
    </>
  )
}

export default function PhoneDemo() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % 3), 3200)
    return () => clearInterval(t)
  }, [])

  const screen = n => `absolute inset-0 flex flex-col gap-2.5 px-4 pb-4 pt-8 transition duration-500 ${i === n ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`
  const pill = 'self-start rounded-full px-2.5 py-1 text-xs font-semibold'

  return (
    <div aria-hidden="true" className="relative grid h-[440px] place-items-center overflow-hidden sm:h-[520px] sm:overflow-visible">
      <div className="absolute size-[340px] animate-float rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--acc2),var(--acc)_70%)] opacity-45 blur-[50px]" />

      <div className="relative h-[500px] w-[250px] scale-90 animate-tilt rounded-[38px] bg-[#0d0a24] p-2.5 shadow-[0_40px_80px_-30px_#1b134088] sm:scale-100">
        <div className="relative size-full overflow-hidden rounded-[29px] bg-white text-[#1B1340]">
          <div className={screen(0)}>
            <b className="font-display text-lg font-extrabold">Hi, Amine</b>
            <span className={`${pill} bg-mint text-[#06382b]`}>3 classes today</span>
            <div className={chip}><span>Algorithms</span><span>9:00</span></div>
            <div className={chip}><span>UX Design</span><span>11:30</span></div>
            <div className={chip}><span>Databases</span><span>14:00</span></div>
          </div>
          <div className={screen(1)}>
            <b className="font-display text-lg font-extrabold">Study goals</b>
            <Goal label="Thesis draft" pct={72} active={i === 1} />
            <Goal label="Exam prep" pct={45} active={i === 1} />
            <Goal label="Reading" pct={90} active={i === 1} />
          </div>
          <div className={screen(2)}>
            <b className="font-display text-lg font-extrabold">Group chat</b>
            <div className={chip}>Who has the slides?</div>
            <div className={`${chip} !bg-[#3D5AFE] text-white`}>I'll send them now</div>
            <div className={chip}>Perfect, thanks!</div>
            <span className={`${pill} bg-acc2 text-white`}>Prototype approved</span>
          </div>
        </div>
        <div className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 gap-1.5">
          {[0, 1, 2].map(n => <span key={n} className={`h-2 rounded-full transition-all duration-300 ${n === i ? 'w-6 bg-acc' : 'w-2 bg-line'}`} />)}
        </div>
      </div>

      <div className="absolute left-0 top-[70px] hidden animate-float rounded-2xl border border-line bg-surf px-3.5 py-2.5 text-sm font-semibold shadow-lg sm:block">Figma to live in 5 days</div>
      <div className="absolute bottom-[90px] right-0 hidden animate-float rounded-2xl border border-line bg-surf px-3.5 py-2.5 text-sm font-semibold shadow-lg [animation-delay:-3s] sm:block">A+ on the defense</div>
    </div>
  )
}
