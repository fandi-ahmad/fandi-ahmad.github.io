import React from 'react'

export const BioDetail = (props) => {
  return (
    <div className='flex flex-row gap-2 items-center mb-2'>
      <div className='text-3xl w-10 text-center'><i className={props.icon}></i></div>
      <div>
        <div className='font-thin text-sm'>{props.title}</div>
        <div className=''>{props.detail}</div>
      </div>
    </div>
  )
}
