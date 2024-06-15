import React from 'react'

const ListPoint = (props) => {
  return (
    <div className={`flex flex-row ${props.className}`}>
      <span className='mr-2'>•</span>
      <span>{props.children}</span>
    </div>
  )
}

export default ListPoint
