import React from 'react'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import honeyProductionFull from '../../assets/images/portofolio/honey-production-full.webp'
import honeyLogo from '../../assets/logo/honey-logo.webp'
import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import bootstrap from '../../assets/logo/bootstrap.webp'
import honeyProductionCover from '../../assets/images/portofolio/honey-production-cover.webp'

const HoneyProduction = () => {
  return (
    <Template title='Honey Production' subtitle='Landing Page' >
      <div style={{ backgroundImage: `url(${honeyProductionCover})` }} className='p-8 bg-yellow-600 bg-contain bg-no-repeat bg-right-bottom'>
        <div className='flex flex-row items-center'>
          <img src={honeyLogo} alt="PENA logo" loading='lazy' className='h-12' />
        </div>
        <TextHead>responsive website and company profile</TextHead>

        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8'>
          This website is not an original project, but was created as a portfolio and takes from existing references.
        </p>

        <p className='text-orange-900 text-lg mt-8 font-medium capitalize'>programming language I used:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
          <ImageTool src={bootstrap} />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-orange-900'>About Project</TextSubHead>
        <Text>Honey Production is a website with the theme of honey production. Suitable for businesses engaged in production and sales, especially honey. for the design I took reference from <a href="https://www.behance.net/gallery/120429709/Honey-Landing-page" target='_blank' className='text-blue-600 hover:underline'>this source.</a> An example of the user interface display on this website can be seen <a href="https://honey-production.fandijsx.repl.co/" target='_blank' className='text-blue-600 hover:underline'>via this link.</a></Text>
      </div>
      <img src={honeyProductionFull} alt="" className='w-full' />
    </Template>
  )
}

export default HoneyProduction