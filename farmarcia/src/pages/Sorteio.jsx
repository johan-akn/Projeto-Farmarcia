import React from 'react'
import { useState } from 'react'
import PromoCamiseta from '../components/PromoCamiseta';
import PromoCartao from '../components/PromoCartao';
import PromoPlaca from '../components/PromoPlaca';
import './Sorteio.css'

function Sorteio() {
    const [resultado, setResultado] = useState()
    // const [numSorteado, setNumSorteado] = useState(false)
    let randomNum

    function BotaoSortear(){
        randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

        if(randomNum == 1){
            setResultado('Você não ganhou nada :(')
        }
        else if(randomNum >=2 && randomNum <= 4){
            setResultado(<PromoCartao />)
        }
        else if(randomNum >=5 && randomNum <= 7){
            setResultado(<PromoPlaca />)
        }
        else if(randomNum >=8 && randomNum <= 10){
            setResultado(<PromoCamiseta />)
        }
        // numSorteado = true
    }
  return (
    <div className='sorteio-container'>
        <h1>Promoção de Inauguração</h1>
        <h3>Pressione o botão e descubra se foi sorteado com um dos nossos incríveis produtos!</h3>
        <button className='botao-nav' onClick={BotaoSortear}>Sortear</button>
        {resultado}
    </div>
  )
}

export default Sorteio
