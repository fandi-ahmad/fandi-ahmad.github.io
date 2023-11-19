import React, {useState, useEffect} from 'react'

import imageProfile from '../../assets/images/img-profile.jpg'

const BioDetail = (props) => {
  return (
    <div className='flex flex-row gap-2 items-center mb-2'>
      <div className='text-4xl text-center px-2  rounded-md bg-gray-600 border-gray-500 border'>
        <span className="material-symbols-outlined p-0 m-0">{props.icon}</span>
      </div>
      <div>
        <div className='font-light opacity-75 text-sm'>{props.title}</div>
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
    <div className=''>
      <div className={`bg-gray-700 rounded-xl border border-gray-500 mt-10 mb-4 overflow-hidden transition-all ease-in-out duration-300 lg:ml-10 ${isActive ? 'max-h-full' : 'max-h-28'} ${props.className}`}>
        
        <div className='flex flex-row lg:flex-col justify-between items-start lg:items-center'>
          
          <img src={imageProfile} alt="image" loading='lazy' className='w-20 h-20 ml-8 lg:ml-0 mt-4 lg:w-44 lg:h-44 object-cover rounded-full' />
          
          <div className='w-full pl-4 lg:pl-0 lg:pt-4 lg:text-center my-auto'>
            <div className='text-2xl font-semibold'>Fandi Ahmad</div>
            <div className='text-xs mt-2'>
              <span className='bg-gray-600 px-4 py-1 rounded-md'>Full Stack Developer</span>
            </div>
          </div>

          <div onClick={() => setIsActive(!isActive)} className='bg-gray-600 cursor-pointer px-2 text-4xl bg-opacity-50 top-0 rounded-tl-none rounded-br-none rounded-xl border-l border-b border-gray-500 lg:hidden'>
            <span className="material-symbols-outlined">
              {isActive ? 'expand_less' : 'expand_more'}
            </span>
          </div>
        </div>


        <div className='p-8 opacity-25'>
          <hr />
        </div>

        <div className='mx-8'>
          <BioDetail icon='mail' title='Email' detail='fandi4160@gmail.com' />
          <BioDetail icon='location_on' title='Location' detail='Palu, Indonesia' />
        </div>

        <div className='p-8 opacity-25'>
          <hr />
        </div>

        <div className='flex flex-row gap-4 justify-center mb-4'>
          <a href='https://github.com/fandi-ahmad' target='_blank' className='text-2xl'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href='https://www.linkedin.com/in/fandijsx/' target='_blank' className='text-2xl'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href='https://instagram.com/fandi.jsx' target='_blank' className='text-2xl'>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        
      </div>
    </div>
  )
}



export default CardProfile