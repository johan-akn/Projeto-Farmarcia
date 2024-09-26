import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Home from './pages/Home'
import Senhas from './pages/Senhas'

function App() {
  const [page, setPage] = useState(<Home />)

  return (
    <>
        <div className="nav">
            <Logo />
            <button onClick={() => setPage(<Home />)}>Home</button>
            <button onClick={() => setPage(<Senhas />)}>Senhas</button>
            <button onClick={() => setPage(<Sorteio />)}>Sorteio</button>
            <button >Teste</button>
            <button >Teste</button>
        </div>
        {page}
    </>
  )
}

export default App
