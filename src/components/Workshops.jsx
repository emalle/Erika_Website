import { FaDownload } from 'react-icons/fa'

function Workshops() {
    return (
        <>
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
                                    src="/images/incontro_2.webp"
                                    alt="Incontro con l'autore"
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
                                    src="/images/incontro_3.webp"
                                    alt="Laboratorio di scrittura"
                                />
                            </div>
                            <div className="workshop-entry-text">
                                <p className="workshop-description">Laboratorio</p>
                                <p>
                                    Questa formula è quella più appassionante, leggiamo, scriviamo e, di solito, facciamo molto rumore.
                                    Il laboratorio parte da uno dei miei romanzi da cui estrapoliamo un tema e lo approfondiamo durante l’incontro.
                                </p>
                                <div className="download-list">
                                    <a className="download-btn"
                                        href="/pdf/Laboratori.pdf"
                                        download
                                    >
                                        <FaDownload />
                                        <span>Laboratori Romanzi</span>
                                    </a>
                                    <a className="download-btn"
                                        href="/pdf/Scrittura_creativa.pdf"
                                        download
                                    >
                                        <FaDownload />
                                        <span>Laboratori Scrittura Creativa</span>
                                    </a>
                                </div>
                                <div className="workshop-tags">
                                    <span className="workshop-tag">In presenza o online</span>
                                    <span className="workshop-tag">Libro letto o non letto</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default Workshops
