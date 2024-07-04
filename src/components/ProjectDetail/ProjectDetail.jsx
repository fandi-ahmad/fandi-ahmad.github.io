import React from 'react'

const ProjectDetail = (props) => {
  return (
    <div className='px-0 sm:px-6 md:px-12 lg:px-16 flex justify-center'>
      <div>
        <div className='my-4 px-6 sm:px-0'>
          <div className='capitalize font-semibold text-lg'>{props.title}</div>
          <div className='capitalize opacity-75 font-light'>{props.detail}</div>
        </div>
        <img loading='lazy' src={props.src} alt="project detail" className='rounded-lg rounded-bl-none rounded-br-none md:rounded-bl-lg md:rounded-br-lg' />
      </div>
    </div>
  )
}

export default ProjectDetail
