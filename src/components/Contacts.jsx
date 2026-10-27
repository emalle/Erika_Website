import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

function Contacts() {
    const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        setFormStatus('sending')

        try {
            const response = await fetch('https://formspree.io/f/xbglynzw', {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            })

            if (response.ok) {
                form.reset()
                setFormStatus('success')
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    return (
        <section id="contatti" className="feature-card contact-section" >
            <div className="contatti-image-container">
                <img
                    className="contatti-image"
                    src="/images/Contattami.webp"
                    alt="Erika sotto la pioggia"
                />
            </div>

            <div className="contact-text">
                <p className="contact-intro">Contattami!</p>

                <p>
                    Se vuoi contattarmi per informazioni sui miei libri,
                    presentazioni o collaborazioni, puoi scrivermi.
                </p>

                <p>Email: erikacasali[at]gmail.com</p>

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
                    E se vuoi scrivermi in privato, puoi farlo su{" "}
                    <a href="https://t.me/erikacasali" target="_blank" rel="noopener noreferrer">
                        <FaTelegram /> Telegram
                    </a>
                </p>

                <p>oppure su <FaWhatsapp /><span className="whatsapp-text">WhatsApp</span> +39 3395610523</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Messaggio</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit" disabled={formStatus === 'sending'}>
                        {formStatus === 'sending' ? 'Invio in corso...' : 'Invia'}
                    </button>

                    {formStatus === 'success' && (
                        <p className="form-message form-success">Grazie! Il tuo messaggio è stato inviato.</p>
                    )}
                    {formStatus === 'error' && (
                        <p className="form-message form-error">Qualcosa è andato storto. Riprova o scrivimi via email.</p>
                    )}
                </form>
            </div>
        </section >
    )

}

export default Contacts