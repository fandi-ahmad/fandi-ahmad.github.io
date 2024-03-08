import React from 'react'

const ListTimeline = (props) => {
  const bottomLine = props.bottomLine || false
  return (
    <li className='ml-4'>
      <hr className='bg-gray-500' />
      <div className="timeline-middle">
        <i className="fa-solid fa-circle-dot text-sm text-blue-300"></i>
      </div>
      <div className="timeline-end ml-8 pb-4">
        <div className="text-lg font-semibold">{props.title}</div>
        <div className='text-blue-300'>{props.subtitle}</div>
        <div className='text-blue-300 capitalize'>{props.time}</div>
        <div className='text-sm text-justify'>{props.text}</div>
      </div>
      { !bottomLine ? <hr className='bg-gray-500' /> : null }
    </li>
  )
}

export default ListTimeline