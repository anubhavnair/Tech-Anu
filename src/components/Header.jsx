import React from 'react'
// import { Link } from 'react-router-dom'
import "../styles/Header.scss"
import { HashLink } from 'react-router-hash-link'
const Header = () => {
    return (
        <nav>
            <h1>Anubhav...</h1>
            <main>
                <HashLink to={'/#home'}>Home</HashLink>
                <HashLink to={'/#about'}>About</HashLink>
                <HashLink to={'/#brands'}>Brands</HashLink>
                <HashLink to={'/contact/#contact'}>Contact</HashLink>
                <HashLink to={'/service'}>Service</HashLink>
            </main>
        </nav>
    )
}

export default Header
