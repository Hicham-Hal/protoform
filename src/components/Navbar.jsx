export default function Navbar({ routes, route, open, setOpen }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="wrap">
        <nav className="relative flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <i className="size-[22px] rounded-[7px_7px_7px_2px] bg-gradient-to-br from-acc to-acc2" />
            Protoform
          </a>

          <button
            aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}
            className="grid size-11 place-content-center gap-[5px] rounded-xl border border-line bg-surf sm:hidden"
          >
            {[0, 1, 2].map(i => <b key={i} className="block h-0.5 w-5 rounded bg-ink" />)}
          </button>

          <div className={`${open ? 'flex' : 'hidden'} absolute inset-x-[-20px] top-16 flex-col border-b border-line bg-bg px-5 pb-4 sm:static sm:inset-x-auto sm:flex sm:flex-row sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0`}>
            {routes.map(r => (
              <a
                key={r} href={`#${r}`} onClick={() => setOpen(false)}
                aria-current={route === r ? 'page' : undefined}
                className={`rounded-full px-3.5 py-3.5 font-medium transition sm:py-2 ${route === r ? 'bg-ink text-bg' : 'text-mut hover:text-ink'}`}
              >
                {r[0].toUpperCase() + r.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
