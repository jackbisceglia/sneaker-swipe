import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Greeting from '../Components/Greeting'
import Swiper from '../Components/Swiper'
import '../Styles/Main.css'

export default function App() {
    return (
        <div className="wrapper">
            <Navbar />
            <main>
                <Greeting />
                <Swiper />
            </main>
        </div>
    )
}
