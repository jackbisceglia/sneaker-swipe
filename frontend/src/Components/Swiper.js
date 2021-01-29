import React, {useContext} from 'react'
import SneakerCard from './SneakerCard'

import ShoesContext from '../OtherHooks/ShoesContext'

export default function Swiper() {
    const {shoes, setShoes} = useContext(ShoesContext);

    return (
        (shoes.length === 0 || shoes[0] === null)
        ?
        <h1>No Data Found</h1>
        :
        <SneakerCard currShoe={shoes[0]}/>
    )
}
