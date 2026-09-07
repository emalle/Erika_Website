import "../index.css";
export default function Header() {
    return (
        <header className="site-header">
            <div className="header-content">
                <h1>Erika Casali</h1>
                <p className="tagline">Scrittrice di storie per ragazzi</p>

                <nav className="navigation">
                    <a href="/index.html#libri">I miei libri</a>
                    <a href="/index.html#workshops">Workshops</a>
                    <a href="/index.html#foto">Foto</a>
                    <a href="/index.html#contatti">Contatti</a>
                    <a href="/faq.html">Domande Frequenti</a>
                </nav>
            </div>
        </header>
    );
}