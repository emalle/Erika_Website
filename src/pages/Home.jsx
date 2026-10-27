
import Books from '../components/Books.jsx'
import Biography from '../components/Biography.jsx'
import Workshops from '../components/Workshops.jsx'
import Faq from '../components/Faq.jsx'
import Contacts from '../components/Contacts.jsx'


function Home() {

    return (
        <>
            {/* Libri */}
            < Books />

            {/*Chi sono*/}
            < Biography />

            {/* Workshops */}
            < Workshops />

            {/*Domande Frequenti*/}
            < Faq />

            {/*Contatti*/}
            < Contacts />
        </>
    )

}



export default Home