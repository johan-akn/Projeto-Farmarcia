import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='texto-container'>
      <img className='logo-home' src="/images/logo-grande.png" alt="" />

      <h2 className='h2-home'>Bem vindo à Farmárcia!</h2>
      <p className='texto-home'>
        Estamos animados em apresentar a nova fase da sua farmácia de confiança! Anteriormente chamada Farmário, a Farmárcia agora oferece um ambiente moderno e acolhedor, com uma variedade ainda maior de medicamentos e produtos de beleza.
        Nosso compromisso é com a sua saúde, oferecendo atendimento personalizado e a orientação de profissionais qualificados. 
        Venha nos visitar e descubra um novo conceito em farmácia, onde qualidade e confiança se encontram. Juntos, vamos cuidar do que realmente importa: você e sua família!
      </p>
    </div>
  )
}

export default Home
