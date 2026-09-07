import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import "../index.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-socials">
                <a href="https://www.instagram.com/erikacasali/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/erikacasali" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://t.me/erikacasali" target="_blank" rel="noopener noreferrer">
                    <FaTelegram />
                </a>
            </div>
            © Erika Casali
        </footer>
    );
}