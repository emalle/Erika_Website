function BookPopup({ book, onClose }) {
    if (!book) return null

    return (
        <div className="book-popup-overlay" onClick={onClose}>
            <div
                className="book-popup"
                style={{ backgroundImage: `url(${book.cover})` }}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="book-popup-content">
                    <button
                        className="book-popup-close"
                        onClick={onClose}
                        aria-label="Chiudi"
                    >
                        ×
                    </button>

                    <h2>{book.name} - {book.publisher}</h2>

                    <div className="book-popup-text">
                        <p>{book.description}</p>
                        <p><strong>TEMI:</strong> {book.themes}</p>
                        <p><strong>TARGET:</strong> {book.target}</p>
                        <p><strong>PAGINE:</strong> {book.pages}</p>
                        <p><strong>PREZZO:</strong> {book.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookPopup