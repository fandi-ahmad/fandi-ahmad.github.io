import React from 'react'
import SubMenu from './SubMenu'

const BottomNavbar = () => {
  return (
    <div className='fixed sm:hidden z-30 bottom-0 w-full bg-gray-600 bg-opacity-95 rounded-xl rounded-bl-none rounded-br-none py-4 px-8 text-white border-gray-500 border-t flex justify-center'>
      <ul className='flex flex-row font-medium text-xs'>
        <SubMenu title='About' to='/' className='mr-6 sm:mr-8' />
        <SubMenu title='Resume' to='/resume' className='mr-6 sm:mr-8' />
        <SubMenu title='Projects' to='/projects' className='mr-6 sm:mr-8' />
        <SubMenu title='Contact' to='/contact' className='mr-6 sm:mr-8' />
      </ul>
    </div>
  )
}

export default BottomNavbar