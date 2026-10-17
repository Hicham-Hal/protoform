import useInView from '../hooks/useInView'

/** Fades and slides its children in once, when they scroll into view. */
export default function Reveal({ className = '', children }) {
  const [ref, seen] = useInView(0.15)
  return (
    <div ref={ref} className={`transition duration-700 ${seen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} ${className}`}>
      {children}
    </div>
  )
}
