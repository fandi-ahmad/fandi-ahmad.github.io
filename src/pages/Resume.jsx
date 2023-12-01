import React from 'react'
import { useTranslation } from 'react-i18next'
import { BaseTimeline, HeadListTimeline, ListTimeline } from '../components/Timeline'

// images
import cssImg from '../assets/logo/css.webp'
import htmlImg from '../assets/logo/html.webp'
import figmaImg from '../assets/logo/figma.webp'
import jsmg from '../assets/logo/javascript.webp'
import reactImg from '../assets/logo/reactjs.webp'
import vueImg from '../assets/logo/vuejs.webp'
import tailwindImg from '../assets/logo/tailwind.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import nodeImg from '../assets/logo/nodejs.webp'
import expressJs from '../assets/logo/express.webp'

const Resume = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <div>

      <div className='px-4 md:px-8 mt-8'>
        <BaseTimeline>
          <HeadListTimeline title={t('resume.edu.head')} />
          <ListTimeline title='STMIK Adhi Guna Palu' time={`2020 - ${t('resume.now')}`} text={t('resume.edu.stmik')} />
          <ListTimeline title='SMKN 1 Banawa' time='2017 - 2020' text={t('resume.edu.smkn')} bottomLine={true} />
        </BaseTimeline>

        <BaseTimeline className='mt-4'>
          <HeadListTimeline title={t('resume.exp.head')} icon='business_center' />
          <ListTimeline title='UI/UX Designer' subtitle='Paerte Code' time={`Sep 2023 - ${t('resume.now')}`} 
            text={t('resume.exp.paerte_code')}
          />
          <ListTimeline title='Internship - Full Stack Developer' subtitle={t('resume.exp.balaroa_head')} time='Jul - Sep 2023' 
            text={<>{t('resume.exp.balaroa')}<br/>Skils: React • Tailwind • Express • Sequelize • MYSQL • JWT • RestFull API </>}
          />
          <ListTimeline title='Frontend Developer' subtitle='WoVi' time='Sep 2022 - Jul 2023' 
            text='Skils: HTML • CSS • Javascript • Bootstrap • Vue • RestFull API'
          />
          <ListTimeline title='Frontend Developer' subtitle='PENA (Programming Engineering & Networking Adhi Guna)' time='Sep 2022' 
            text='Skils: HTML • CSS • Javascript • Bootstrap'
            bottomLine={true} 
          />
        </BaseTimeline>
      </div>

      <div className="px-4 md:px-8 mt-8 ">
        <h2 className="text-2xl font-bold mb-4">{t('resume.tools')}</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
          <img src={htmlImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={cssImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={jsmg} alt="" loading='lazy' className="w-12 h-12 object-contain rounded-md" />
          <img src={bootstrap} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={tailwindImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={reactImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={vueImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={nodeImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={expressJs} alt="" loading='lazy' className="w-12 h-12 object-contain rounded-md" />
          <img src={figmaImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
        </div>
      </div>

    </div>

   
  )
}

export default Resume