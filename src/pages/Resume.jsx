import React from 'react'
import { BaseTimeline, HeadListTimeline, ListTimeline, ListPoint } from '../components/Timeline'
import { CardStack, CardCertificate } from '../components/Cards'

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
import mysqlImg from '../assets/logo/mysql-icon.png'
import gitImg from '../assets/logo/git-icon.png'

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
              <p className='pb-3'>As a UI/UX Designer who focuses on creating application prototype designs for further development. By understanding user needs, I strive to create simple and effective designs. The tool I use is Figma.</p>
              <ListPoint>Design an app prototype design for further development by understanding the user's needs.</ListPoint>
              <ListPoint>Design an app prototype design using Figma.</ListPoint>
            </>}
          />

          <ListTimeline title='Internship - Full Stack Developer' subtitle='Balaroa Sub-District' time='Jul - Sep 2023' 
            text={<>
              <p className='pb-3'>During my internship (KKLP) at the Balaroa District Office, I created a product, namely an application for creating automatic letters, so that employees only need to enter the required data and letters can be immediately created for community service purposes.</p>
              <ListPoint>Create a web-based app to make it easy to automate mail generation.</ListPoint>
              <ListPoint>Designing front-end code using React Js and Tailwind CSS, and implementing APIs.</ListPoint>
              <ListPoint className='pb-3'>Designing back-end code using Express Js, Sequelize, and MySQL as databases.</ListPoint>
              <p>Skils: React • Tailwind • Express • Sequelize • MySQL • JWT • RestFull API</p>
            </>}
          />

          <ListTimeline title='Frontend Developer' subtitle='WoVi' time='Sep 2022 - Jul 2023' 
            text={<>
              <ListPoint>Responsible for developing user interfaces using the Vue Js framework.</ListPoint>
              <ListPoint className='pb-3'>Implement APIs and integration of certain features.</ListPoint>
              <p>Skils: HTML • CSS • Javascript • Bootstrap • Vue • RestFull API</p>
            </>}
          />

          <ListTimeline title='Frontend Developer' subtitle='PENA (Programming Engineering & Networking Adhi Guna)' time='Sep 2022' 
            text='Skils: HTML • CSS • Javascript • Bootstrap'
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
              <ListPoint>Prepare reports on developments and achievements in the learning program</ListPoint>
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
          <CardStack src={gitImg} />
          <CardStack src={prisma} />
          <CardStack src={supabase} />
          <CardStack src={mysqlImg} className='filter invert' />
          <CardStack src={figmaImg} />
        </div>
         
      </div>


    </div>

   
  )
}

export default Resume