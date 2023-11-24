import React from 'react'
import { useGlobalState } from '../../state/state'

const SubMenu = (props) => {
  const [content, setContent] = useGlobalState('content')

  return (
    <li className='cursor-pointer relative group pb-1 capitalize' onClick={props.onClick}>
      {props.title}
      {
        content == props.title 
        ? <span className='absolute inset-x-0 bottom-0 h-1 rounded-full bg-blue-400 origin-left transform scale-x-100 transition-transform duration-500'></span>
        : <span className='absolute inset-x-0 bottom-0 h-1 rounded-full bg-blue-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400'></span>
      }
    </li>
  )
}

export default SubMenu