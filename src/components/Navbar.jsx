import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من أنا' },
  { to: '/projects', label: 'المشاريع' },
  { to: '/skills', label: 'المهارات' },
  { to: '/contact', label: 'تواصل معي' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <nav className="navbar container" aria-label="التنقل الرئيسي">
        <Link to="/" className="brand" aria-label="فرونتاوي، الصفحة الرئيسية">
          <span className="brand__mark" aria-hidden="true">&lt;<i />&gt;</span>
          <span className="brand__text">
            <strong>فرونتاوي</strong>
            <small>Frontawy</small>
          </span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`navbar__link${pathname === to ? ' navbar__link--active' : ''}`}
                aria-current={pathname === to ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-primary navbar__cta">
            اطلب موقعك الآن <span aria-hidden="true">↗</span>
          </Link>
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <ul className="mobile-menu__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`mobile-menu__link${pathname === to ? ' mobile-menu__link--active' : ''}`}
                aria-current={pathname === to ? 'page' : undefined}
              >
                {label}<span aria-hidden="true">←</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn btn-primary mobile-menu__cta">
          اطلب موقعك الآن
        </Link>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="mobile-menu__backdrop"
          aria-label="إغلاق القائمة"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Navbar
