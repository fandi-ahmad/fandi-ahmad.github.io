import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../state/state'

const LinkTo = (props) => {
  let path = location.pathname
  const [activeMenu, setActiveMenu] = useGlobalState('activeMenu')
  return (
    <li>
      <Link
        to={props.to}
        className={`cursor-pointer font-medium hover:text-blue-300 duration-200 mx-2 ${path == props.to ? 'text-blue-300' : ''}`}
        onClick={() => setActiveMenu(props.to)}
      >
        {props.title}
      </Link>
    </li>
  )
}

const BottomNavbar = () => {
  return (
    <div className='fixed sm:hidden z-30 bottom-0 w-full pb-2 text-white flex justify-center'>
      <div className='bg-gray-600 border-gray-500 border opacity-95 p-3 rounded-full'>
        <ul className='flex flex-row font-medium text-sm'>
          <LinkTo title='About' to='/' />
          <LinkTo title='Resume' to='/resume' />
          <LinkTo title='Projects' to='/projects' />
          <LinkTo title='Contact' to='/contact' />
        </ul>
      </div>
    </div>
  )
}

export default BottomNavbar