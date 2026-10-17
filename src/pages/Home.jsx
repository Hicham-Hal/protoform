import PhoneDemo from '../components/PhoneDemo'
import Stats from '../components/Stats'
import Steps from '../components/Steps'
import Marquee from '../components/Marquee'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <section className="animate-page pb-20 pt-9 sm:pt-14">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <h1 className="text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold">
            Your idea,
            <span className="block w-0 animate-typing overflow-hidden whitespace-nowrap border-r-[.08em] border-acc">ready to tap.</span>
          </h1>
          <p className="mb-8 mt-5 max-w-[60ch] text-lg text-mut">
            We design clickable website and mobile app prototypes for student projects, capstones and startup pitches. Walk into your defense with something real to show.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn max-sm:w-full">Start your prototype</a>
            <a href="#work" className="btn btn-ghost max-sm:w-full">See our work</a>
          </div>
        </div>
        <PhoneDemo />
      </div>
      <Stats />
      <Steps />
      <Marquee />
      <CTA />
    </section>
  )
}
