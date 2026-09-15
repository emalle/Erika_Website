import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'

function App() {
    return (
        <div className="page">
            <Header />

            <main className="main-content">
                <Home />

            </main>

            <Footer />
        </div>
    )
}

export default App