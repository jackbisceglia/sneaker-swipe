import React, {useContext, useReducer} from 'react'
import '../Styles/SneakerCard.css'
import '../Styles/Main.css'
import {COLORS} from '../Styles/GLOBALSTYLES'

import ShoesContext from '../OtherHooks/ShoesContext'
import shiftArray from '../HelperFunctions/ShiftArray'
import pluralize from '../HelperFunctions/Pluralize'
import capitalizeSentence from '../HelperFunctions/CapitalizeSentence'
import { getAllSneakers } from '../HelperFunctions/MainCRUD';
import { changeVote } from '../HelperFunctions/MainCRUD';

export default function SneakerCard(
    {currShoe: {shoe_name, shoe_link, num_upvotes, num_downvotes, shoe_id}}) {
    const {shoes, setShoes} = useContext(ShoesContext);

    const handleVote = (vote_type) => {
        const updateState = async () => {
            setShoes(await getAllSneakers());
        }

        const sendVote = async (type, id) => {
            await changeVote(type, id);
        }

        sendVote(vote_type, shoe_id)

        if (shoes.length === 1) {
            updateState();
        } 
        else {
            setShoes(shiftArray(shoes));
        }

    }

    return (
        <div className="card-wrapper" style={{background: COLORS.grad}}>
            <div className="head fully-centered">
                <h4 className="text-shadow" style={{color: COLORS.light}}>
                    {capitalizeSentence(shoe_name)}
                </h4>
            </div>
            <img src={shoe_link} className="shadow" alt=""/>
            <div className="next">
                <div
                    style={{backgroundColor: COLORS.light}}
                    className="no-btn shadow"
                    onClick={() => handleVote("decrement")}
                >
                    {"drop"}
                </div>
                <div
                    style={{backgroundColor: COLORS.light}}
                    className="yes-btn shadow"
                    onClick={() => handleVote("increment")}
                >
                    {"cop"}
                </div>
            </div>
            <div style={{color: COLORS.light}} className="stats">
                <h5>{`${num_downvotes} ${pluralize(num_downvotes, 'drop')}`}</h5>
                <h5>{`${num_upvotes} ${pluralize(num_upvotes, 'cop')}`}</h5>
            </div>
        </div>
    )
}
