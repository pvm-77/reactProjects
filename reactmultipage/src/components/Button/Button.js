import React from 'react'
import './Button.css'
const Button = (props) => {

    // concat the className with the className prop
    let className = 'btn-custom'
  return (
    <>
    <button type={props.type} className={className}>{props.name}</button>
    </>
  )
}

export default Button