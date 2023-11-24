import React from 'react'

const HeadListTimeline = (props) => {
  return (
    <li className=''>
      <div className="timeline-middle">
        <div className='text-4xl text-center px-2.5 text-blue-300 rounded-md bg-gray-600 border-gray-500 border'>
          <span className="material-symbols-outlined">{props.icon || 'auto_stories'}</span>
        </div>
      </div>
      <div className="timeline-end pt-2 ml-4">
        <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
      </div>
      <hr className='bg-gray-500' />
    </li>
  )
}

export default HeadListTimeline