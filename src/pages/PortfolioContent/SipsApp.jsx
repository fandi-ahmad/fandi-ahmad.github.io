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

  return (
    <Template title={t('portfolio.sips_app.title')} subtitle={t('portfolio.sips_app.detail')}  >
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '70%' }} className='p-8 bg-gray-950 bg-contain bg-no-repeat bg-right-bottom'>

        <div className='flex flex-row items-center mb-12'>
          <img src={kotaPaluImg} alt="PENA logo" loading='lazy' className='w-12 md:w-16' />
          <h3 className='text-3xl md:text-4xl font-medium ml-4'>Kelurahan Balaroa</h3>
        </div>

        <h1 className='capitalize text-3xl md:text-4xl w-full lg:w-2/4'>{t('portfolio.sips_app.data.title')}</h1>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>{t('portfolio.sips_app.data.detail')}</p>
      
        <p className='text-lg mt-8 font-medium capitalize'>{t('portfolio.tech')}:</p>
        <div className="grid grid-cols-3 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={viteImg} />
          <ImageTool src={reactImg} />
          <ImageTool src={axiosImg} />
          <ImageTool src={tailwindImg} />
          <ImageTool src={expressImg} className='rounded-md'  />
          <ImageTool src={jwtImg} />
          <ImageTool src={sweetalertImg} />
          <ImageTool src={daisyuiImg} />
          <ImageTool src={sequelizeImg} />
          <img src={mysqlImg} alt="" className='w-full h-10 mr-4 mb-4 object-contain' />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-gray-900 text-white'>{t('portfolio.about')}</TextSubHead>
        <Text>{t('portfolio.sips_app.data.about_p1')}</Text>
        <Text>{t('portfolio.sips_app.data.about_p2')}</Text>

        <TextSubHead className='bg-gray-900 text-white mt-8'>{t('portfolio.feature')}</TextSubHead>
        <Text><strong>📌 {t('portfolio.sips_app.data.feature_head1')}</strong> {t('portfolio.sips_app.data.feature_body1')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.feature_head2')}</strong> {t('portfolio.sips_app.data.feature_body2')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.feature_head3')}</strong> {t('portfolio.sips_app.data.feature_body3')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.feature_head4')}</strong> {t('portfolio.sips_app.data.feature_body4')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.feature_head5')}</strong> {t('portfolio.sips_app.data.feature_body5')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.feature_head6')}</strong> {t('portfolio.sips_app.data.feature_body6')}</Text>

        <TextSubHead className='bg-gray-900 text-white mt-8'>{t('portfolio.tech')}</TextSubHead>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head1')}</strong> {t('portfolio.sips_app.data.tech_body1')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head2')}</strong> {t('portfolio.sips_app.data.tech_body2')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head3')}</strong> {t('portfolio.sips_app.data.tech_body3')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head4')}</strong> {t('portfolio.sips_app.data.tech_body4')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head5')}</strong> {t('portfolio.sips_app.data.tech_body5')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head6')}</strong> {t('portfolio.sips_app.data.tech_body6')}</Text>
        <Text><strong>📌 {t('portfolio.sips_app.data.tech_head7')}</strong> {t('portfolio.sips_app.data.tech_body7')}</Text>
        
        <Text className='pt-6'>{t('portfolio.sips_app.data.about_p3')}</Text>
      </div>

      <img src={preview} className='w-full bg-gray-950' alt="" />
    </Template>
  )
}

export default SipsApp