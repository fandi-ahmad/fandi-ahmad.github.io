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

const Resume = () => {
  return (
    <div>

      <div className='px-4 md:px-8 mt-8'>
        <BaseTimeline>
          <HeadListTimeline title='Education' />
          <ListTimeline title='STMIK Adhi Guna Palu' time='2020 - 2024' text='STMIK Adhi Guna Palu' />
          <ListTimeline title='SMKN 1 Banawa' time='2017 - 2020' text='SMKN 1 Banawa' bottomLine={true} />
        </BaseTimeline>

        <BaseTimeline className='mt-4'>
          <HeadListTimeline title='Experience' icon='fa-solid fa-briefcase' />
          <ListTimeline title='UI/UX Designer' subtitle='Paerte Code' time='Sep 2023 - Feb 2024' 
            text='As a UI/UX Designer who focuses on creating application prototype designs for further development. By understanding user needs, I strive to create simple and effective designs. The tool I use is Figma.'
          />
          <ListTimeline title='Internship - Full Stack Developer' subtitle='Balaroa Sub-District' time='Jul - Sep 2023' 
            text={<>
              <p className='pb-2'>During my internship (KKLP) at the Balaroa District Office, I created a product, namely an application for creating automatic letters, so that employees only need to enter the required data and letters can be immediately created for community service purposes.</p>
              <p>• Create a web-based app to make it easy to automate mail generation.</p>
              <p>• Designing front-end code using React Js and Tailwind CSS, and implementing APIs.</p>
              <p className='pb-2'>• Designing back-end code using Express Js, Sequelize, and MySQL as databases.</p>
              <p>• Skils: React • Tailwind • Express • Sequelize • MYSQL • JWT • RestFull API</p>
            </>}
          />
          <ListTimeline title='Frontend Developer' subtitle='WoVi' time='Sep 2022 - Jul 2023' 
            text={<>
              <p>• Responsible for developing user interfaces using the Vue Js framework.</p>
              <p>• Implement APIs and integration of certain features.</p>
              <p>• Skils: HTML • CSS • Javascript • Bootstrap • Vue • RestFull API</p>
            </>}
          />
          <ListTimeline title='Frontend Developer' subtitle='PENA (Programming Engineering & Networking Adhi Guna)' time='Sep 2022' 
            text='Skils: HTML • CSS • Javascript • Bootstrap'
            bottomLine={true} 
          />
        </BaseTimeline>
      </div>

      <div className="px-4 md:px-8 mt-8 w-fit">
        <h2 className="text-2xl font-bold mb-4">My Tools & Skills</h2>
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