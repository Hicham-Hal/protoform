import { useState, useEffect } from 'react'

export default function useHashRoute(routes) {
  const read = () => { const h = location.hash.slice(1); return routes.includes(h) ? h : routes[0] }
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onChange = () => setRoute(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
