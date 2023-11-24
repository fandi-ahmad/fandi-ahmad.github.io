import React from 'react'

import webPenaFull from '../../assets/images/portofolio/web-pena-full.webp'
import logoPena from '../../assets/logo/pena.webp'
import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import bootstrap from '../../assets/logo/bootstrap.webp'
import webPenaCover from '../../assets/images/portofolio/web-pena-cover.webp'

import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'


const PenaWeb = () => {
  return (
    <Template title='PENA Website 2022-2023' subtitle='Company Profile' >
      <div style={{ backgroundImage: `url(${webPenaCover})` }} className='p-8 bg-blue-950 bg-contain bg-no-repeat bg-right-bottom'>
        <div className='flex flex-row items-center'>
          <img src={logoPena} alt="PENA logo" loading='lazy' className='w-16 h-16 ' />
          <h3 className='text-5xl font-semibold ml-2'>PENA</h3>
        </div>
        <TextHead>responsive website and company profile</TextHead>

        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>
          This website creates various content such as a brief explanation of the organization, names and positions of core management, vision and mission as well as a registration form for prospective new members.
        </p>

        <p className='text-blue-300 text-lg mt-8 font-medium capitalize'>programming language I used:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
          <ImageTool src={bootstrap} />
        </div>

        <p className='text-blue-300 text-lg mt-8 font-medium capitalize'>my role:</p>
        <p className='text-sm font-light mb-8'>Frontend developer</p>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead>About Project</TextSubHead>
        <Text>PENA (Programming, Engineering and Networking Adhi Guna) PENA is an internal campus student organization that operates in the technology sector, this website was created in September 2022.</Text>
        <Text>The development of this website was carried out with the team, I acted as a frontend developer whose job was to create the user interface. while the backend is done using Laravel. An example of the user interface display on this website can be seen <a href="https://pena-web.fandijsx.repl.co/" target='_blank' className='text-blue-600 hover:underline'>via this link.</a></Text>
      </div>
      <img src={webPenaFull} alt="" className='w-full' />
    </Template>
  )
}

export default PenaWeb