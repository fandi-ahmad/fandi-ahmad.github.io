import React from 'react'

export const Template = (props) => {
  return (
    <div className='px-0 sm:px-6 md:px-12 lg:px-16 flex justify-center'>
      <div>
        <div className='my-4 px-6 sm:px-0'>
          <div className='capitalize font-semibold text-lg'>{props.title}</div>
          <div className='capitalize opacity-75 font-light'>{props.subtitle}</div>
        </div>

        {props.children}
        
      </div>
    </div>
  )
}

export const TextHead = (props) => {
  return <h1 className={`capitalize text-3xl md:text-4xl w-full md:w-2/3 lg:w-2/5 ${props.className}`}>{props.children}</h1>
}

export const TextSubHead = (props) => {
  return <h3 className={`sm:text-lg font-medium mb-4 ${props.className ?? 'bg-blue-950'} text-white w-fit px-8 py-2 rounded-md`}>{props.children}</h3>
}

export const ImageTool = (props) => {
  return <img src={props.src} alt="tool" loading='lazy' className={`w-full h-8 sm:h-10 md:h-12 mr-4 mb-4 object-contain ${props.className}`} />
}

export const Text = (props) => {
  return <p className={`mt-2 text-justify text-sm sm:text-base ${props.className}`}>{props.children}</p>
}