import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Analytics } from "@vercel/analytics/next"

const pageTitles = {
  '/': 'الرئيسية',
  '/about': 'من أنا',
  '/projects': 'المشاريع',
  '/skills': 'المهارات',
  '/contact': 'تواصل معي',
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = `${pageTitles[pathname] ?? 'فرونتاوي'} | فرونتاوي - Frontawy`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
    <Analytics/>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
