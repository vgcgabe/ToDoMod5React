import React from 'react'
import S from './Button.modules.css'

const  Button = (props) => {
  return (
    <div>
        <button className='headerButton'>{props.name}</button>
    </div>
  )
}

export default Button;