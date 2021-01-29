import React from 'react'
import '../Styles/Main.css'
import '../Styles/Greeting.css'
import {COLORS} from '../Styles/GLOBALSTYLES'

export default function Greeting() {
    return (
        <div className="greeting-wrap fully-centered">
            <h1 className="greeting" style={{backgroundImage: COLORS.grad}}>
                Welcome
            </h1>
            <p style={{color: COLORS.dark}}>
                Start Swiping on some kicks
            </p>
        </div>
    )
}
