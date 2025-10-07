import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext'

export function Navbar(): JSX.Element {
  const { theme, toggle } = useTheme()

  return (
    <header className="navbar">
      <div className="brand">
        <Link to="/">
          <img src="img/logo.png" alt="Logo" className="logo-img" />
          <h2 className="logo" style={{color:" #2563eb"}}>Lawie</h2>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/prenumeration">Prenumeration</Link></li>
        <li><Link to="/om-oss">Om oss</Link></li>
      </ul>
      <div className="nav-cta">
        <button aria-label="Toggle theme" className="btn toggle" onClick={toggle}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <button className="btn ghost" style={{ backgroundColor: theme === 'dark' ? '#111318' : '#ffffff' }}>Sign in</button>
      </div>
    </header>
  )
}


