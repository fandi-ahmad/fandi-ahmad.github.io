import React from 'react'

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

  return (
    <div className={`bg-gray-700 rounded-xl border border-gray-500 h-fit py-10 ${props.className}`}>
      <img src={imageProfile} alt="image" className='w-44 h-44 object-cover rounded-xl mx-auto' />
      <div className='text-3xl font-semibold text-center mt-4'>Fandi Ahmad</div>

      <div className='p-8 opacity-25'>
        <hr />
      </div>

      <div className='mx-8'>
        <BioDetail icon='mail' title='Email' detail='fandi4160@gmail.com' />
        <BioDetail icon='location_on' title='Location' detail='Palu, Indonesia' />
      </div>

      <div className='flex flex-row gap-4 justify-center mt-8'>
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
  )
}

export default CardProfile