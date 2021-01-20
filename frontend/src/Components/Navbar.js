import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';
import '../Styles/Main.css'
import { COLORS } from '../Styles/GLOBALSTYLES'


export default function Navbar() {
    return (
        <div className="navbar fully-centered" style={{background: COLORS.grad}}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="title" style={{color: COLORS.light}}>Sneakinder</h1>
            </Link>
        </div>
    )
}
