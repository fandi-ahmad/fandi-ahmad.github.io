import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../state/state'

const SubMenu = (props) => {
  let path = location.pathname
  const [ activeMenu, setActiveMenu] = useGlobalState('activeMenu')

  const classMenu = 'absolute inset-x-0 bottom-0 h-1 rounded-full bg-blue-400 origin-left transform transition-transform duration-400 '
  const classMenuActive = classMenu + 'scale-x-100'
  const classMenuNonActive = classMenu + 'scale-x-0 group-hover:scale-x-100'

  return (
    <Link to={props.to} onClick={() => setActiveMenu(props.to)}>
      <li className={`cursor-pointer relative group pb-1 capitalize ${props.className}`} onClick={props.onClick} tabIndex={props.tabIndex}>
        {props.title}
        {props.children}
        <span className={path === props.to ? classMenuActive : classMenuNonActive}></span>
      </li>
    </Link>
  )
}

export default SubMenu