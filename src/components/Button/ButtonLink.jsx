import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = (props) => {
  return (
    <Link to={props.to} target='_blank'>
      <button onClick={props.onClick} className={`bg-gray-500 hover:bg-gray-400 duration-300 px-3 py-1 rounded-md ${props.className}`}>
        {props.children}
      </button>
    </Link>
  )
}

export default ButtonLink
