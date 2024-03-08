import React from 'react'

import webPenaFull from '../../assets/images/portofolio/web-pena-full.webp'
import logoPena from '../../assets/logo/pena.webp'
import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import bootstrap from '../../assets/logo/bootstrap.webp'
import webPenaCover from '../../assets/images/portofolio/web-pena-cover.webp'

import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'
import { useTranslation } from 'react-i18next'


const PenaWeb = () => {
  const [t, i18n] = useTranslation('global')
  const names = 'project.pena.'
  const text = string => t(names+string)

  return (
    <Template title={text('title')} subtitle={text('detail')}  >
      <div style={{ backgroundImage: `url(${webPenaCover})` }} className='p-8 bg-blue-950 bg-contain bg-no-repeat bg-right-bottom'>
        <div className='flex flex-row items-center mb-12'>
          <img src={logoPena} alt="PENA logo" loading='lazy' className='w-16 h-16 ' />
          <h3 className='text-5xl font-semibold ml-2'>PENA</h3>
        </div>
        <TextHead>{text('data.title')}</TextHead>

        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>{text('data.detail')}</p>

        <p className='text-blue-300 text-lg mt-8 font-medium capitalize'>{t('project.programming_use')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
          <ImageTool src={bootstrap} />
        </div>

        <p className='text-blue-300 text-lg mt-8 font-medium capitalize'>{t('project.my_role')}</p>
        <p className='text-sm font-light mb-8 capitalize'>{t('project.frontend')}</p>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead>{t('project.about')}</TextSubHead>
        <Text>{text('data.about_p1')}</Text>
        <Text>
          {text('data.about_p2')}
          <a href="https://pena-web.fandijsx.repl.co/" target='_blank' className='text-blue-600 hover:underline'>{t('portfolio.pena.data.link')}</a>
        </Text>
      </div>
      <img src={webPenaFull} alt="" className='w-full' />
    </Template>
  )
}

export default PenaWeb