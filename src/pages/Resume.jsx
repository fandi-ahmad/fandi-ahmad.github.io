import React from 'react'
import { BaseTimeline, HeadListTimeline, ListTimeline, ListPoint } from '../components/Timeline'
import { CardStack, CardCertificate } from '../components/Cards'

// images
import figmaImg from '../assets/logo/figma.webp'
import jsImg from '../assets/logo/javascript.webp'
import tsImg from '../assets/logo/typescript.webp'
import reactImg from '../assets/logo/react_js.webp'
import vueImg from '../assets/logo/vue_js.webp'
import tailwindImg from '../assets/logo/tailwind_CSS.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import nodeImg from '../assets/logo/nodejs.webp'
import nextjs from '../assets/logo/next_js.webp'
import mu from '../assets/logo/material_UI.webp'
import supabase from '../assets/logo/supabase.png'
import express from '../assets/logo/express_js.webp'
import prisma from '../assets/logo/prisma.webp'
import mysqlImg from '../assets/logo/mysql-icon.png'
import gitImg from '../assets/logo/git.webp'

// certificate
import jwd from '../assets/images/certificate/jwd.webp'
import uiuxRakamin from '../assets/images/certificate/uiux-rakamin.webp'
import pena from '../assets/images/certificate/pena.webp'

const Resume = () => {
  return (
    <div>

      <div className='px-4 md:px-8 mt-8'>
        
        {/* experience */}
        <BaseTimeline>
          <HeadListTimeline title='Experience' icon='fa-solid fa-briefcase' />

          <ListTimeline title='UI/UX Designer' subtitle='Paerte Code' time='Sep 2023 - Feb 2024' 
            text={<>
              <ListPoint>Part of the team in the <b><i>Printing and Cashier Service System project.</i></b></ListPoint>
              <ListPoint>Designing application prototype designs for further development.</ListPoint>
              <ListPoint>Design an application prototype using Figma.</ListPoint>
            </>}
          />

          <ListTimeline title='Internship - Full Stack Developer' subtitle='Balaroa Sub-District' time='Jul - Sep 2023' 
            text={<>
              <p className='pb-3'>During my internship (KKLP) at the Balaroa District Office, I created a product, namely an <b><i>Application for Creating Automatic Letters</i></b>, so that employees only need to enter the required data and letters can be immediately created for community service purposes.</p>
              <ListPoint>Create a web-based app to make it easy to automate mail generation.</ListPoint>
              <ListPoint>Designing front-end code using React Js and Tailwind CSS, and implementing APIs.</ListPoint>
              <ListPoint className='pb-3'>Designing back-end code using Express Js, Sequelize, and MySQL as databases.</ListPoint>
              <p>Skils: React • Tailwind • Express • Sequelize • MySQL • JWT • RestFull API</p>
            </>}
          />

          <ListTimeline title='Web Developer' subtitle='Tekno Mandiri Anak Negeri' time='Sep 2022 - Jun 2023' 
            text={<>
              <ListPoint>Part of the team in the <b><i>Queue Gate System</i></b> project at the Gelora Bung Karno Stadium, Jakarta.</ListPoint>
              <ListPoint>Responsible for developing user interfaces using the Vue Js framework.</ListPoint>
              <ListPoint className='pb-3'>Implement APIs and integration of certain features.</ListPoint>
              <p>Skils: HTML • CSS • Javascript • Bootstrap • Vue • RestFull API</p>
            </>}
            bottomLine
          />

        </BaseTimeline>


        {/* education */}
        <BaseTimeline className='mt-4'>
          <HeadListTimeline title='Education' />
          <ListTimeline title='STMIK Adhi Guna' time='2020 - 2024' text='Informatics Engineering' />
          <ListTimeline title='SMKN 1 Banawa' time='2017 - 2020' text='Computer and Network Engineering' bottomLine />
        </BaseTimeline>


        {/* Organizational experience */}
        <BaseTimeline className='mt-4'>
          <HeadListTimeline title='Organizational experience' icon='fa-solid fa-people-group' />

          <ListTimeline
            title='Head of Learning Department'
            subtitle='PENA (Programming Engineering & Networking Adhi Guna)'
            time='Feb 2023 - Mar 2024'
            text={<>
              <ListPoint>Lead the team in the development and implementation of learning programs that focus on developing the skills and knowledge of organizational members.</ListPoint>
              <ListPoint>Manage the teaching and learning process, including setting schedules and evaluating learning outcomes.</ListPoint>
              <ListPoint>Prepare reports on developments and achievements in the learning program.</ListPoint>
            </>}
          />

          <ListTimeline
            title='Members of Learning Department'
            subtitle='PENA (Programming Engineering & Networking Adhi Guna)'
            time='Feb 2022 - Feb 2023'
            text={<>
              <ListPoint>Assist in the development and preparation of effective and relevant learning programs for members of the organization.</ListPoint>
              <ListPoint>Support in setting schedules and coordinating the implementation of learning activities.</ListPoint>
              <ListPoint>Arrange and prepare learning materials according to the chairman's direction.</ListPoint>
              <ListPoint>Involved in the PENA Website project as a frontend developer.</ListPoint>
            </>}
          />

          <ListTimeline
            title='General Secretary'
            subtitle='LDK Al-Jazari'
            time='Feb 2021 - Feb 2022'
            text={<>
              <ListPoint>Manage correspondence and organizational document archives.</ListPoint>
              <ListPoint>Convey important information and activity schedules to members.</ListPoint>
              <ListPoint>Assist in planning and evaluating work programs.</ListPoint>
            </>}
            bottomLine
          />

        </BaseTimeline>

      </div>

      <div className='px-4 md:px-8 mt-8 w-fit'>
        <h2 className="text-2xl font-bold mb-2">Supporting Certificates</h2>
        <p className='mb-4'>I have obtained several relevant certifications in the field of web development. Here are some of the certificates I have:</p>
        
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <CardCertificate
            src={pena}
            title='Head of Learning Department'
            company='PENA (Programming Engineering & Networking Adhi Guna)'
            time='27 Apr 2024'
          />
          <CardCertificate
            src={jwd}
            title='Junior Web Developer Training'
            company='KOMINFO Digitalent'
            time='9 - 13 May 2023'
          />
          <CardCertificate
            src={uiuxRakamin}
            title='Kickstart UI UX Design Journey'
            company='Rakamin Academy'
            time='Mar 2023'
          />
        </div>
      </div>

      <div className="px-4 md:px-8 mt-8 w-fit">
        <h2 className="text-2xl font-bold mb-2">My Tools & Skills</h2>
        <p className='mb-4'>As a Full Stack Web Developer, I have skills that cover various aspects of web development. Here are my main skills.</p>
        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          <CardStack src={jsImg} name='Javascript' />
          <CardStack src={tsImg} name='Typescript' />
          <CardStack src={nextjs} name='Next Js' />
          <CardStack src={reactImg} name='React Js' />
          <CardStack src={vueImg} name='Vue Js' />
          <CardStack src={nodeImg} name='Node Js' />
          <CardStack src={express} name='Express Js' />
          <CardStack src={bootstrap} name='Bootstrap' />
          <CardStack src={tailwindImg} name='Tailwind CSS' />
          <CardStack src={mu} name='Material UI' />
          <CardStack src={gitImg} name='Git' />
          <CardStack src={prisma} name='Prisma' />
          <CardStack src={supabase} name='Supabase' />
          <CardStack src={mysqlImg} className='filter invert' name='MySQL' />
          <CardStack src={figmaImg} name='Figma' />
        </div>
         
      </div>


    </div>

   
  )
}

export default Resume