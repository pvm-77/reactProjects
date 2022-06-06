import React from 'react'
import './Textarea.css'
const Textarea = (props) => {

  // concat the className with the className prop
  let className = 'textarea ' + props.className
  return (
    <>
    <textarea name={props.name} value={props.value} onChange={props.onChange}  className={className} placeholder={props.placeholder} />
    </>
  )
}

export default Textarea