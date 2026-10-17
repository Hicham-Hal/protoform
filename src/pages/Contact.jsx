import { useState } from 'react'
import emailjs from '@emailjs/browser'

const TYPES = ['Mobile app', 'Website', 'Both']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: TYPES[0], deadline: '', idea: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const set = key => e => setForm({ ...form, [key]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!form.name.trim() || !/\S+@\S+\.\S+/.test(form.email) || !form.idea.trim()) {
      setError('Add your name, a valid email and a short description of your idea.')
      return
    }
    setError('')

    setLoading(true)
    try{
      emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        type: form.type,
        deadLine: form.deadline || 'Not specified',
        idea: form.idea
      }, { publicKey: import.meta.env.VITE_PUBLIC_KEY })
      setSent(true)
    }catch(err){
      console.log(err)
      setError('Something went wrong, Please try again or email us directly')
    }finally{
      setLoading(false)
    }
  }

  return (
    <section className="animate-page pb-20 pt-9 sm:pt-14">
      <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold">Let's build your prototype.</h1>
          <p className="mt-4 text-mut">Share a few details and we'll send a plan, a timeline and a fixed price within one working day.</p>
          <div className="mt-7 grid gap-3">
            {[['Email', 'halouanehicham@gmail.com'], ['Telegram, whatsapp', '+213 7 76118846'], ['Hours', 'Sun–Thu, 6:00–21:00'], ['Reply time', 'Under 24 hours']].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-line bg-surf px-[18px] py-3.5"><b>{k}</b><br />{v}</div>
            ))}
          </div>
        </div>

        <form noValidate onSubmit={submit} className="rounded-3xl border border-line bg-surf p-5 sm:p-7">
          {sent ? (
            <div className="px-2.5 py-10 text-center">
              <svg viewBox="0 0 100 100" className="mx-auto size-20" aria-hidden="true">
                <circle cx="50" cy="50" r="40" className="animate-draw fill-none stroke-mint stroke-[5] [stroke-dasharray:260] [stroke-dashoffset:260] [stroke-linecap:round]" />
                <path d="M30 52l14 14 27-30" className="animate-draw fill-none stroke-mint stroke-[5] [animation-delay:.6s] [stroke-dasharray:260] [stroke-dashoffset:260] [stroke-linecap:round]" />
              </svg>
              <h3 className="mt-3.5 text-xl font-semibold">Request sent</h3>
              <p className="mx-auto mt-2 text-mut">Thanks {form.name.split(' ')[0]}! We'll reply by email within one working day.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-sm font-semibold">Your name
                <input className="field" value={form.name} onChange={set('name')} autoComplete="name" placeholder="e.g. Yasmine B." /></label>
              <label className="grid gap-1.5 text-sm font-semibold">Email
                <input className="field" type="email" value={form.email} onChange={set('email')} autoComplete="email" placeholder="you@university.edu" /></label>

              <fieldset className="m-0 border-0 p-0">
                <legend className="mb-2 text-sm font-semibold">What do you need?</legend>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map(t => (
                    <label key={t}>
                      <input type="radio" name="type" className="peer sr-only" checked={form.type === t} onChange={() => setForm({ ...form, type: t })} />
                      <span className="block cursor-pointer rounded-full border-[1.5px] border-line px-4 py-2 font-medium transition peer-checked:border-acc peer-checked:bg-acc peer-checked:text-white peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-acc">{t}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-1.5 text-sm font-semibold">Deadline
                <input className="field" type="date" value={form.deadline} onChange={set('deadline')} /></label>
              <label className="grid gap-1.5 text-sm font-semibold">Tell us about your idea
                <textarea className="field" rows="4" value={form.idea} onChange={set('idea')} placeholder="Who is it for and what should it do?" /></label>

              <button className="btn disabled:cursor-wait disabled:opacity-60" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send my request'}  Send my request
              </button>
              <p role="alert" className="text-sm text-acc2">{error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
