import React, {useState, useReducer} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../Styles/Main.css';
import Template from './Template';


import ShoesContext from '../OtherHooks/ShoesContext';
import ModalContext from '../OtherHooks/ModalContext';


function Entry() {
    const [shoes, setShoes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return (
        <ShoesContext.Provider value={{shoes, setShoes}}>
        <ModalContext.Provider value={{showModal, setShowModal}}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Template}/>
                </Switch>
            </BrowserRouter>
        </ModalContext.Provider>
        </ShoesContext.Provider>
    );
}

export default Entry;