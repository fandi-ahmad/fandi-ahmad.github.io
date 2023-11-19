import React from 'react'

const CardContent = (props) => {
  return (
    <div className={`bg-gray-700 rounded-xl border border-gray-500 h-fit pb-10 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default CardContent