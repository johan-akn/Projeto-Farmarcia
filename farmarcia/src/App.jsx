import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
import Home from './pages/Home'
import Senhas from './pages/Senhas'
import Sorteio from './pages/Sorteio'

function App() {
  const [page, setPage] = useState(<Home />)

  return (
    <>
        <div className="nav">
            <Logo />
            <button className='botao-nav' onClick={() => setPage(<Home />)}>Home</button>
            <button className='botao-nav' onClick={() => setPage(<Senhas />)}>Senhas</button>
            <button className='botao-nav' onClick={() => setPage(<Sorteio />)}>Sorteio</button>
            <button className='botao-nav' >Teste</button>
            <button className='botao-nav' >Teste</button>
        </div>
        <Body />
        <div className="page-container">
          {page}
        </div>
        <Footer />
    </>
  )
}

export default App
