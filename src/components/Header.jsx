import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="header-content">

                <div className="brand">
                    <h1>Erika Casali</h1>
                    <p className="tagline">
                        Scrittrice di storie per ragazzi
                    </p>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(open => !open)}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    id="main-navigation"
                    className={`navigation ${menuOpen ? 'open' : ''}`}
                >
                    <a href="#libri" onClick={() => setMenuOpen(false)}>I miei libri</a>
                    <a href="#chi-sono" onClick={() => setMenuOpen(false)}>Chi sono</a>
                    <a href="#workshops" onClick={() => setMenuOpen(false)}>Workshops</a>
                    <a href="#domande-frequenti" onClick={() => setMenuOpen(false)}>Domande Frequenti</a>
                    <a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>
                </nav>

            </div>
        </header>
    )
}