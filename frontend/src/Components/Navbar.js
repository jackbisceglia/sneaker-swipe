import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css';
import '../Styles/Main.css'
import {COLORS} from '../Styles/GLOBALSTYLES'

import ModalContext from '../OtherHooks/ModalContext'

export default function Navbar() {
    const {showModal, setShowModal} = useContext(ModalContext);

    return (
        <div className="navbar-style" style={{background: COLORS.grad}}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="nav-title title-one" style={{color: COLORS.light}}>Sneaker-Swipe</h1>
            </Link>
            <div className="right-nav">
                <Link to="/stats" style={{textDecoration: 'none'}}>
                    <h3 style={{color: COLORS.light}}>Stats</h3>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <h3 onClick={() => setShowModal(!showModal)} style={{color: COLORS.light}}>Post Sneakers</h3>
                </Link>
            </div>
        </div>
    )
}
