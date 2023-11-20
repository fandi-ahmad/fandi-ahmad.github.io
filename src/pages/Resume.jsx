import React from 'react'
import { BaseTimeline, HeadListTimeline, ListTimeline } from '../components/Timeline'

// images
import cssImg from '../assets/logo/css.png'
import htmlImg from '../assets/logo/html.png'
import figmaImg from '../assets/logo/figma.png'
import jsmg from '../assets/logo/javascript.png'
import reactImg from '../assets/logo/reactjs.png'
import vueImg from '../assets/logo/vuejs.png'
import tailwindImg from '../assets/logo/tailwind.png'
import bootstrap from '../assets/logo/bootstrap.png'
import nodeImg from '../assets/logo/nodejs.png'
import expressJs from '../assets/logo/express.png'

const Resume = () => {
  return (
    <div>

      <div className='px-4 md:px-8 mt-8'>
        <BaseTimeline>
          <HeadListTimeline title='Education' />
          <ListTimeline title='STMIK Adhi Guna Palu' time='2020 - Now' text='Informatics Engineering' />
          <ListTimeline title='SMKN 1 Banawa' time='2017 - 2020' text='Computer and Network Engineering' bottomLine={true} />
        </BaseTimeline>

        <BaseTimeline className='mt-4'>
          <HeadListTimeline title='Experience' icon='business_center' />
          <ListTimeline title='UI/UX Designer' subtitle='Paerte Code' time='Sep 2023 - Now' 
            text='As a UI/UX Designer who focuses on creating application prototype designs for further development. By understanding user needs, I strive to create simple and effective designs. The tool I use is Figma.'
          />
          <ListTimeline title='Full Stack Developer' subtitle='Balaroa Sub-District' time='Jul - Sep 2023' 
            text='Create an application to create letters so that employees only need to enter the required data and letters can be created immediately. using React and Express.'
          />
          <ListTimeline title='Frontend Developer' subtitle='WoVi' time='Sep 2022 - Jul 2023' 
            text='Skils: HTML • CSS • Javascript • Bootstrap • Vue • Restfull API'
          />
          <ListTimeline title='Frontend Developer' subtitle='PENA (Programming Engineering & Networking Adhi Guna)' time='Sep 2022' 
            text='Skils: HTML • CSS • Javascript • Bootstrap'
            bottomLine={true} 
          />
        </BaseTimeline>
      </div>

      <div className="px-4 md:px-8 mt-8 ">
        <h2 className="text-2xl font-bold mb-4">My Tools & Skills</h2>
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