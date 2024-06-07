import React from 'react'

const HeadListTimeline = (props) => {
  return (
    <li className=''>
      <div className="timeline-middle">
        <div style={{ width: '46px'}} className='min-h-fit px-2 pt-2 pb-1 text-center text-blue-300 rounded-md bg-gray-600 border-gray-500 border'>
          <i className={`p-0 m-0 leading-none text-2xl ${props.icon || 'fa-solid fa-book-open'}`}></i>
        </div>
      </div>
      <div className="timeline-end pt-2 ml-4">
        <h2 className="text-2xl font-bold mb-4 capitalize">{props.title}</h2>
      </div>
      <hr className='bg-gray-500' />
    </li>
  )
}

export default HeadListTimeline