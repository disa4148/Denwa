import React from 'react'

interface IButton {
    text: string;
    color: string;    
}

export const ButtonFilled = ({text, color}: IButton) => {
  return (
    <div>
      <button style={{color}}>{text}</button>
      <h1>хуй</h1>
    </div>
  )
  
}

export default ButtonFilled