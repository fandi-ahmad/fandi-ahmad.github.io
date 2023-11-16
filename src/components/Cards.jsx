import React from 'react'
import imageProfile from '../assets/images/img-profile.jpg'
import { BioDetail } from './BioDetail'

export const CardProfile = (props) => {
  return (
    <div className={`bg-gray-700 rounded-xl border border-gray-500 ${props.className}`}>
      <img src={imageProfile} alt="image" className='w-44 h-44 object-cover rounded-xl mx-auto mt-10' />
      <div className='text-3xl font-semibold text-center mt-4'>Fandi Ahmad</div>

      <div className='p-8 opacity-25'>
        <hr />
      </div>

      <div className='mx-8'>
        <BioDetail icon='fa-solid fa-envelope' title='Email' detail='fandi4160@gmail.com' />
        <BioDetail icon='fa-solid fa-location-dot' title='Location' detail='Palu, Indonesia' />
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

export const CardContent = (props) => {
  return (
    <div className={`bg-gray-700 rounded-xl border border-gray-500 ${props.className}`}>
      {props.children}
    </div>
  )
}