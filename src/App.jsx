import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header>
        <Header/>
      </header>

      <main>
        <Main/>
      </main>

      <footer>
        <Footer/>
      </footer>
      
  </div>
  )
}

export default App
