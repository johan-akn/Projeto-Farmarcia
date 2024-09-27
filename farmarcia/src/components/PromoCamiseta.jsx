import React from 'react'
import { TiFlash } from "react-icons/ti";
import './promo.css'

function PromoCamiseta() {
  return (
    <div className='promo-container'>
        <img className='imgPromo' src="/images/camiseta.png" />
        <p>Você ganhou uma incrível camiseta!</p>
        {/* <TiFlash className='promo-container'/> */}
    </div>
  )
}

export default PromoCamiseta
