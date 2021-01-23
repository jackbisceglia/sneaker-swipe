// Dependencies
import React, { useState, useEffect, useContext } from 'react';

// Components
import Navbar from '../Components/Navbar';
import Greeting from '../Components/Greeting';
import Swiper from '../Components/Swiper';

// Styles
import '../Styles/Main.css';

// Helper Functions
import { getAllSneakers } from '../HelperFunctions/MainCRUD';
import shiftArray from '../HelperFunctions/ShiftArray';

// Context
import ShoesContext from '../OtherHooks/ShoesContext';
import VotesContext from '../OtherHooks/VotesContext';

export default function App() {
    const { shoes, setShoes } = useContext(ShoesContext);
    const [loading, setLoading] = useState(true);
    
    // Fetch Shoes
    useEffect(() => {
        const updateState = async () => {
            setShoes(await getAllSneakers());
            setLoading(!loading);
        }
        updateState();
    }, 
    []);

    return (

            <div className="wrapper">
                <Navbar />
                <main>
                    {
                        loading
                        ?
                        <p>Loading</p>
                        :
                        <>
                        <Greeting />
                        <Swiper />
                        </>
                    }
                </main>
            </div>
    )
}
