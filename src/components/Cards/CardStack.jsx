import React from 'react'

const CardStack = (props) => {
  return (
    <div className='px-3 py-3 sm:py-2 lg:py-3 text-center text-blue-300 rounded-md bg-gray-600 border-gray-500 border tooltip tooltip-top flex justify-center items-center' data-tip={props.name}>
      <img src={props.src} alt="" loading='lazy' className={`w-14 m-auto h-auto  object-contain ${props.className}`} />
    </div>
  )
}

export default CardStack
