import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Prathibha, home"><span className="brand-icon">P</span><span>prathibha<span className="brand-period">.</span></span></a>
      <nav className={`nav-pill${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <div className="nav-links">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        {links.map((link) => <a key={link.href} href={link.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        <a href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </div>
    </header>
  )
}