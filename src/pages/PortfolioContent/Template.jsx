import React from 'react'

export const Template = (props) => {
  return (
    <div className='px-0 sm:px-8 md:px-16 flex justify-center'>
      <div>
        <div className='mb-4'>
          <div className='capitalize font-semibold text-lg'>{props.title}</div>
          <div className='capitalize opacity-75 font-light'>{props.subtitle}</div>
        </div>

        {props.children}
        
      </div>
    </div>
  )
}

export const TextHead = (props) => {
  return <h1 className={`capitalize mt-12 text-3xl md:text-4xl w-full md:w-2/3 lg:w-2/5 ${props.className}`}>{props.children}</h1>
}

export const TextSubHead = (props) => {
  return <h3 className={`text-lg font-medium ${props.className ?? 'bg-blue-950'} text-white w-fit px-8 py-2 rounded-md`}>{props.children}</h3>
}

export const ImageTool = (props) => {
  return <img src={props.src} alt="tool" loading='lazy' className={`w-12 h-12 mr-4 mb-4 object-contain ${props.className}`} />
}

export const Text = (props) => {
  return <p className={`mt-4 text-justify ${props.className}`}>{props.children}</p>
}