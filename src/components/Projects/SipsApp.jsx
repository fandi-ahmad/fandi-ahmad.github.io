import React from 'react'
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
  return (
    <Template title='SIPS App' subtitle='Application Automatic Letters In Balaroa Sub-District'>
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '70%' }} className='p-8 bg-gray-950 bg-contain bg-no-repeat bg-right-bottom'>

        <div className='flex flex-row items-center mb-12'>
          <img src={kotaPaluImg} alt="logo" loading='lazy' className='w-12 md:w-16' />
          <h3 className='text-3xl md:text-4xl font-medium ml-4'>Kelurahan Balaroa</h3>
        </div>

        <h1 className='capitalize text-3xl md:text-4xl w-full lg:w-2/4'>SIPS App (Sistem Informasi Pencatatan Surat)</h1>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>
          A system that facilitates the process of making certificates for community services.
        </p>
      
        <p className='text-lg mt-8 font-medium capitalize'>Technology:</p>
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
        <TextSubHead className='bg-gray-900 text-white'>About Project</TextSubHead>
        <Text>
          In this project I designed the SIPS (Letter Creation Information System) application, which is a system that makes the process of creating community service certificates easier. This application is specifically designed for sub-district offices, allowing employees to create documents needed by residents quickly and efficiently.
        </Text>
        <Text>
          This application was created as a technical activity for me when I was a KKLP Internship Student in Balaroa Village.
        </Text>

        <TextSubHead className='bg-gray-900 text-white mt-8'>Main Feature</TextSubHead>
        <Text><strong>📌 Employee and Resident Registration:</strong> Record the name of the employee who signed the letter and record the demographic information to make it easier to make the deed at a later date.</Text>
        <Text><strong>📌 Letter Type Selection:</strong> Employees can select the desired certificate type, and the application automatically generates a letter with previously entered data.</Text>
        <Text><strong>📌 Citizen Data Storage</strong> Citizen data is stored securely, enabling faster certificate generation for previously registered citizens.</Text>
        <Text><strong>📌 Modern Technology:</strong> Uses Vite, React, Express, and MySQL technologies to build applications.</Text>
        <Text><strong>📌 Data Security:</strong> Implement JSON Web Token (JWT) to secure citizen access and data.</Text>
        <Text><strong>📌 Modern UI with Tailwind CSS:</strong> Implement Tailwind CSS for a clean and modern interface design, speeding up the development process and improving design consistency.</Text>

        <Text className='pt-6'>
          The SIPS application is designed to increase the efficiency of community services at sub-district offices so that it has a positive impact on administrative processes and community services.
        </Text>
      </div>

      <img src={preview} className='w-full bg-gray-950' alt="" />
    </Template>
  )
}

export default SipsApp