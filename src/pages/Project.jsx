import React, { useState } from 'react'
import { useGlobalState } from '../state/state'
import { CardPorto } from '../components/Cards'
import { PenaWeb, HoneyProduction, WhackaMole, Todolist, WeatherApp, SipsApp, PersonalWeb } from '../components/Projects'

import webPena from '../assets/images/portofolio/web-pena.webp'
import honeyProduction from '../assets/images/portofolio/honey-production.webp'
import whackamole from '../assets/images/portofolio/whackamole.webp'
import todolist from '../assets/images/portofolio/todolist-app.webp'
import sipsApp from '../assets/images/portofolio/SIPS-app.webp'
import weatherApp from '../assets/images/portofolio/weather-app.webp'
import personalWeb from '../assets/images/portofolio/personal-web.webp'

// images
import jsImg from '../assets/logo/javascript.webp'
import tsImg from '../assets/logo/typescript.webp'
import reactImg from '../assets/logo/reactjs.webp'
import vueImg from '../assets/logo/vuejs.webp'
import tailwindImg from '../assets/logo/tailwind.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import nextjs from '../assets/logo/nextjs.png'
import mu from '../assets/logo/mu.png'
import supabase from '../assets/logo/supabase.png'
import express from '../assets/logo/express-js.png'
import prisma from '../assets/logo/prisma.png'
import viteImg from '../assets/logo/vite.webp'
import htmlImg from '../assets/logo/html.webp'
import cssImg from '../assets/logo/css.webp'

const Project = () => {
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')
  const [portfolioContent, setPortfolioContent] = useState('')

  const [portfolioList, setPortfolioList] = useState([
    {
      name: 'sipsApp',
      category: 'react express',
      imageSrc: sipsApp,
      title: 'SIPS App - Application Automatic Letters',
      detail: 'Web App',
      time: 'Sep 2023',
      stackImage: [reactImg, viteImg, tailwindImg, express],
    },
    {
      name: 'personalWeb',
      category: 'html css js',
      imageSrc: personalWeb,
      title: 'Personal Web',
      detail: 'Landing Page',
      time: 'Aug 2023',
      stackImage: [htmlImg, cssImg, jsImg, tailwindImg],
    },
    {
      name: 'weatherApp',
      category: 'vue',
      imageSrc: weatherApp,
      title: 'Weather App',
      detail: 'Web App',
      time: 'Jan 2023',
      stackImage: [vueImg, viteImg, bootstrap],
    },
    {
      name: 'whackAMole',
      category: 'html css js',
      imageSrc: whackamole,
      title: 'Whack a Mole',
      detail: 'Mini Game',
      time: 'Jan 2023',
      stackImage: [htmlImg, cssImg, jsImg],
    },
    {
      name: 'toDoList',
      category: 'html css js',
      imageSrc: todolist,
      title: 'To Do List',
      detail: 'Web App',
      time: 'Dec 2022',
      stackImage: [htmlImg, cssImg, jsImg],
    },
    {
      name: 'penaWeb',
      category: 'html css js',
      imageSrc: webPena,
      title: 'PENA Website 2022-2023',
      detail: 'Company Profile',
      time: 'Sep 2022',
      stackImage: [htmlImg, cssImg, jsImg, bootstrap],
    },
    {
      name: 'honeyProduction',
      category: 'html css js',
      imageSrc: honeyProduction,
      title: 'Honey Production Website',
      detail: 'Landing Page',
      time: 'Jul 2022',
      stackImage: [htmlImg, cssImg, jsImg, bootstrap],
    },
  ])

  const Canvas = () => {
    return (
      portofolioPage === 'all' ? 
        portfolioList.map((project, index) => (
          <CardPorto
            key={index}
            src={project.imageSrc}
            title={project.title}
            detail={project.detail}
            time={project.time}
            stackImage={project.stackImage}
            onClick={() => openModal(project.name)}
          />
        ))
      :
      portofolioPage === 'html css js' ? 
        portfolioList.filter(item => item.category === 'html css js').map((project, index) => (
          <CardPorto
            key={index}
            src={project.imageSrc}
            title={project.title}
            detail={project.detail}
            time={project.time}
            stackImage={project.stackImage}
            onClick={() => openModal(project.name)}
          />
        ))
      :
      portofolioPage === 'react express' ? 
      portfolioList.filter(item => item.category === 'react express').map((project, index) => (
        <CardPorto
          key={index}
          src={project.imageSrc}
          title={project.title}
          detail={project.detail}
          time={project.time}
          stackImage={project.stackImage}
          onClick={() => openModal(project.name)}
        />
      ))
      :
      portofolioPage === 'vue' ? 
        portfolioList.filter(item => item.category === 'vue').map((project, index) => (
          <CardPorto
            key={index}
            src={project.imageSrc}
            title={project.title}
            detail={project.detail}
            time={project.time}
            stackImage={project.stackImage}
            onClick={() => openModal(project.name)}
          />
        ))
      :
      null
    );
  }

  const openModal = (params) => {
    setPortfolioContent(params)
    document.getElementById('modalPortfolio').showModal()
  }

  const classNav = 'cursor-pointer hover:text-blue-400 duration-200 capitalize'
  const SubMenu = (props) => {
    return (
      <li onClick={props.onClick} className={portofolioPage ===  props.text ? classNav+' text-blue-400' : classNav}>{props.text}</li>
    )
  }

  const Content = () => {
    return (
      portfolioContent === 'penaWeb' ? <PenaWeb/> :
      portfolioContent === 'honeyProduction' ? <HoneyProduction/> :
      portfolioContent === 'whackAMole' ? <WhackaMole/> : 
      portfolioContent === 'toDoList' ? <Todolist/> :
      portfolioContent === 'weatherApp' ? <WeatherApp/> :
      portfolioContent === 'sipsApp' ? <SipsApp/> :
      portfolioContent === 'personalWeb' ? <PersonalWeb/> :
      null
    )
  }

  const closeModal = () => {
    document.getElementById('closeModal').click()
    document.getElementById('templateModal').scrollTop = 0
  }

  return (
    <div>
      <div className='px-4 md:px-8 mt-8'>

        {/* navbar portofolio */}
        <ul className='hidden md:flex flex-row gap-8'>
          <SubMenu text='all'  onClick={() => setPortofolioPage('all')} />
          <SubMenu text='html css js' onClick={() => setPortofolioPage('html css js')} />
          <SubMenu text='react express' onClick={() => setPortofolioPage('react express')} />
          <SubMenu text='vue' onClick={() => setPortofolioPage('vue')} />
        </ul>

        {/* content portofolio */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          <Canvas/>
        </div>

        {/* modal */}
        <dialog id="modalPortfolio" className="modal">
          <div className='h-screen w-screen'>
            <button onClick={closeModal} className='text-xl outline-none sm:text-3xl md:text-4xl fixed z-30 top-4 right-0.5 sm:right-2 md:right-4 lg:right-6 cursor-pointer hover:text-gray-300'>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <div id='templateModal' className="modal-box rounded-none bg-black bg-opacity-70 min-h-full min-w-full">
              <Content/>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button id='closeModal'></button>
            </form>

          </div>
        </dialog>
        
      </div>
    </div>
  )
}

export default Project