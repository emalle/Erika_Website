import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function Faq() {
    return (
        <div className="page">
            <Header />
            <main className="main-content">
                <section className="faq-section">
                    <p className="section-label">Domande Frequenti</p>
                    {/* your FAQ questions/answers go here */}
                </section>
            </main>
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Faq />
    </React.StrictMode>
);