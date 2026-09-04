import "./index.css";

function App() {
    return (
        <div className="page">
            <header className="site-header">
                <div className="header-content">
                    <h1>Erika Casali</h1>
                    <p className="tagline">Scrittrice di storie per ragazzi</p>

                    <nav className="navigation">
                        <a href="#libri">I miei libri</a>
                        <a href="#workshops">Workshops</a>
                        <a href="#foto">Foto</a>
                        <a href="#contatti">Contatti</a>
                        <a href="#faq">Domande Frequenti</a>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <section className="feature-card">
                    <div className="card-inner">
                        <div className="portrait-container">
                            <img
                                src="/images/Erika1.jpeg"
                                alt="Erika Casali"
                                className="portrait"
                            />
                        </div>

                        <div className="biography">
                            <p className="section-label">Chi sono</p>

                            <p>

                                Ciao, mi chiamo Erika Casali, sono una scrittrice di storie.
                                Il più delle volte scrivo storie per ragazzi tra gli 11 e i 17
                                anni, ma capita anche che una storia per più piccoli o per più
                                grandi venga a bussare e io mi ritrovi a seguirla fino in fondo.
                            </p>

                            <p>
                                Vivo su una piccola isola sperduta nel mare Egeo, dove capre e
                                gabbiani la fanno da padrone. Nonostante la distanza, vengo spesso
                                in Italia.
                            </p>

                            <p>
                                Le mie passioni si sono tramutate in storie: la letteratura per
                                ragazzi, viaggiare, le lingue straniere, le culture diverse e tutto
                                quanto le compone, dal cibo alle abitudini. Tutti questi elementi
                                sono storie a sé stanti che mi piace declinare e immaginare in
                                contesti e situazioni più o meno verosimili.
                            </p>

                            <p>
                                I miei romanzi parlano di crisi climatica, di disobbedienza civile,
                                dei Paesi del blocco ex Sovietico, creano ipotesi per immaginare un
                                modo di vita diverso o mettono in luce lati nascosti di luoghi
                                famosi, per esempio la Grecia, ma quella del folklore e non delle
                                divinità.
                            </p>

                            <p>
                                Sono incuriosita dal confronto tra l’essere umano e le situazioni
                                estreme, la sopravvivenza nella natura selvaggia, per esempio, o
                                durante una guerra. Mi piace inserire i miei personaggi in contesti
                                in cui è quasi impossibile indossare una maschera e mentire,
                                contesti in cui sono costretti a reagire nella maniera più
                                spontanea e immediata.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="libri" className="feature-card">
                    <div className="card-inner">
                        <div className="book-list">
                            <p className="section-label">I miei libri</p>
                            <div className="book-item">
                                <div className="book-flip">
                                    <div className="book-inner">

                                        <div className="book-front">
                                            <img
                                                src="/images/book-1.jpg"
                                                alt="Titolo del libro"
                                            />
                                        </div>

                                        <div className="book-back">
                                            <h3>Lanterne Verdi</h3>
                                            <p>
                                                TARGET: 12+
                                            </p>
                                            <p>
                                                PAGINE: 228
                                            </p>
                                            <p>
                                                PREZZO: 12 euro
                                            </p>
                                            <p>
                                                EDITORE: Einaudi Ragazzi
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="book-info">
                                    <h2>Lanterne Verdi</h2>
                                    <p>
                                        TRAMA: Nur e la sua famiglia hanno lasciato il loro Paese in guerra seguendo una promessa di pace.
                                        Si ritrovano in un Paese freddo del Nord, tra loro e l’Europa ci sono solo un confine invalicabile e una foresta antica.
                                        Il desiderio di Nur di essere solo una tredicenne e di vivere senza prendersi cura del fratello neonato la porta ad abbandonare il piccolo Kam nella foresta.
                                        La ricerca del fratello e del suo riscatto saranno la sua salvezza.
                                    </p>
                                    <p>
                                        TEMI: avventura, famiglia, coraggio, natura, crescita, guerra
                                    </p>
                                    <p>
                                        PERCHÉ LEGGERLO: Un romanzo di formazione tra la vita e la morte. Una corsa a perdifiato attraverso una foresta ghiacciata per amore del proprio fratello.
                                        Una storia per chi ama attraversare i confini del mondo che conosce. Un libro che parla di coraggio e crescita, di confini da superare e di barriere da abbattere.
                                    </p>
                                </div>
                            </div>
                        </div >
                    </div >
                </section >
            </main >

            <footer className="site-footer">
                © Erika Casali
            </footer>
        </div >
    );
}

export default App;