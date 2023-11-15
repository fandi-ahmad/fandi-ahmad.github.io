import React from 'react'
import imageProfile from '../assets/images/img-profile.jpg'
import { BioDetail } from './BioDetail'

export const CardProfile = (props) => {
  return (
    <div className={`bg-gray-700 rounded-xl ${props.className}`}>
      <img src={imageProfile} alt="image" className='w-44 h-44 object-cover rounded-xl mx-auto mt-10' />
      <div className='text-3xl font-semibold text-center mt-4'>Fandi Ahmad</div>

      <div className='mt-4 mx-4'>
        <BioDetail icon='fa-solid fa-envelope' title='Email' detail='fandi4160@gmail.com' />
        <BioDetail icon='fa-solid fa-location-dot' title='Location' detail='Palu, Indonesia' />
      </div>


    </div>
  )
}

export const CardContent = (props) => {
  return (
    <div className={`bg-gray-700 rounded-xl ${props.className}`}>
      {props.children}
    </div>
  )
}