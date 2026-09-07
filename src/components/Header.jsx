import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-content">

                <h1>Erika Casali</h1>

                <p className="tagline">
                    Scrittrice di storie per ragazzi
                </p>

                <nav className="navigation">

                    <a href="/#chi-sono">Chi sono</a>

                    <a href="/#libri">I miei libri</a>

                    <Link to="/workshops">Workshops</Link>

                    <Link to="/foto">Foto</Link>

                    <Link to="/contatti">Contatti</Link>

                    <Link to="/domande-frequenti">Domande Frequenti</Link>
                </nav>

            </div>
        </header>
    )
}