import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../state/state'
import { CardPorto } from '../components/Cards'
import { PenaWeb } from './PortfolioContent'

import webPena from '../assets/images/portofolio/web-pena.webp'
import honeyProduction from '../assets/images/portofolio/honey-production.webp'
import whackamole from '../assets/images/portofolio/whackamole.webp'
import todolist from '../assets/images/portofolio/todolist-app.webp'
import sipsApp from '../assets/images/portofolio/SIPS-app.webp'
import weatherApp from '../assets/images/portofolio/weather-app.webp'

const Portofolio = () => {
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')
  const [portfolioContent, setPortfolioContent] = useState('')

  const [portfolioList, setPortfolioList] = useState([
    {
      name: 'penaWeb',
      category: 'html css js',
      imageSrc: webPena,
      title: 'PENA Website 2022-2023',
      detail: 'Company Profile',
    },
    {
      name: 'honeyProduction',
      category: 'html css js',
      imageSrc: honeyProduction,
      title: 'Honey Production',
      detail: 'Landing Page',
    },
    {
      name: 'whackAMole',
      category: 'html css js',
      imageSrc: whackamole,
      title: 'Whack a Mole',
      detail: 'mini game app',
    },
    {
      name: 'toDoList',
      category: 'html css js',
      imageSrc: todolist,
      title: 'to do list',
      detail: 'tools app',
    },
    {
      name: 'weatherApp',
      category: 'vue',
      imageSrc: weatherApp,
      title: 'Weather App',
      detail: 'weather forecast',
    },
    {
      name: 'sipsApp',
      category: 'react express',
      imageSrc: sipsApp,
      title: 'SIPS App',
      detail: 'Application for managing Balaroa sub-district letters',
    }
  ])

  const Canvas = () => {
    return (
      portofolioPage === 'all' ? 
        portfolioList.map((project, index) => (
          <CardPorto key={index} src={project.imageSrc} title={project.title} detail={project.detail} onClick={() => openModal(project.name)} />
        ))
      :
      portofolioPage === 'html css js' ? 
      <>
        <CardPorto src={webPena} title='PENA Website 2022-2023' detail='Company Profile' />
        <CardPorto src={honeyProduction} title='Honey Production' detail='Landing Page' />
        <CardPorto src={whackamole} title='Whack a Mole' detail='mini game app' />
        <CardPorto src={todolist} title='to do list' detail='tools app' />
      </> :
      portofolioPage === 'react express' ? 
      <>
        <CardPorto src={sipsApp} title='SIPS App' detail='Application for managing Balaroa sub-district letters' />
      </> :
      portofolioPage === 'vue' ? 
      <>
        <CardPorto src={weatherApp} title='Weather App' detail='weather forecast' />
      </> :
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
      <li onClick={props.onClick} className={portofolioPage === props.text ? classNav+' text-blue-400' : classNav}>{props.text}</li>
    )
  }

  const Content = () => {
    return (
      portfolioContent === 'penaWeb' ? <PenaWeb/> : null
    )
  }


  return (
    <div className='px-4 md:px-8 mt-8'>

      {/* navbar portofolio */}
      <ul className='hidden md:flex flex-row gap-8'>
        <SubMenu text='all' onClick={() => setPortofolioPage('all')} />
        <SubMenu text='html | css | js' onClick={() => setPortofolioPage('html css js')} />
        <SubMenu text='react & express' onClick={() => setPortofolioPage('react express')} />
        <SubMenu text='vue' onClick={() => setPortofolioPage('vue')} />
      </ul>

      {/* content portofolio */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
        <Canvas/>
      </div>

      {/* modal */}
      <dialog id="modalPortfolio" className="modal">
        <div className='h-screen w-screen'>
          <button className='text-xl sm:text-3xl md:text-4xl fixed z-30 top-4 right-0.5 sm:right-2 md:right-4 lg:right-6 cursor-pointer hover:text-gray-300' onClick={() => document.getElementById('closeModal').click()}>
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

export default Portofolio