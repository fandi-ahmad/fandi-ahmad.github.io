import React from 'react'
import { BaseTimeline, HeadListTimeline, ListTimeline } from '../components/Timeline'
import CardStack from '../components/Cards/CardStack'

// images
import figmaImg from '../assets/logo/figma.webp'
import jsImg from '../assets/logo/javascript.webp'
import tsImg from '../assets/logo/typescript.webp'
import reactImg from '../assets/logo/reactjs.webp'
import vueImg from '../assets/logo/vuejs.webp'
import tailwindImg from '../assets/logo/tailwind.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import nodeImg from '../assets/logo/nodejs.png'
import nextjs from '../assets/logo/nextjs.png'
import mu from '../assets/logo/mu.png'
import supabase from '../assets/logo/supabase.png'
import express from '../assets/logo/express-js.png'
import prisma from '../assets/logo/prisma.png'

// certificate
import jwd from '../assets/images/certificate/jwd.jpg'

const Resume = () => {
  return (
    <div>

      <div className='px-4 md:px-8 mt-8'>
        <BaseTimeline>
          <HeadListTimeline title='Education' />
          <ListTimeline title='STMIK Adhi Guna Palu' time='2020 - 2024' text='Informatics Engineering' />
          <ListTimeline title='SMKN 1 Banawa' time='2017 - 2020' text='Computer and Network Engineering' bottomLine={true} />
        </BaseTimeline>

        <BaseTimeline className='mt-4'>
          <HeadListTimeline title='Experience' icon='fa-solid fa-briefcase' />

          <ListTimeline title='UI/UX Designer' subtitle='Paerte Code' time='Sep 2023 - Feb 2024' 
            text={<>
              <p className='pb-3'>As a UI/UX Designer who focuses on creating application prototype designs for further development. By understanding user needs, I strive to create simple and effective designs. The tool I use is Figma.</p>
              <p>• Design an app prototype design for further development by understanding the user's needs.</p>
              <p>• Design an app prototype design using Figma.</p>
            </>}
          />

          <ListTimeline title='Internship - Full Stack Developer' subtitle='Balaroa Sub-District' time='Jul - Sep 2023' 
            text={<>
              <p className='pb-3'>During my internship (KKLP) at the Balaroa District Office, I created a product, namely an application for creating automatic letters, so that employees only need to enter the required data and letters can be immediately created for community service purposes.</p>
              <p>• Create a web-based app to make it easy to automate mail generation.</p>
              <p>• Designing front-end code using React Js and Tailwind CSS, and implementing APIs.</p>
              <p className='pb-3'>• Designing back-end code using Express Js, Sequelize, and MySQL as databases.</p>
              <p>Skils: React • Tailwind • Express • Sequelize • MySQL • JWT • RestFull API</p>
            </>}
          />

          <ListTimeline title='Frontend Developer' subtitle='WoVi' time='Sep 2022 - Jul 2023' 
            text={<>
              <p>• Responsible for developing user interfaces using the Vue Js framework.</p>
              <p className='pb-3'>• Implement APIs and integration of certain features.</p>
              <p>Skils: HTML • CSS • Javascript • Bootstrap • Vue • RestFull API</p>
            </>}
          />

          <ListTimeline title='Frontend Developer' subtitle='PENA (Programming Engineering & Networking Adhi Guna)' time='Sep 2022' 
            text='Skils: HTML • CSS • Javascript • Bootstrap'
            bottomLine 
          />

        </BaseTimeline>
      </div>

      <div className='px-4 md:px-8 mt-8 w-fit'>
        <h2 className="text-2xl font-bold mb-2">Supporting Certificates</h2>
        <p className='mb-4'>I have obtained several relevant certifications in the field of web development. Here are some of the certificates I have:</p>
        
        <div className='flex flex-row'>
          
          <div className='bg-gray-600 border-gray-500 border rounded-md w-fit p-4'>
            <img src={jwd} alt="certificate" className='w-64 rounded-md mx-auto' />
            <div className='mt-4 text-center'>
              <p className='text-base md:text-lg font-semibold'>Junior Web Developer Training Certificate</p>
              <div className='text-sm md:text-base'>
                <p className='text-blue-300'>KOMINFO Digitalent</p>
                <p>9 - 13 May 2023</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="px-4 md:px-8 mt-8 w-fit">
        <h2 className="text-2xl font-bold mb-2">My Tools & Skills</h2>
        <p className='mb-4'>As a Full Stack Web Developer, I have skills that cover various aspects of web development. Here are my main skills.</p>
        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          <CardStack src={jsImg} />
          <CardStack src={tsImg} />
          <CardStack src={nextjs} className='filter invert' />
          <CardStack src={reactImg} />
          <CardStack src={vueImg} />
          <CardStack src={nodeImg} />
          <CardStack src={express} className='filter invert' />
          <CardStack src={bootstrap} />
          <CardStack src={tailwindImg} />
          <CardStack src={mu} />
          <CardStack src={prisma} className='' />
          <CardStack src={supabase} />
          <CardStack src={figmaImg} />
        </div>
         
      </div>


    </div>

   
  )
}

export default Resume