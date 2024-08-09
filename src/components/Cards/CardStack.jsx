import React from 'react'

const CardStack = (props) => {
  return (
    <div className='px-3 py-3 sm:py-2 lg:py-3 text-center text-blue-300 rounded-md bg-gray-600 border-gray-500 border tooltip tooltip-top' data-tip={props.name}>
      <img src={props.src} alt="" loading='lazy' className={`w-14 h-14 m-auto object-contain ${props.className}`} />
    </div>
  )
}

export default CardStack
