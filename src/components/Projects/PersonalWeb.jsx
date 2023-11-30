import React from 'react'
import { useTranslation } from 'react-i18next'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsImg from '../../assets/logo/javascript.webp'
import tailwindImg from '../../assets/logo/tailwind.webp'

import logo from '../../assets/logo/logo-fandi.webp'
import cover from '../../assets/images/portofolio/personal-web-cover.webp'
import preview from '../../assets/images/portofolio/personal-web-preview.webp'



const PersonalWeb = () => {
  const [t, i18n] = useTranslation('global')
  const names = 'project.personal_web.'
  const text = string => t(names+string)

  return (
    <Template title={text('title')} subtitle={text('detail')}>
      <div style={{ backgroundImage: `url(${cover})` }} className='p-8 bg-gray-950 bg-contain bg-no-repeat bg-right-bottom'>

        <div className='flex flex-row items-center mb-12'>
          <img src={logo} alt="logo" loading='lazy' className='w-12 md:w-16' />
        </div>

        <TextHead>{text('data.title')}</TextHead>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>{text('data.detail')}</p>
      
        <p className='text-lg mt-8 font-medium capitalize'>{t('project.tech')}:</p>
        <div className="grid grid-cols-3 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsImg} />
          <ImageTool src={tailwindImg} />

        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-gray-900 text-white'>{t('project.about')}</TextSubHead>
        <Text>{text('data.about_p1')}</Text>
        <Text>{text('data.about_p2')}</Text>

        <div className='mt-8'>
          <p>
            {t('project.demo_link')}
            <a className='text-blue-600 hover:underline' href="https://personalweb.fandijsx.repl.co/" target='_blank'>personalweb.fandijsx.repl.co</a>
          </p>
        </div>
      </div>

      <img src={preview} className='w-full bg-gray-950' alt="" />
    </Template>
  )
}

export default PersonalWeb