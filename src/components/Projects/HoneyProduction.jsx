import React from 'react'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import honeyProductionFull from '../../assets/images/portofolio/honey-production-full.webp'
import honeyLogo from '../../assets/logo/honey-logo.webp'
import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import bootstrap from '../../assets/logo/bootstrap.webp'
import honeyProductionCover from '../../assets/images/portofolio/honey-production-cover.webp'
import { useTranslation } from 'react-i18next'

const HoneyProduction = () => {
  const [t, i18n] = useTranslation('global')
  const names = 'project.honey.'
  const text = string => t(names+string)
  

  return (
    <Template title={text('title')}  subtitle={text('detail')}  >
      <div style={{ backgroundImage: `url(${honeyProductionCover})` }} className='p-8 bg-yellow-600 bg-contain bg-no-repeat bg-right-bottom'>
        <div className='flex flex-row items-center mb-12'>
          <img src={honeyLogo} alt="honey" loading='lazy' className='h-12' />
        </div>
        <TextHead>{text('data.title')}</TextHead>

        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8'>{text('data.detail')}</p>

        <p className='text-orange-900 text-lg mt-8 font-medium capitalize'>{t('project.programming_use')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
          <ImageTool src={bootstrap} />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-orange-900'>{t('project.about')}</TextSubHead>
        <Text>
          {text('data.about_p1')}
          <a href="https://www.behance.net/gallery/120429709/Honey-Landing-page" target='_blank' className='text-blue-600 hover:underline'>
            {text('data.link1')}
          </a> 
          {text('data.about_p2')}
          <a href="https://honey-production.fandijsx.repl.co/" target='_blank' className='text-blue-600 hover:underline'>
            {text('data.link2')}
          </a>
        </Text>
      </div>
      <img src={honeyProductionFull} alt="" className='w-full' />
    </Template>
  )
}

export default HoneyProduction