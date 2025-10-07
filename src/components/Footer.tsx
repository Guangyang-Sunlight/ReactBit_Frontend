import React from 'react'
import { Link } from 'react-router-dom'

export function Footer(): JSX.Element {
    return (
        <footer className = "footer">
            <div>© Lawie All rights reserved</div>
            <div>Lawie provides general information only and does not replace legal advice.</div>
            <div>Terms of Use • Privacy Policy • Contact</div>
        </footer>
    )
}