import React from 'react'

const CardCertificate = (props) => {
  return (
    <div className='bg-gray-600 border-gray-500 border rounded-md p-4 w-full'>
      <img src={props.src} alt="certificate" className='w-64 rounded-md mx-auto' />
      <div className='mt-4 text-center'>
        <p className='text-base md:text-lg font-semibold'>{props.title}</p>
        <div className='text-sm md:text-base'>
          <p className='text-blue-300'>{props.company}</p>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  )
}

export default CardCertificate
