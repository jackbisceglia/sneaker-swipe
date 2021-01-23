import React, { useContext, useReducer } from 'react'
import '../Styles/SneakerCard.css'
import '../Styles/Main.css'
import { COLORS } from '../Styles/GLOBALSTYLES'

import ShoesContext from '../OtherHooks/ShoesContext'
import shiftArray from '../HelperFunctions/ShiftArray'

export default function SneakerCard({currShoe: {sneaker_name, img_link}}) {
    const { shoes, setShoes } = useContext(ShoesContext);

    const handleVote = (type) => {
        setShoes(shiftArray(shoes));
    }

    return (
        <div className="card-wrapper" style={{background: COLORS.grad}}>
            <div className="head fully-centered">
                <h4 className="text-shadow" style={{color: COLORS.light}}>
                    { sneaker_name }
                </h4>
            </div>
            <img src={img_link} className="shadow" alt=""/>
            <div className="next">
                <div 
                    style={{backgroundColor: COLORS.light}} 
                    className="no-btn shadow"
                    onClick={() => handleVote('decrement')}
                    >
                    {"drop"}
                </div>
                <div 
                    style={{backgroundColor: COLORS.light}}
                    className="yes-btn shadow"
                    onClick={() => handleVote('increment')}
                    >
                    {"cop"}
                </div>
            </div>
        </div>
    )
}
