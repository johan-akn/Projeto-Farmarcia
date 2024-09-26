import React from 'react'
import { useState } from 'react'

function Sorteio() {
    const [resultado, setResultado] = useState()
    // const []
    let produtoSorteado, randomNum

    function BotaoSortear(){
        randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

        if(randomNum == 1){
            setResultado('Você não ganhou nada :(')
        }
        // else if(randomNum >=2 )
    }
  return (
    <div>
        <h4>Pressione o botão e descubra se foi sorteado com um dos nossos incríveis produtos!</h4>
        <button onClick={BotaoSortear}>Sortear</button>
    </div>
  )
}

export default Sorteio
