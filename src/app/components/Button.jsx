import React from 'react'

const Button = ({btnTxt,className}) => {
  return (
    <div className={`py-4 px-8 rounded-[41.5px] text-white bg-primary inline-block cursor-pointer ${className}`}>{btnTxt}</div>
  )
}

export default Button