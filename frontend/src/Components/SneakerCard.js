import React from 'react'
import '../Styles/SneakerCard.css'
import '../Styles/Main.css'
import { COLORS } from '../Styles/GLOBALSTYLES'

export default function SneakerCard() {
    return (
        <div className="card-wrapper" style={{background: COLORS.grad}}>
            <div className="head fully-centered">
                <h4 className="text-shadow" style={{color: COLORS.light}}>
                    SB Dunk Low “Purple Lobsters”
                </h4>
            </div>
            <img src="https://ofour.com/wp-content/uploads/2020/06/7-8.jpg" className="shadow" alt=""/>
            <div className="next">
                <div style={{backgroundColor: COLORS.light}} className="no-btn shadow">{"<"}</div>
                <div style={{backgroundColor: COLORS.light}} className="yes-btn shadow">{">"}</div>
            </div>
        </div>
    )
}
