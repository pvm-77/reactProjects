import React from 'react'

const Button = ({buttonTitle,onClickHandler,className}) => {
  return (
    <button className={className} onClick={onClickHandler} >{buttonTitle}</button>
  )
}

export default Button