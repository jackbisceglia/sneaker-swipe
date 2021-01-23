import React, { useContext } from 'react'
import SneakerCard from './SneakerCard'

import ShoesContext from '../OtherHooks/ShoesContext'

export default function Swiper() {
    const { shoes, setShoes } = useContext(ShoesContext);

    return (
        <SneakerCard currShoe={shoes[0]}/>
    )
}
