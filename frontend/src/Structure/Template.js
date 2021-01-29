// Dependencies
import React, {useState, useEffect, useContext} from 'react';

// Components
import Navbar from '../Components/Navbar';
import Greeting from '../Components/Greeting';
import Swiper from '../Components/Swiper';
import PostSneaker from '../Components/PostSneaker';

// Styles
import '../Styles/Main.css';

// Helper Functions
import {getAllSneakers} from '../HelperFunctions/MainCRUD';
import shiftArray from '../HelperFunctions/ShiftArray';

// Context
import ShoesContext from '../OtherHooks/ShoesContext';
import ModalContext from '../OtherHooks/ModalContext';

export default function App() {
    const {shoes, setShoes} = useContext(ShoesContext);
    
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    // Fetch Shoes
    useEffect(() => {
            const updateState = async () => {
                setShoes(await getAllSneakers())
                setLoading(!loading)
            }
            updateState();
        },
        []);

    return (
        <div className="wrapper">
            <Navbar/>
            <main>
                {
                    loading
                        ?
                        <p>Loading</p>
                        :
                        <>  
                            <PostSneaker/>
                            <Greeting/>
                            <Swiper/>
                        </>
                }
            </main>
        </div>
    )
}