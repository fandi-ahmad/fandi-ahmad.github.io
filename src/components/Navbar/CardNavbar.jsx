import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../../state/state'
import MenuNavbar from './MenuNavbar'

const CardNavbar = () => {
  const [titleHead, setTitleHead] = useState('')
  const [activeMenu, setActiveMenu] = useGlobalState('activeMenu')
  let path = location.pathname

  const setActiveTitleHead = () => {
    activeMenu === '/' ? setTitleHead('about me') : null
    activeMenu === '/resume' ? setTitleHead('resume') : null
    activeMenu === '/projects' ? setTitleHead('projects') : null
    activeMenu === '/contact' ? setTitleHead('contact') : null
  }

  useEffect(() => {
    setActiveMenu(path)
    setActiveTitleHead()
  }, [activeMenu])


  return (
    <>
      <div className='flex flex-row w-full justify-between'>

        {/* title */}
        <div className='px-4 md:px-8 flex items-end pt-5'>
          <div className='text-3xl font-bold capitalize'>
            {titleHead}
          </div>
        </div>
        
        {/* list menu */}
        <div className='bg-gray-600 bg-opacity-50 rounded-tl-none rounded-br-none rounded-xl py-5 px-8 border-l border-b border-gray-500 hidden sm:block'>
          <ul className='flex flex-row font-medium'>
            <MenuNavbar title={'about'} to='/' className='mr-8' />
            <MenuNavbar title={'resume'} to='/resume' className='mr-8' />
            <MenuNavbar title={'projects'} to='/projects' className='mr-8' />
            <MenuNavbar title={'contact'} to='/contact' />
          </ul>
        </div>
      </div>

      {/* line text */}
      <div className='relative group pb-2 w-12 mx-4 md:mx-8 mt-4'>
        <span className='absolute inset-x-0 bottom-0 h-1.5 rounded-full bg-blue-400 origin-left transform scale-x-100 transition-transform duration-500'></span>
      </div>
    </>
  )
}

export default CardNavbar