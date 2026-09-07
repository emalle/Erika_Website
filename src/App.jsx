import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Contatti from './pages/Contatti.jsx'
import DomandeFrequenti from './pages/DomandeFrequenti.jsx'
import Workshops from './pages/Workshops.jsx'
import Foto from './pages/Foto.jsx'
function App() {
    return (
        <div className="page">
            <Header />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contatti" element={<Contatti />} />
                    <Route path="/workshops" element={<Workshops />} />
                    <Route path="/foto" element={<Foto />} />
                    <Route path="/domande-frequenti" element={<DomandeFrequenti />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App