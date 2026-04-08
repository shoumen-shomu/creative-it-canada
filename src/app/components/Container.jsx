import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-330 mx-auto w-full ${className}`}>{children}</div>
  )
}

export default Container

