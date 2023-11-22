import React from 'react'

import webPenaFull from '../../assets/images/portofolio/web-pena-full.webp'
import logoPena from '../../assets/logo/pena.webp'
import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import bootstrap from '../../assets/logo/bootstrap.webp'

const PenaWeb = () => {
  return (
    <div className='px-0 sm:px-8 md:px-16 flex justify-center'>
      <div>
        <div className='mb-4'>
          <div className='capitalize font-semibold text-lg'>PENA Website 2022-2023</div>
          <div className='capitalize opacity-75 font-light'>Company Profile</div>
        </div>

        <div className='bg-webPenaCover p-8 bg-blue-950 bg-contain bg-no-repeat bg-right-bottom'>
          <div className='flex flex-row items-center'>
            <img src={logoPena} alt="PENA logo" className='w-16 h-16' />
            <h3 className='text-5xl font-semibold ml-2'>PENA</h3>
          </div>
          <h1 className='capitalize mt-12 text-3xl md:text-4xl w-full md:w-2/3 lg:w-2/5 '>responsive website and company profile</h1>

          <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>
            This website creates various content such as a brief explanation of the organization, names and positions of core management, vision and mission as well as a registration form for prospective new members.
          </p>

          <p className='text-blue-300 text-lg mt-8 font-medium capitalize'>programming language I used:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
            <img src={htmlImg} alt="" loading='lazy' className="w-12 h-12 mr-4 mb-4 object-contain" />
            <img src={cssImg} alt="" loading='lazy' className="w-12 h-12 mr-4 mb-4 object-contain" />
            <img src={jsmg} alt="" loading='lazy' className="w-12 h-12 mr-4 mb-4 object-contain rounded-md" />
            <img src={bootstrap} alt="" loading='lazy' className="w-12 h-12 mb-4 object-contain" />
          </div>

          <p className='text-blue-300 text-lg mt-8 font-medium capitalize'>my role:</p>
          <p className='text-sm font-light mb-8'>Frontend developer</p>

        </div>

        <div className='text-gray-800 bg-gray-300 p-8'>
          <h3 className='text-lg font-medium bg-blue-950 text-white w-fit px-8 py-2 rounded-md'>About Project</h3>

          <p className='mt-4 text-justify'>PENA (Programming, Engineering and Networking Adhi Guna) PENA is an internal campus student organization that operates in the technology sector, this website was created in September 2022.</p>
          <p className='mt-4 text-justify'>The development of this website was carried out with the team, I acted as a frontend developer whose job was to create the user interface. while the backend is done using Laravel. An example of the user interface display on this website can be seen <a href="https://pena-web.fandijsx.repl.co/" target='_blank' className='text-blue-600 hover:underline'>via this link.</a></p>
          
        </div>
        <img src={webPenaFull} alt="" className='w-full' />
      </div>
    </div>
  )
}

export default PenaWeb