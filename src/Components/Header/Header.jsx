import React from 'react'
import Button from '../Button/Button'
import S from "./Header.modules.css"

const Header = () => {
  return (
    <header>
        <section className='textSection'>
          <h3>uma seleção de produtos</h3>
          <h1>especial para você</h1>
          <p>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>
        </section>

        <section className='headerButtonsSection'>
          < Button name="Botão teste props" />
          < Button name="Botão teste props" />
          < Button name="Botão teste props" />
          < Button name="Botão teste props" />
        </section>
        
    </header>
  )
}

export default Header