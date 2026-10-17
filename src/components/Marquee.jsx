import { QUOTES } from '../data'

export default function Marquee() {
  return (
    <div aria-label="What students say" className="mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-scroll gap-4 hover:[animation-play-state:paused]">
        {[...QUOTES, ...QUOTES].map(([text, who], i) => (
          <figure key={i} className="m-0 w-80 rounded-[18px] border border-line bg-surf p-5 text-[.95rem]">
            “{text}”
            <figcaption className="mt-2.5 text-sm text-mut">{who}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
