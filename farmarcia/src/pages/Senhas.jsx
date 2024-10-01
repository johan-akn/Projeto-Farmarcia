import React, { useState } from 'react'
import './Senhas.css'

function Senhas() {
  const [inptFilaNormal, setInptFilaNormal] = useState()
  const [inptFilaPref, setInptFilaPref] = useState()
  const [filaNormal, setFilaNormal] = useState([])
  const [filaPref, setFilaPref] = useState([])
  const [senhaChamada, setSenhaChamada] = useState('')

  let arrayFila = []
  let arrayFilaPref = []
  let novaSenha

  function GerarSenhaNormal(){
    novaSenha = filaNormal.length + 1
    setFilaNormal([...filaNormal, novaSenha])
    setInptFilaNormal(filaNormal)
  }

  function GerarSenhaPref(){
    novaSenha = filaPref.length + 1
    setFilaPref([...filaPref, novaSenha])
    setInptFilaPref(filaPref)
  }
  
  function ChamarSenha(){
    if(filaPref.length > 0){
      let proximoPref = filaPref[0]
      setFilaPref(filaPref.slice(1))
      setSenhaChamada(`Preferencial: ${proximoPref}`)
    }
    else if(filaNormal.length > 0){
      let proximoNormal = filaNormal[0]
      setFilaNormal(filaNormal.slice(1))
      setSenhaChamada(`Normal: ${proximoNormal}`)
      
    }else{
      alert('A fila está vazia!')
    }
  }
  

  return (
    <div className='container-senha'>
      <h2 className='titulo-senha'>Gerenciador de senhas</h2>
      
      <p>Fila normal:</p>
      <input type="text" disabled value={filaNormal.join(', ')} />

      <p>Fila preferencial:</p>
      <input type="text" disabled value={filaPref.join(', ')} />
      
        <div>
          <p>Gerar senha</p>
        </div>

        <div className='botoes-fila'>
          <button onClick={GerarSenhaNormal} className='botao-normal'>Normal</button>
          <button onClick={GerarSenhaPref} className='botao-pref'>Preferencial</button>
        </div>
       <button onClick={ChamarSenha} className='botao-chamar'>Chamar senha</button>

       <h3 className='SenhaChamada'>Senha chamada:</h3>
       <p>{senhaChamada || 'Nenhuma senha chamada'}</p>
    </div>
  )
}

export default Senhas
