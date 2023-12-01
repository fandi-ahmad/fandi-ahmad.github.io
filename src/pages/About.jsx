import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <div>
      <div className="px-4 md:px-8 mt-8 font-light text-justify text-sm">
        <p className='mb-4'>
          {t('about.p1')}
        </p>

        <p className='mb-4'>
          {t('about.p2')}
        </p>

        <p className='mb-4'>
          {t('about.p3')}
        </p>
      </div>

      <div className='px-4 md:px-8 mt-8'>
        <h2 className="text-2xl font-bold mb-4">{t('about.service')}</h2>

        {/* card */}
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='bg-gray-600 bg-opacity-50 w-full border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
            <div className='text-4xl text-blue-300'>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <div className='sm:pl-4 text-center sm:text-start'>
              <h3 className='text-lg font-semibold pb-2'>{t('about.service_head1')}</h3>
              <div className='text-sm'>{t('about.service_body1')}</div>
            </div>
          </div>

          <div className='bg-gray-600 bg-opacity-50 w-full border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
            <div className='text-4xl text-blue-300'>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <div className='sm:pl-4 text-center sm:text-start'>
              <h3 className='text-lg font-semibold pb-2'>{t('about.service_head2')}</h3>
              <div className='text-sm'>{t('about.service_body2')}</div>
            </div>
          </div>
        </div>
       

      </div>

    </div>
  )
}

export default About