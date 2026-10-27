import { useState } from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { books } from '../data/books.jsx'
import BookPopup from './BookPopup.jsx'

function Books() {
    const [selectedBook, setSelectedBook] = useState(null)

    return (
        <>
            <section id="libri" className="books-section">
                <p className="section-label">I Miei Libri</p>

                <div className="books-grid">
                    {books.map((book) => (
                        <div className="book-card" key={book.name}>
                            <div className="book-cover">
                                <img src={book.cover} alt={book.name} />
                            </div>

                            <div className="book-content">
                                <h2>{book.name}</h2>

                                <h3>Perché leggerlo</h3>

                                <p className="book-summary">{book.summary}</p>

                                <button
                                    className="trama-btn"
                                    onClick={() => setSelectedBook(book)}
                                >
                                    <FaBookOpen />
                                    <span>Leggi la trama</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <BookPopup
                book={selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </>
    )
}

export default Books