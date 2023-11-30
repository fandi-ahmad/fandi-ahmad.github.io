import React from 'react'
import { useTranslation } from 'react-i18next'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import viteImg from '../../assets/logo/vite.webp'
import reactImg from '../../assets/logo/reactjs.webp'
import expressImg from '../../assets/logo/express.webp'
import axiosImg from '../../assets/logo/axios.webp'
import tailwindImg from '../../assets/logo/tailwind.webp'
import sweetalertImg from '../../assets/logo/sweetalert.svg'
import jwtImg from '../../assets/logo/jwt.svg'
import daisyuiImg from '../../assets/logo/daisyui.png'
import sequelizeImg from '../../assets/logo/sequelize.webp'
import mysqlImg from '../../assets/logo/mysql.png'

import kotaPaluImg from '../../assets/logo/kota_palu.webp'
import cover from '../../assets/images/portofolio/sips-app-cover.webp'
import preview from '../../assets/images/portofolio/sips-app-preview.webp'


const SipsApp = () => {
  const [t, i18n] = useTranslation('global')
  const names = 'project.sips_app.'
  const text = string => t(names+string)


  return (
    <Template title={text('title')} subtitle={text('detail')}>
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '70%' }} className='p-8 bg-gray-950 bg-contain bg-no-repeat bg-right-bottom'>

        <div className='flex flex-row items-center mb-12'>
          <img src={kotaPaluImg} alt="logo" loading='lazy' className='w-12 md:w-16' />
          <h3 className='text-3xl md:text-4xl font-medium ml-4'>Kelurahan Balaroa</h3>
        </div>

        <h1 className='capitalize text-3xl md:text-4xl w-full lg:w-2/4'>{text('data.title')}</h1>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>{text('data.detail')}</p>
      
        <p className='text-lg mt-8 font-medium capitalize'>{t('project.tech')}:</p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-fit mt-4">
          <ImageTool src={viteImg} />
          <ImageTool src={reactImg} />
          <ImageTool src={axiosImg} />
          <ImageTool src={tailwindImg} />
          <ImageTool src={jwtImg} />
          <ImageTool src={expressImg} />
          <ImageTool src={sweetalertImg} />
          <ImageTool src={daisyuiImg} />
          <ImageTool src={sequelizeImg} />
          {/* <ImageTool src={mysqlImg} /> */}
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-gray-900 text-white'>{t('project.about')}</TextSubHead>
        <Text>{text('data.about_p1')}</Text>
        <Text>{text('data.about_p2')}</Text>

        <TextSubHead className='bg-gray-900 text-white mt-8'>{t('project.feature')}</TextSubHead>
        <Text><strong>📌 {text('data.feature_head1')}</strong> {text('data.feature_body1')}</Text>
        <Text><strong>📌 {text('data.feature_head2')}</strong> {text('data.feature_body2')}</Text>
        <Text><strong>📌 {text('data.feature_head3')}</strong> {text('data.feature_body3')}</Text>
        <Text><strong>📌 {text('data.feature_head4')}</strong> {text('data.feature_body4')}</Text>
        <Text><strong>📌 {text('data.feature_head5')}</strong> {text('data.feature_body5')}</Text>
        <Text><strong>📌 {text('data.feature_head6')}</strong> {text('data.feature_body6')}</Text>

        <TextSubHead className='bg-gray-900 text-white mt-8'>{t('project.tech')}</TextSubHead>
        <Text><strong>📌 {text('data.tech_head1')}</strong> {text('data.tech_body1')}</Text>
        <Text><strong>📌 {text('data.tech_head2')}</strong> {text('data.tech_body2')}</Text>
        <Text><strong>📌 {text('data.tech_head3')}</strong> {text('data.tech_body3')}</Text>
        <Text><strong>📌 {text('data.tech_head4')}</strong> {text('data.tech_body4')}</Text>
        <Text><strong>📌 {text('data.tech_head5')}</strong> {text('data.tech_body5')}</Text>
        <Text><strong>📌 {text('data.tech_head6')}</strong> {text('data.tech_body6')}</Text>
        <Text><strong>📌 {text('data.tech_head7')}</strong> {text('data.tech_body7')}</Text>
        
        <Text className='pt-6'>{text('data.about_p3')}</Text>
      </div>

      <img src={preview} className='w-full bg-gray-950' alt="" />
    </Template>
  )
}

export default SipsApp