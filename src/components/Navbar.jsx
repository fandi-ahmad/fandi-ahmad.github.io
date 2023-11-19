import React from 'react'
import { useGlobalState } from '../state/state'

const Navbar = () => {
  const [content, setContent] = useGlobalState('content')

  const SubMenu = (props) => {
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


  return (
    <>
      <div className='flex flex-row w-full justify-between'>

        {/* title */}
        <div className='px-8 flex items-end'>
          <div className='text-3xl font-bold'>About Me</div>
        </div>
        
        {/* list menu */}
        <div className='bg-gray-600 bg-opacity-50 rounded-tl-none rounded-br-none rounded-xl py-5 px-8 border-l border-b border-gray-500'>
          <ul className='flex flex-row gap-8 font-medium'>
            <SubMenu title='about' onClick={() => setContent('about')} />
            {/* <SubMenu title='resume' onClick={() => setContent('resume')} /> */}
            <SubMenu title='portofolio' onClick={() => setContent('portofolio')} />
            <SubMenu title='contact' onClick={() => setContent('contact')} />
          </ul>
        </div>

      </div>

      <div className='relative group pb-2 w-12 mx-8 mt-4'>
        <span className='absolute inset-x-0 bottom-0 h-1.5 rounded-full bg-blue-400 origin-left transform scale-x-100 transition-transform duration-500'></span>
      </div>
    </>
  )
}

export default Navbar