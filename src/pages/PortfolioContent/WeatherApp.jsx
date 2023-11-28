import React from 'react'
import { useTranslation } from 'react-i18next'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import bootstrapImg from '../../assets/logo/bootstrap.webp'
import viteImg from '../../assets/logo/vite.webp'
import vueImg from '../../assets/logo/vuejs.webp'
import axiosImg from '../../assets/logo/axios.webp'
import owmImg from '../../assets/logo/open-weather-map.png'
import cover from '../../assets/images/portofolio/weather-app-cover.webp'

const WeatherApp = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <Template title={t('portfolio.weather_app.title')} subtitle={t('portfolio.weather_app.detail')}  >
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '75% ' }} className='p-8 bg-blue-500 bg-contain bg-no-repeat bg-right-bottom'>
       
        <TextHead>{t('portfolio.weather_app.data.title')}</TextHead>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>{t('portfolio.weather_app.data.detail')}</p>

        <p className='text-blue-950 text-lg mt-8 font-medium capitalize'>{t('portfolio.tech')}:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={viteImg} />
          <ImageTool src={vueImg} />
          <ImageTool src={axiosImg} />
          <ImageTool src={bootstrapImg} />
          <ImageTool src={owmImg} className='rounded-md' />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-blue-500'>{t('portfolio.about')}</TextSubHead>
        <Text>{t('portfolio.weather_app.data.about_p1')}</Text>

        <TextSubHead className='bg-blue-500 mt-8'>{t('portfolio.feature')}</TextSubHead>
        <Text><strong>📌 {t('portfolio.weather_app.data.feature_head1')}</strong> {t('portfolio.weather_app.data.feature_body1')}</Text>
        <Text><strong>📌 {t('portfolio.weather_app.data.feature_head2')}</strong> {t('portfolio.weather_app.data.feature_body2')}</Text>
        <Text><strong>📌 {t('portfolio.weather_app.data.feature_head3')}</strong> {t('portfolio.weather_app.data.feature_body3')}</Text>

        <TextSubHead className='bg-blue-500 mt-8'>{t('portfolio.tech')}</TextSubHead>
        <Text><strong>📌 {t('portfolio.weather_app.data.tech_head1')}</strong> {t('portfolio.weather_app.data.tech_body1')}</Text>
        <Text><strong>📌 {t('portfolio.weather_app.data.tech_head2')}</strong> {t('portfolio.weather_app.data.tech_body2')}</Text>
        <Text><strong>📌 {t('portfolio.weather_app.data.tech_head3')}</strong> {t('portfolio.weather_app.data.tech_body3')}</Text>
        
        <TextSubHead className='bg-blue-500 mt-8'>{t('portfolio.open_weather')}</TextSubHead>
        <Text><strong>📌 {t('portfolio.weather_app.data.open_weather_head1')}</strong> {t('portfolio.weather_app.data.open_weather_body1')}</Text>
        <Text><strong>📌 {t('portfolio.weather_app.data.open_weather_head2')}</strong> {t('portfolio.weather_app.data.open_weather_body2')}</Text>
        
        <TextSubHead className='bg-blue-500 mt-8'>{t('portfolio.ux')}</TextSubHead>
        <Text>{t('portfolio.weather_app.data.ux_p1')}</Text>


        <div className='mt-8'>
          <p>
            {t('portfolio.demo_link')}
            <a className='text-blue-600 hover:underline' href="https://fandi-ahmad.github.io/weather-app/" target='_blank'>fandi-ahmad.github.io/weather-app/</a>
          </p>
        </div>
      </div>

    </Template>
  )
}

export default WeatherApp