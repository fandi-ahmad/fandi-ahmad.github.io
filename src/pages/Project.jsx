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
import { useTranslation } from 'react-i18next'

const Project = () => {
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')
  const [portfolioContent, setPortfolioContent] = useState('')
  const [t, i18n] = useTranslation('global')

  const [portfolioList, setPortfolioList] = useState([
    {
      name: 'weatherApp',
      category: 'vue',
      imageSrc: weatherApp,
      title: t('project.weather_app.title'),
      detail: t('project.weather_app.detail'),
    },
    {
      name: 'sipsApp',
      category: 'react express',
      imageSrc: sipsApp,
      title: t('project.sips_app.title'),
      detail: t('project.sips_app.detail'),
    },
    {
      name: 'penaWeb',
      category: 'html css js',
      imageSrc: webPena,
      title: t('project.pena.title'),
      detail: t('project.pena.detail'),
    },
    {
      name: 'honeyProduction',
      category: 'html css js',
      imageSrc: honeyProduction,
      title: t('project.honey.title'),
      detail: t('project.honey.detail'),
    },
    {
      name: 'whackAMole',
      category: 'html css js',
      imageSrc: whackamole,
      title: t('project.whackamole.title'),
      detail: t('project.whackamole.detail'),
    },
    {
      name: 'toDoList',
      category: 'html css js',
      imageSrc: todolist,
      title: t('project.todolist.title'),
      detail: t('project.todolist.detail'),
    },
    {
      name: 'personalWeb',
      category: 'html css js',
      imageSrc: personalWeb,
      title: 'Personal Web',
      detail: 'Landing Page'
    }
  ])

  const Canvas = () => {
    return (
      portofolioPage === 'all' || portofolioPage === 'semua'  ? 
        portfolioList.map((project, index) => (
          <CardPorto key={index} src={project.imageSrc} title={project.title} detail={project.detail} onClick={() => openModal(project.name)} />
        ))
      :
      portofolioPage === 'html css js' ? 
        portfolioList.filter(item => item.category === 'html css js').map((project, index) => (
          <CardPorto key={index} src={project.imageSrc} title={project.title} detail={project.detail} onClick={() => openModal(project.name)} />
        ))
      :
      portofolioPage === 'react express' ? 
      portfolioList.filter(item => item.category === 'react express').map((project, index) => (
        <CardPorto key={index} src={project.imageSrc} title={project.title} detail={project.detail} onClick={() => openModal(project.name)} />
      ))
      :
      portofolioPage === 'vue' ? 
        portfolioList.filter(item => item.category === 'vue').map((project, index) => (
          <CardPorto key={index} src={project.imageSrc} title={project.title} detail={project.detail} onClick={() => openModal(project.name)} />
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


  return (
    <div className='px-4 md:px-8 mt-8'>

      {/* navbar portofolio */}
      <ul className='hidden md:flex flex-row gap-8'>
        <SubMenu text={t('project.all')}  onClick={() => setPortofolioPage(t('project.all'))} />
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
          <button className='text-xl outline-none sm:text-3xl md:text-4xl fixed z-30 top-4 right-0.5 sm:right-2 md:right-4 lg:right-6 cursor-pointer hover:text-gray-300' onClick={() => document.getElementById('closeModal').click()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <div className="modal-box rounded-none bg-black bg-opacity-70 min-h-full min-w-full">
            <Content/>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button id='closeModal'></button>
          </form>

        </div>
      </dialog>
      
    </div>
  )
}

export default Project