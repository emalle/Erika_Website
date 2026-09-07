function Home() {
    return (
        <>
            <section className="feature-card">
                <div className="card-inner">

                    <div className="portrait-container">
                        <img
                            src="/images/Erika1.jpeg"
                            alt="Erika Casali"
                            className="portrait"
                        />
                    </div>

                    <div className="card-text">
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


            <section id="libri" className="books-section">
                <p className="section-label">I miei libri</p>

                <div className="books-grid">

                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/Lanterne.jpeg"
                                alt="Lanterne Verdi"
                            />
                        </div>

                        <div className="book-content">
                            <h2>Lanterne Verdi</h2>

                            <h3>Perché leggerlo</h3>

                            <p className="book-summary">
                                Un romanzo di formazione tra la vita e la morte. Una corsa a
                                perdifiato attraverso una foresta ghiacciata per amore del
                                proprio fratello. Una storia per chi ama attraversare i confini
                                del mondo che conosce. Un libro che parla di coraggio e crescita,
                                di confini da superare e di barriere da abbattere.
                            </p>

                            <button className="trama-btn">
                                Leggi la trama
                            </button>
                        </div>
                    </div>


                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/Linda.png"
                                alt="Linda e la Montagna di Fuoco"
                            />
                        </div>

                        <div className="book-content">
                            <h2>Linda e la Montagna di Fuoco</h2>

                            <h3>Perché leggerlo</h3>

                            <p className="book-summary">
                                La disubbidienza come distacco e come definizione di sé. La
                                conoscenza di altri Paesi e culture attraverso il folklore.
                                Si narra la Grecia al di fuori delle solite narrazioni che
                                riguardano gli dei dell’Olimpo o l’estate vacanziera. È un
                                viaggio sia geografico che personale per affrontare le proprie
                                paure e quelle che gli adulti proiettano sui bambini.
                            </p>

                            <button className="trama-btn">
                                Leggi la trama
                            </button>
                        </div>
                    </div>


                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/Disobbedienti.jpg"
                                alt="I Disobbedienti"
                            />
                        </div>

                        <div className="book-content">
                            <h2>I Disobbedienti</h2>

                            <h3>Perché leggerlo</h3>

                            <p className="book-summary">
                                Perché ci piace avere gli occhi aperti sulla realtà e cercare
                                alternative a quelle che ci vengono offerte. Perché la narrativa
                                è lo strumento migliore per immaginare come mettere in pratica
                                le idee che riguardano il nostro futuro.
                            </p>

                            <button className="trama-btn">
                                Leggi la trama
                            </button>
                        </div>
                    </div>


                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/cuoriforti.jpg"
                                alt="Cuori Forti"
                            />
                        </div>

                        <div className="book-content">
                            <h2>Cuori Forti</h2>

                            <h3>Perché leggerlo</h3>

                            <p className="book-summary">
                                Una collezione di storie, fra cui anche la mia, scritte per
                                parlare e fare educazione affettiva in classe affrontando
                                l’argomento dal punto di vista della narrativa.
                            </p>

                            <button className="trama-btn">
                                Leggi la trama
                            </button>
                        </div>
                    </div>


                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/deeplearning.jpg"
                                alt="Deep Learning"
                            />
                        </div>

                        <div className="book-content">
                            <h2>Deep Learning</h2>

                            <h3>Perché leggerlo</h3>

                            <p className="book-summary">
                                Perché l’Intelligenza artificiale fa parte della nostra
                                quotidianità, ma ancora non siamo riusciti a stabilire un limite
                                e questo ci porta a domandarci che cosa ci renda esseri umani.
                            </p>

                            <button className="trama-btn">
                                Leggi la trama
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home