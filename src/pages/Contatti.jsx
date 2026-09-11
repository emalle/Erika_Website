import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Contatti() {
    return (
        <section className="contact-page">
            <img
                className="contatti-image image-right"
                src="/images/Contattami.jpeg"
                alt="Erika sotto la pioggia"
            />
            <p className="contact-intro">Contattami!</p>

            <p>
                Se vuoi contattarmi per informazioni sui miei libri,
                presentazioni o collaborazioni, puoi scrivermi.
            </p>

            <p>
                Email: erikacasali@gmail.com
            </p>
            <p>
                Puoi anche trovarmi su{" "}
                <a
                    href="https://www.facebook.com/erika.casali.9"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook /> Facebook
                </a>
            </p>

            <p>
                oppure su{" "}
                <a
                    href="https://www.instagram.com/erikacasali_/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram /> Instagram
                </a>
            </p>

            <p>
                E se vuoi scrivermi in privato, puoi farlo anche su{" "}
                <a
                    href="https://t.me/erikacasali"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTelegram /> Telegram
                </a>
                <p>oppure su <FaWhatsapp /> WhatsApp +39 3395610523</p>
            </p>

        </section>
    );
}

export default Contatti;