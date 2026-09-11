import { useState } from "react";
function Workshops() {
    const [selectedImage, setSelectedImage] = useState(null)
    return (
        <section className="workshops-page">
            <h1>Incontri e Laboratori</h1>
            <p className="workshop-intro">
                Grazie per aver pensato a me e alle mie storie per organizzare un incontro con i ragazzi!
            </p>
            <img
                className="first-workshop-image"
                src="/images/incontro_2.jpg"
                alt="Laboratorio di scrittura "
                onClick={() => setSelectedImage("/images/incontro_2.jpg")}
            />
            <p>Sono convinta che i bambini e i ragazzi siano la parte meno impattata dalle regole e sovrastrutture sociali o almeno sono quelli che hanno più possibilità di scrollarsele di dosso; è per questo che amo lavorare con le mie storie all’interno del contesto scolastico.
                Ogni romanzo che propongo può essere declinato in attività diverse. Per esempio, si può partire dalla tematica affrontata per lavorare alla produzione di storie originali,
                facendo almeno un incontro in presenza, per ragionare insieme sulle problematiche legate alla struttura e produzione di un racconto/romanzo, e poi mantenere un rapporto on-line con gli studenti che lo desiderano.
                È possibile creare percorsi personalizzati insieme ai docenti partendo da uno dei miei romanzi oppure dalla scrittura creativa e dalla lettura.
            </p>

            <p className="workshop-description">Incontro con l'autore</p>
            <img
                className="workshop-image image-right"
                src="/images/incontro_1.jpeg"
                alt="Incontro con l'autore"
                onClick={() => setSelectedImage("/images/incontro_1.jpeg")}
            />
            <p>
                Questo tipo di incontri può svolgersi sia in presenza che on line.
                Di solito, i ragazzi hanno letto almeno uno dei miei romanzi e mi fanno delle domande che riguardano la scrittura,
                l’editoria, il significato di scrivere storie, perché leggere, cosa e come leggere, fanno domande più o meno personali su come lavoro e come scrivo.
                Se non hanno letto nessuno dei miei titoli, glieli racconto io.
            </p>

            <img
                className="workshop-image image-left"
                src="/images/incontro_3.jpg"
                alt="Laboratorio di scrittura"
                onClick={() => setSelectedImage("/images/incontro_3.jpg")}
            />

            <p className="workshop-description">Laboratorio</p>
            <p>
                Questa formula è quella più appassionante, leggiamo, scriviamo e, di solito, facciamo molto rumore.
                Il laboratorio parte da uno dei miei romanzi da cui estrapoliamo un tema e lo approfondiamo durante l’incontro.
            </p>
            <p className="workshop-description">Ho letto il romanzo </p>
            <img
                className="workshop-image image-right"
                src="/images/incontro_4.jpeg"
                alt="Laboratorio di scrittura"
                onClick={() => setSelectedImage("/images/incontro_4.jpeg")}
            />

            <p>
                Puoi scegliere tra i laboratori specifici collegati al titolo oppure pensiamo insieme a qualcosa di diverso
                e più adatto alla tua classe o all’incontro che hai in mente.

            </p>
            <p className="workshop-description">Non ho letto il romanzo</p>
            <p>
                In questo caso non affronteremo la storia direttamente, ma possiamo comunque introdurla discutendo delle tematiche,
                della scrittura o dei miei romanzi in generale in modo che possiate scegliere in seguito quale leggere con la classe.

            </p>
            <p className="workshop-description">In presenza</p>
            <p>
                Questa è la formula migliore perché niente riesce a sostituire davvero il contatto umano.
                Vengo da te e dai tuoi ragazzi, più persone coinvolgiamo nell’incontro, meglio è.
                In questo caso, a seconda di quante classi e quanti titoli verranno coinvolti, avrò probabilmente bisogno di pernottare oltre che ii arrivare e tornare indietro.
                Contattami e parliamone, troviamo insieme la soluzione più adatta. Alcune delle case editrici con cui collaboro coprono parte delle spese e così fanno anche alcune librerie e scuole.

            </p>
            <p className="workshop-description">On line</p>
            <img
                className="workshop-image image-left"
                src="/images/incontro_5.jpeg"
                alt="Laboratorio di scrittura"
                onClick={() => setSelectedImage("/images/incontro_5.jpeg")}
            />
            <p>
                Preferisco incontrare una classe alla volta, la situazione on line è più complicata nella gestione a livello umano e, anche se non sembra,
                necessita di molta più concentrazione da parte di tutti i partecipanti che non un incontro dal vivo.
                Assicuriamoci entrambi di avere una buona connessione e colleghiamoci!

            </p>
            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Workshop" />
                    onClick={(event) => event.stopPropagation()}
                </div>
            )}
        </section>
    )
}

export default Workshops