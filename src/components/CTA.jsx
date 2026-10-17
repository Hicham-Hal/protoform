import Reveal from './Reveal'

export default function CTA() {
  return (
    <Reveal className="mt-24 flex flex-wrap items-center justify-between gap-5 rounded-[28px] bg-ink px-6 py-10 text-bg sm:px-9 sm:py-12">
      <div>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold">Have a project due?</h2>
        <p className="mt-2 opacity-75">Tell us the idea. We'll reply within one day.</p>
      </div>
      <a href="#contact" className="btn !bg-bg !text-ink max-sm:w-full">Book a free call</a>
    </Reveal>
  )
}
