import { useState, useEffect } from 'react'
import useHashRoute from './hooks/useHashRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

const PAGES = { home: Home, work: Work, about: About, contact: Contact }

export default function App() {
  const route = useHashRoute(Object.keys(PAGES))
  const [menuOpen, setMenuOpen] = useState(false)
  const Page = PAGES[route]

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `Protoform – ${route[0].toUpperCase() + route.slice(1)}`
  }, [route])

  return (
    <>
      <Navbar routes={Object.keys(PAGES)} route={route} open={menuOpen} setOpen={setMenuOpen} />
      <main className="wrap"><Page key={route} /></main>
      <Footer />
    </>
  )
}
