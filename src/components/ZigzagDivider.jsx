function ZigzagDivider() {
    return (
        <div className="divider" aria-hidden="true">
            <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="zigzag-svg">
                <polyline
                    points="0,15 20,5 40,15 60,5 80,15 100,5 120,15 140,5 160,15 180,5 200,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

export default ZigzagDivider
