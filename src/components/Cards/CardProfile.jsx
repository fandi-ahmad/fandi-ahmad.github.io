import React, {useState, useEffect} from 'react'

import imageProfile from '../../assets/images/img-profile.webp'
import { Link } from 'react-router-dom'

import logoInstagram from '../../assets/logo/instagram.webp'
import logoLinkedin from '../../assets/logo/linkedin.png'
import logoGithub from '../../assets/logo/github.png'
import logoMedium from '../../assets/logo/medium.svg'
import logoGmail from '../../assets/logo/gmail.png'

const BioDetail = (props) => {
  return (
    <div className='flex flex-row items-center mb-4'>
      <div className='text-4xl text-center p-2 mr-2 w-10 flex justify-center items-center text-blue-300 rounded-md bg-gray-600 border-gray-500 border'>
        <i className={`text-xl ${props.icon}`}></i>
      </div>
      <div>
        <div className='font-light opacity-75 text-sm capitalize'>{props.title}</div>
        <div className='text-sm'>{props.detail}</div>
      </div>
    </div>
  )
}

const CardProfile = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    windowWidth >= 1024 ? setIsActive(true) : null
  }, [windowWidth]);

  return (
    <div>
      <div className={`bg-gray-700 rounded-xl border border-gray-500 mt-10 mb-4 lg:mb-10 overflow-hidden lg:ml-10 ${isActive ? 'max-h-full' : 'max-h-28'} ${props.className}`}>
        
        <div className='flex flex-row lg:flex-col justify-between items-start lg:items-center'>
          
          <img src={imageProfile} alt="image" loading='lazy' className='w-20 h-20 ml-4 md:ml-8 lg:ml-0 mt-4 lg:w-44 lg:h-44 object-cover rounded-full' />
          
          <div className='w-full pl-2 2xs:pl-4 lg:pl-0 pt-4 lg:text-center my-auto'>
            <div className='text-xl 2xs:text-2xl font-semibold'>Fandi Ahmad</div>
            <div className='text-2xs 2xs:text-xs mt-2'>
              <span className='bg-gray-600 px-4 py-1 rounded-md'>Full Stack Web Developer</span>
            </div>
          </div>

          <div onClick={() => setIsActive(!isActive)} className={`${isActive ? 'bg-blue-400 bg-opacity-20' : 'bg-gray-600 bg-opacity-50'} cursor-pointer px-3 pt-2 pb-1 text-2xl top-0 rounded-tl-none rounded-br-none rounded-xl border-l border-b border-gray-500 lg:hidden`}>
            <i className={isActive ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
          </div>
        </div>


        <div className='py-8 px-4 md:px-8 opacity-25'>
          <hr />
        </div>

        <div className='mx-4 md:mx-8'>
          <BioDetail icon='fa-regular fa-envelope' title='Email' detail='fandi4160@gmail.com' />
          <BioDetail icon='fa-solid fa-location-dot' title='location' detail='Palu, Indonesia' />
          <BioDetail icon='fa-solid fa-calendar-days' title='birthday' detail='December, 2002' />
        </div>

        <div className='px-4 md:px-8 pb-6 pt-4 opacity-25'>
          <hr />
        </div>

        <div className='text-center mb-4'>
          <Link target='_blank' to='https://www.cakeresume.com/s--odv4jKo6Lml7sFJvzFwVtw--/fandi-ahmad-097c93'>
            <button className='text-sm'>
              <span className='bg-gray-600 hover:bg-gray-500 duration-300 px-4 py-1 rounded-md'>View My Resume</span>
            </button>
          </Link>
        </div>

        <div className='flex flex-row justify-center mb-4'>
          <a href='https://instagram.com/fandi.jsx' target='_blank' className='bg-slate-200 p-0.5 rounded-md me-2'>
            <img src={logoInstagram} alt="" className='w-6 h-6 object-contain' />
          </a>
          <a href='https://github.com/fandi-ahmad' target='_blank' className='bg-slate-200 p-0.5 rounded-md me-2'>
            <img src={logoGithub} alt="" className='w-6 h-6 object-contain' />
          </a>
          <a href='https://www.linkedin.com/in/fandijsx/' target='_blank' className='bg-slate-200 p-0.5 rounded-md me-2'>
            <img src={logoLinkedin} alt="" className='w-6 h-6 object-contain' />
          </a>
          <a href="https://medium.com/@fandi-ahmad" target='_blank' className='bg-slate-200 p-0.5 rounded-md me-2'>
            <img src={logoMedium} alt="" className='w-6 h-6 object-contain' />
          </a>
          <a href='mailto:fandi4160@gmail.com' className='bg-slate-200 p-0.5 rounded-md'>
            <img src={logoGmail} alt="" className='w-6 h-6 object-contain' />
          </a>
        </div>

        
      </div>
    </div>
  )
}



export default CardProfile