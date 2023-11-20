import React from 'react'
import { useGlobalState } from '../../state/state'
import SubMenu from './Submenu'

const CardNavbar = () => {
  const [content, setContent] = useGlobalState('content')

  return (
    <>
      <div className='flex flex-row w-full justify-between'>

        {/* title */}
        <div className='px-4 md:px-8 flex items-end pt-5'>
          <div className='text-3xl font-bold capitalize'>
            { content === 'about' ? content + ' me' : content }
          </div>
        </div>
        
        {/* list menu */}
        <div className='bg-gray-600 bg-opacity-50 rounded-tl-none rounded-br-none rounded-xl py-5 px-8 border-l border-b border-gray-500 hidden sm:block'>
          <ul className='flex flex-row gap-8 font-medium'>
            <SubMenu title='about' onClick={() => setContent('about')} />
            <SubMenu title='resume' onClick={() => setContent('resume')} />
            <SubMenu title='portfolio' onClick={() => setContent('portfolio')} />
            <SubMenu title='contact' onClick={() => setContent('contact')} />
          </ul>
        </div>

      </div>

      <div className='relative group pb-2 w-12 mx-4 md:mx-8 mt-4'>
        <span className='absolute inset-x-0 bottom-0 h-1.5 rounded-full bg-blue-400 origin-left transform scale-x-100 transition-transform duration-500'></span>
      </div>
    </>
  )
}

export default CardNavbar