import React from 'react'
import { useTranslation } from 'react-i18next'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import cover from '../../assets/images/portofolio/todolist-app-cover.webp'
import imgPreview from '../../assets/images/portofolio/todolist-app.webp'

const Todolist = () => {
  const [t, i18n] = useTranslation('global')
  const names = 'project.todolist.'
  const text = string => t(names+string)

  return (
    <Template title={text('title')} subtitle={text('detail')}  >
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '75% ' }} className='p-8 bg-blue-500 bg-contain bg-no-repeat bg-right-bottom'>
       
        <TextHead>{text('data.title')}</TextHead>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>{text('data.detail')}</p>

        <p className='text-blue-950 text-lg mt-8 font-medium capitalize'>{t('project.programming_use')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-blue-500'>{t('project.about')}</TextSubHead>
        <Text>{text('data.about_p1')}</Text>

        <TextSubHead className='bg-blue-500 mt-8'>{t('project.feature')}</TextSubHead>
        <Text><strong>📌 {text('data.feature_head1')}</strong> {text('data.feature_body1')}</Text>
        <Text><strong>📌 {text('data.feature_head2')}</strong> {text('data.feature_body2')}</Text>
        <Text><strong>📌 {text('data.feature_head3')}</strong> {text('data.feature_body3')}</Text>

        <TextSubHead className='bg-blue-500 mt-8'>{t('project.tech')}</TextSubHead>
        <Text><strong>📌 {text('data.tech_head1')}</strong> {text('data.tech_body1')}</Text>
        <Text><strong>📌 {text('data.tech_head2')}</strong> {text('data.tech_body2')}</Text>
        <Text><strong>📌 {text('data.tech_head3')}</strong> {text('data.tech_body3')}</Text>
        
        <div className='mt-8'>
          <p>
            {t('project.demo_link')}
            <a className='text-blue-600 hover:underline' href="https://todolist.fandijsx.repl.co/" target='_blank'>todolist.fandijsx.repl.co</a>
          </p>
        </div>
      </div>

    </Template>
  )
}

export default Todolist