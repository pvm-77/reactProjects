import React from 'react'
import './Input.css'
const Input = (props) => {

  // concat the className with the className prop
  let className = 'input ' + props.className
  return (
    <>
    <input name={props.name} value={props.value} onChange={props.onChange} type={props.type} className={className} placeholder={props.placeholder} />
    </>
  )
}

export default Input