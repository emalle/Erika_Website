import { FaBookOpen, FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
function ZigzagDivider() {
    return (
        <div className="divider" aria-hidden="true">
            <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="zigzag-svg">
                <polyline
                    points="0,15 20,5 40,15 60,5 80,15 100,5 120,15 140,5 160,15 180,5 200,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}
function Home() {
    const [selectedBook, setSelectedBook] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    return (
        <>
            {/*I miei libri*/}
            <section id="libri" className="books-section">
                <p className="section-label">I Miei Libri</p>

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
                            <button
                                className="trama-btn"
                                onClick={() =>
                                    setSelectedBook({
                                        title: 'Lanterne Verdi - Einaudi Ragazzi',
                                        image: '/images/Lanterne.jpeg',
                                        description: `Nur e la sua famiglia hanno lasciato il loro Paese in guerra seguendo una promessa di pace.
                                            Si ritrovano in un Paese freddo del Nord, tra loro e l’Europa ci sono solo un confine invalicabile e una foresta antica.
                                            Il desiderio di Nur di essere solo una tredicenne e di vivere senza prendersi cura del fratello
                                            neonato la porta ad abbandonare il piccolo Kam nella foresta. La ricerca del fratello e del suo riscatto saranno la sua salvezza.`,

                                        themes: 'avventura, famiglia, coraggio, natura, crescita, guerra',

                                        target: '12+',

                                        pages: '228',

                                        price: '12 euro'
                                    })
                                }
                            >
                                <FaBookOpen />
                                <span>Leggi la trama</span>
                            </button>

                        </div>
                    </div>


                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/linda.jpg"
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

                            <button
                                className="trama-btn"
                                onClick={() =>
                                    setSelectedBook({
                                        title: 'Linda e la Montagna di Fuoco - Risma Libri',
                                        image: '/images/linda.jpg',
                                        description: `È estate e Linda sta per arrivare in Grecia, dove ogni anno trascorre le vacanze. Il suo papà è greco, e lì ci sono i nonni che ogni estate la coccolano e le raccontano storie e leggende. 
                                            Una di queste riguarda dei pericolosi esseri che nottetempo escono per rapire i bambini e trascinarli sottoterra. Questa, nelle intenzioni di Linda, sarà l’avventura dell’estate: infatti, di nascosto da genitori e sorellina, vuole avventurarsi in una grotta, 
                                            perché lì è convinta di poter vedere i Kalikatzari (così si chiamano quei mostriciattoli). Naturalmente nulla va come previsto e per Linda inizia un viaggio nell’oscurità, affrontando 
                                            paure primordiali e trovando il coraggio per tentare l’impresa più importante della sua vita.`,
                                        themes: 'La disubbidienza come distacco e come definizione di sé. La conoscenza di altri Paesi e culture attraverso il folklore.',
                                        target: '9+',

                                        pages: '160',

                                        price: '16 euro'
                                    })
                                }
                            >
                                <FaBookOpen />
                                <span>Leggi la trama</span>
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

                            <button
                                className="trama-btn"
                                onClick={() =>
                                    setSelectedBook({
                                        title: 'I Disobbedienti - Edizioni Piuma',
                                        image: '/images/Disobbedienti.jpg',
                                        description: `I Disobbedienti sono un gruppo di giovani attivisti per l’ambiente. I ragazzi ottengono dal
                                                         Governo un lembo di terra dove sperimentare finalmente uno stile di vita in armonia con 
                                                         la natura. Camelia, una delle fondatrici, scrive un diario per comprendere meglio successi e 
                                                         insuccessi dell’impresa. Anni dopo, una grave crisi climatica e l’innalzamento degli oceani, 
                                                         isolano il territorio dei Disobbedienti che, nel frattempo, hanno costituito un sistema 
                                                         politico ben lontano dalla loro vecchia utopia.  Un giorno, l’arrivo di un uomo dalla terraferma 
                                                         svela quanto il loro movimento sia stato usato per sovvertire i poteri della Metropoli da cui provenivano. 
                                                         Queste notizie spingono Camelia a ritornare alla civiltà, ma, una volta lì, viene rinchiusa in un Istituto per la fertilità. 
                                                         Saranno i suoi discendenti, Alba e Ago, a scappare per non arrendersi alla dittatura, con il desiderio di cercare un luogo in cui vivere e procreare liberamente ed essere i testimoni per un nuovo futuro.`,
                                        themes: 'Cambiamento climatico, disobbedienza come forma di protesta civile. Attenzione alla parità di genere. Controllo delle nascite, aborto, fertilità. Fantascienza/Distopia.',
                                        target: '13+',

                                        pages: '250',

                                        price: '18 euro'
                                    })
                                }
                            >
                                <FaBookOpen />
                                <span>Leggi la trama</span>
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

                            <button
                                className="trama-btn"
                                onClick={() =>
                                    setSelectedBook({
                                        title: 'Cuori Forti - Il Mulino a Vento',
                                        image: '/images/cuoriforti.jpg',
                                        description: `Diciannove tra i migliori autori italiani hanno scritto diciannove storie pensate per raccontare gli adolescenti di oggi: 
                                        gli amici, la famiglia, la scuola, gli amori, le scelte, il coraggio e le paure in cui si trovano immersi i loro cuori. 
                                        Sono cuori forti e fragili, che troveranno in queste pagine una bussola per orientarsi nella ricerca della propria identità 
                                        e affrontare le sfide del mondo che li attende.`,
                                        themes: 'Affettività, Adolescenza, Cittadinanza',
                                        target: '11+',

                                        pages: '200',

                                        price: '10,90 euro'
                                    })
                                }
                            >
                                <FaBookOpen />
                                <span>Leggi la trama</span>
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

                            <button
                                className="trama-btn"
                                onClick={() =>
                                    setSelectedBook({
                                        title: 'Deep Learning - Giunti Editore',
                                        image: '/images/deeplearning.jpg',
                                        description: `Sette storie diverse per sette adolescenti alle prese con l’intelligenza artificiale e l’impatto che ha nelle loro vite ed emozioni. 
                                                Distopie e realismo contemporaneo si mischiano in queste avventure per il mondo o nel proprio introspettivo, con l’intento di divertire, 
                                                intrattenere e al tempo stesso soffermarsi e riflettere in modo più consapevole su questo tema.`,
                                        themes: 'Intelligenza Artificiale, etica, cosa significa essere umani',
                                        target: '11+',

                                        pages: '192',

                                        price: '12 euro'
                                    })
                                }
                            >
                                <FaBookOpen />
                                <span>Leggi la trama</span>
                            </button>

                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-cover">
                            <img
                                src="/images/leRagazze.jpg"
                                alt="Le Ragazze"
                            />
                        </div>

                        <div className="book-content">
                            <h2>Le Ragazze</h2>

                            <h3>Perché leggerlo</h3>

                            <p className="book-summary">
                                "Non possiamo salvare nessuno, solo noi stessi; possiamo aiutarci l'un l'altro, offrire opzioni e possibilità a chi non ne ha."
                                Le ragazze è un romanzo che guarda dritto nel buio della tratta e dello sfruttamento senza sconti e senza retorica,
                                e che trova, proprio lì, il coraggio necessario per raccontare anche la propria rinascita.
                            </p>

                            <button
                                className="trama-btn"
                                onClick={() =>
                                    setSelectedBook({
                                        title: 'Le Ragazze - ZOI',
                                        image: '/images/leRagazze.jpg',
                                        description: `Una bottiglia lanciata da un'auto in corsa. 
                                                    Una ragazza a terra, il sangue che si mescola alla nebbia di una sera qualunque. È così che Caterina incrocia per la prima volta il mondo che le cambierà la vita.
                                                    Da quella notte comincia a uscire in pattuglia con i volontari di un'associazione che porta tè caldo, preservativi e un po' 
                                                    di ascolto alle donne trafficate che lavorano sui marciapiedi della periferia. Inna, Jessy, Alina, Maddalena, Anka: nomi che diventano volti, storie di viaggi promessi come riscatto e trasformati in prigionia, di giuramenti vudù e di sorelle costrette a diventare nemiche per sopravvivere. Caterina impara a riconoscere 
                                                    la lingua della paura in ogni sua sfumatura e a riconoscere, in quella paura, un'eco della propria.`,
                                        themes: 'Volontariato, Tratta di donne, Sfruttamento sessuale, Violenza di genere',
                                        target: '14+',

                                        pages: '208',

                                        price: '15 euro'
                                    })
                                }
                            >
                                <FaBookOpen />
                                <span>Leggi la trama</span>
                            </button>

                        </div>
                    </div>
                </div>

            </section>

            {/*Chi sono*/}
            <section id="chi-sono" className="feature-card">
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

            {/* Workshops */}

            <section id="workshops" className="feature-card workshop-card">

                <p className="section-label workshops-title">Workshops</p>
                <p className="workshop-intro-greetings">
                    Grazie per aver pensato a me e alle mie storie per organizzare un incontro con i ragazzi!</p>

                <p className="workshop-intro">
                    Sono convinta che i bambini e i ragazzi siano la parte meno impattata dalle regole
                    e sovrastrutture sociali o almeno sono quelli che hanno più possibilità di scrollarsele di dosso;
                    è per questo che amo lavorare con le mie storie all’interno del contesto scolastico.
                    Ogni romanzo che propongo può essere declinato in attività diverse.
                    Per esempio, si può partire dalla tematica affrontata per lavorare alla produzione di storie originali,
                    facendo almeno un incontro in presenza, per ragionare insieme sulle problematiche legate alla struttura e produzione di un racconto/romanzo, e poi mantenere un rapporto on-line con gli studenti che lo desiderano.
                    È possibile creare percorsi personalizzati insieme ai docenti partendo da uno dei miei romanzi oppure dalla scrittura creativa e dalla lettura.
                </p>

                <div className="workshop-list">

                    <div className="workshop-entry">
                        <div className="workshop-entry-inner">
                            <div className="workshop-entry-image-container">
                                <img
                                    className="workshop-entry-image"
                                    src="/images/incontro_1.jpeg"
                                    alt="Incontro con l'autore"
                                    onClick={() => setSelectedImage("/images/incontro_1.jpeg")}
                                />
                            </div>
                            <div className="workshop-entry-text">
                                <p className="workshop-description">Incontro con l'autore</p>
                                <p>
                                    Questo tipo di incontri può svolgersi sia in presenza che on line.
                                    Di solito, i ragazzi hanno letto almeno uno dei miei romanzi e mi fanno delle domande che riguardano la scrittura,
                                    l’editoria, il significato di scrivere storie, perché leggere, cosa e come leggere, fanno domande più o meno personali su come lavoro e come scrivo.
                                    Se non hanno letto nessuno dei miei titoli, glieli racconto io.
                                </p>
                                <div className="workshop-tags">
                                    <span className="workshop-tag">In presenza o online</span>
                                    <span className="workshop-tag">Libro letto o non letto</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="workshop-entry">
                        <div className="workshop-entry-inner">
                            <div className="workshop-entry-image-container">
                                <img
                                    className="workshop-entry-image"
                                    src="/images/incontro_3.jpg"
                                    alt="Laboratorio di scrittura"
                                    onClick={() => setSelectedImage("/images/incontro_3.jpg")}
                                />
                            </div>
                            <div className="workshop-entry-text">
                                <p className="workshop-description">Laboratorio</p>
                                <p>
                                    Questa formula è quella più appassionante, leggiamo, scriviamo e, di solito, facciamo molto rumore.
                                    Il laboratorio parte da uno dei miei romanzi da cui estrapoliamo un tema e lo approfondiamo durante l’incontro.
                                </p>
                                <div className="workshop-tags">
                                    <span className="workshop-tag">In presenza o online</span>
                                    <span className="workshop-tag">Libro letto o non letto</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            {/*Domande Frequenti*/}

            < section id="domande-frequenti" className="feature-card faq-card" >
                <h1>Domande Frequenti</h1>
                <p className="faq-question">Quanto costa un incontro?</p>

                <p
                >Gli incontri prevedono un gettone di presenza che varia a seconda di quale formula scegliamo,
                    contattami e parliamone,
                    sono sicura che insieme troveremo la maniera di soddisfare tutte le persone coinvolte.
                </p>


                <p className="faq-question">È obbligatorio comprare il libro?</p>

                <p>
                    Non è obbligatorio, i miei titoli sono presenti anche nelle biblioteche e possono essere presi in prestito.
                    Se la tua biblioteca di riferimento non ha i miei titoli, chiedi di acquistarli.
                </p>

                <ZigzagDivider />

                <p className="faq-question">Quanti libri bisogna comprare?</p>
                <p>
                    Dipende dalle possibilità economiche della scuola e del gruppo di ragazzi e famiglie coinvolte. La cosa migliore è che ogni ragazzo, quando possibile,
                    abbia la sua copia del romanzo su cui lavoreremo, ma se non è possibile,
                    contattami e cerchiamo insieme una soluzione soddisfacente per tutte le persone coinvolte.
                    A seconda della quantità di libri che vengono comprati varia anche il supporto economico da parte della casa editrice coinvolta.
                    Alcune delle case editrici con cui collaboro si occupano di pagare il viaggio di andate e ritorno. Contattami e troviamo la formula migliore per tutti.

                </p>

                <p className="faq-question">Quanto dura un incontro?</p>
                <p>
                    Dipende dalla formula che scegli: ci sono incontri da un’ora, da due ore, ma anche da quattro che si tengono in due giornate diverse.
                    Contattami e troviamo insieme la formula migliore per te.

                </p>

                <ZigzagDivider />


                <p className="faq-question">In quanti dobbiamo essere per fare un incontro?</p>
                <p>
                    Mi è capitato di partecipare a incontri all’interno di teatri o aule magne, così come ho partecipato a incontri con solo quattro o cinque persone.
                    Dipende sempre da che tipo di attività vuoi che svolgiamo insieme. A me piace molto lavorare con le classi singole perché il contatto umano è più diretto e perché
                    i ragazzi si trovano in una situazione familiare che rende la comunicazione più semplice, ma sono disponibile a parlare anche con un pubblico più folto.
                    Contattami e parliamo di quello che pensi sia meglio per i tuoi ragazzi.

                </p>
            </section >

            {/*Contatti*/}

            < section id="contatti" className="feature-card contact-section" >
                <div className="contatti-image-container">
                    <img
                        className="contatti-image"
                        src="/images/Contattami.jpeg"
                        alt="Erika sotto la pioggia"
                    />
                </div>

                <div className="contact-text">
                    <p className="contact-intro">Contattami!</p>

                    <p>
                        Se vuoi contattarmi per informazioni sui miei libri,
                        presentazioni o collaborazioni, puoi scrivermi.
                    </p>

                    <p>Email: erikacasali@gmail.com</p>

                    <p>
                        Puoi anche trovarmi su{" "}
                        <a href="https://www.facebook.com/erika.casali.9" target="_blank" rel="noopener noreferrer">
                            <FaFacebook /> Facebook
                        </a>
                    </p>

                    <p>
                        oppure su{" "}
                        <a href="https://www.instagram.com/erikacasali_/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                    </p>

                    <p>
                        E se vuoi scrivermi in privato, puoi farlo anche su{" "}
                        <a href="https://t.me/erikacasali" target="_blank" rel="noopener noreferrer">
                            <FaTelegram /> Telegram
                        </a>
                    </p>

                    <p>oppure su <FaWhatsapp /> WhatsApp +39 3395610523</p>
                </div>
            </section >

            {/* WORKSHOP IMAGE POPUP */}
            {
                selectedImage && (
                    <div
                        className="modal"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            onClick={(event) => event.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Workshop"
                            />
                        </div>
                    </div>
                )
            }

            {/*Book pop-up*/}

            {
                selectedBook && (
                    <div
                        className="book-popup-overlay"
                        onClick={() => setSelectedBook(null)}
                    >
                        <div
                            className="book-popup"
                            style={{
                                backgroundImage: `url(${selectedBook.image})`
                            }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="book-popup-content">

                                <button
                                    className="book-popup-close"
                                    onClick={() => setSelectedBook(null)}
                                    aria-label="Chiudi"
                                >
                                    ×
                                </button>

                                <h2>{selectedBook.title}</h2>

                                <div className="book-popup-text">
                                    <p>{selectedBook.description}</p>

                                    <p>
                                        <strong>TEMI:</strong> {selectedBook.themes}
                                    </p>

                                    <p>
                                        <strong>TARGET:</strong> {selectedBook.target}
                                    </p>

                                    <p>
                                        <strong>PAGINE:</strong> {selectedBook.pages}
                                    </p>

                                    <p>
                                        <strong>PREZZO:</strong> {selectedBook.price}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}



export default Home