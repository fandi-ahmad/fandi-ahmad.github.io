import React, { useState } from 'react'
import { useGlobalState } from '../state/state'
import { CardPorto } from '../components/Cards'

// images
import jsImg from '../assets/logo/javascript.webp'
import tsImg from '../assets/logo/typescript.webp'
import reactImg from '../assets/logo/react_js.webp'
import vueImg from '../assets/logo/vue_js.webp'
import tailwindImg from '../assets/logo/tailwind_CSS.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import nextjs from '../assets/logo/next_js.webp'
import mu from '../assets/logo/material_UI.webp'
import supabase from '../assets/logo/supabase.png'
import express from '../assets/logo/express_js.webp'
import viteImg from '../assets/logo/vite.webp'
import htmlImg from '../assets/logo/HTML.webp'
import cssImg from '../assets/logo/CSS.webp'
import laravel from '../assets/logo/laravel.png'
import jquery from '../assets/logo/jquery.webp'
import socketio from '../assets/logo/socket_io.png'
import prisma from '../assets/logo/prisma.webp'

import nodeChatFull from '../assets/images/portofolio/node-chat-full.webp'
import nextWriteFull from '../assets/images/portofolio/next-write-full.webp'
import webPenaFull from '../assets/images/portofolio/web-pena-full.webp'
import honeyProductionFull from '../assets/images/portofolio/honey-production-full.webp'
import PersonalWebFull from '../assets/images/portofolio/personal-web-full.webp'
import sipsAppFull from '../assets/images/portofolio/sips-app-full.webp'
import todolistFull from '../assets/images/portofolio/todolist-full.webp'
import whackAMoleFull from '../assets/images/portofolio/whackamole-full.webp'
import weatherAppFull from '../assets/images/portofolio/weather-app-full.webp'
import paertecodeFull from '../assets/images/portofolio/paertecode-full.jpeg'
import simadoFull from '../assets/images/portofolio/simado-full.png'
import etailorFull from '../assets/images/portofolio/etailor-full.png'
import ProjectDetail from '../components/ProjectDetail/ProjectDetail'

const Project = () => {
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')

  const [portfolioList, setPortfolioList] = useState([
    {
      name: 'nodeChat',
      category: 'express js',
      imageSrcFull: nodeChatFull,
      title: 'Node Chat',
      detail: 'Web App',
      time: 'Jul 2024',
      stackImage: [express, socketio, prisma, tailwindImg],
      source: 'https://github.com/fandi-ahmad/node-chat'
    },
    {
      name: 'nextWrite',
      category: 'next js',
      imageSrcFull: nextWriteFull,
      title: 'Next Write',
      detail: 'Web App',
      time: 'Jun 2024',
      stackImage: [nextjs, tsImg, tailwindImg, mu, supabase],
      source: 'https://github.com/fandi-ahmad/next-write'
    },
    {
      name: 'simado',
      category: 'react express',
      imageSrcFull: simadoFull,
      title: 'SIMADO - E-Document Management System',
      detail: 'Web App',
      time: 'May 2024',
      stackImage: [reactImg, viteImg, tailwindImg, express],
      source: 'https://github.com/fandi-ahmad/simado-web'
    },
    {
      name: 'paertecode',
      category: 'react',
      imageSrcFull: paertecodeFull,
      title: 'Paerte Code Landing Page',
      detail: 'Landing Page',
      time: 'Feb 2024',
      stackImage: [reactImg, viteImg, tailwindImg],
      demo: 'https://paertecode.vercel.app/'
    },
    {
      name: 'eTailor',
      category: '',
      imageSrcFull: etailorFull,
      title: 'E-Tailor',
      detail: 'Web App',
      time: 'Jan 2024',
      stackImage: [laravel, jquery, tailwindImg]
    },
    {
      name: 'sipsApp',
      category: 'react express',
      imageSrcFull: sipsAppFull,
      title: 'SIPS App - Application Automatic Letters',
      detail: 'Web App',
      time: 'Sep 2023',
      stackImage: [reactImg, viteImg, tailwindImg, express],
      source: 'https://github.com/fandi-ahmad/sips-app-admin'
    },
    {
      name: 'personalWeb',
      category: 'html css js',
      imageSrcFull: PersonalWebFull,
      title: 'Personal Web',
      detail: 'Landing Page',
      time: 'Aug 2023',
      stackImage: [htmlImg, cssImg, jsImg, tailwindImg],
      demo: 'https://static-personal-web-two.vercel.app/',
      source: 'https://github.com/fandi-ahmad/static-personal-web'
    },
    {
      name: 'weatherApp',
      category: 'vue',
      imageSrcFull: weatherAppFull,
      title: 'Weather App',
      detail: 'Web App',
      time: 'Jan 2023',
      stackImage: [vueImg, viteImg, bootstrap],
      demo: 'https://fandi-ahmad.github.io/weather-app/',
      source: 'https://github.com/fandi-ahmad/weather-app'
    },
    {
      name: 'whackAMole',
      category: 'html css js',
      imageSrcFull: whackAMoleFull,
      title: 'Whack a Mole',
      detail: 'Mini Game',
      time: 'Jan 2023',
      stackImage: [htmlImg, cssImg, jsImg],
      demo: 'https://whack-a-mole-bice-two.vercel.app/',
      source: 'https://github.com/fandi-ahmad/whack-a-mole'
    },
    {
      name: 'toDoList',
      category: 'html css js',
      imageSrcFull: todolistFull,
      title: 'To Do List',
      detail: 'Web App',
      time: 'Dec 2022',
      stackImage: [htmlImg, cssImg, jsImg],
      demo: 'https://to-do-list-theta-indol.vercel.app/',
      source: 'https://github.com/fandi-ahmad/to-do-list'
    },
    {
      name: 'penaWeb',
      category: 'html css js',
      imageSrcFull: webPenaFull,
      title: 'PENA Website 2022-2023',
      detail: 'Company Profile',
      time: 'Sep 2022',
      stackImage: [htmlImg, cssImg, jsImg, bootstrap],
      demo: 'https://pena-web-2022.vercel.app/',
      source: 'https://github.com/fandi-ahmad/pena-web-2022'
    },
    {
      name: 'honeyProduction',
      category: 'html css js',
      imageSrcFull: honeyProductionFull,
      title: 'Honey Production Website',
      detail: 'Landing Page',
      time: 'Jul 2022',
      stackImage: [htmlImg, cssImg, jsImg, bootstrap],
      source: 'https://github.com/fandi-ahmad/honey-production-website'
    },
  ])

  const Canvas = () => {
    const renderProjects = (categories) => {
      return portfolioList
        .filter(item => categories.includes(item.category))
        .map((project, index) => (
          <CardPorto
            key={index}
            src={project.imageSrcFull}
            title={project.title}
            detail={project.detail}
            time={project.time}
            stackImage={project.stackImage}
            onClick={() => openModal(project.title, project.detail, project.imageSrcFull)}
            demo={project.demo}
            source={project.source}
          />
        ));
    };
  
    const categoryMap = {
      'all': portfolioList.map(item => item.category), // all category
      'html css js': ['html css js'],
      'react': ['react', 'react express'],
      'vue': ['vue'],
      'next js': ['next js'],
      'express js': ['express js', 'react express']
    };

    const categories = categoryMap[portofolioPage] || [];
    return renderProjects(categories)
  };
  

  const [projectTitle, setProjectTitle] = useState('')
  const [projectDetail, setProjectDetail] = useState('')
  const [projectSrc, setProjectSrc] = useState('')

  const openModal = (title, detail, src) => {
    document.getElementById('modalPortfolio').showModal()
    setProjectTitle(title)
    setProjectDetail(detail)
    setProjectSrc(src)
  }

  const classNav = 'cursor-pointer hover:text-blue-400 duration-200 capitalize'
  const SubMenu = (props) => {
    return (
      <li onClick={props.onClick} className={portofolioPage ===  props.text ? classNav+' text-blue-400' : classNav}>{props.text}</li>
    )
  }

  const Content = () => {
    return (
      <ProjectDetail title={projectTitle} detail={projectDetail} src={projectSrc} />
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
          <SubMenu text='react' onClick={() => setPortofolioPage('react')} />
          <SubMenu text='vue' onClick={() => setPortofolioPage('vue')} />
          <SubMenu text='next js' onClick={() => setPortofolioPage('next js')} />
          <SubMenu text='express js' onClick={() => setPortofolioPage('express js')} />
        </ul>

        {/* content portofolio */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          <Canvas/>
        </div>

        {/* modal */}
        <dialog id="modalPortfolio" className="modal">
          <div className='h-screen w-screen'>
            <button onClick={closeModal} className='outline-none text-4xl fixed z-30 top-4 right-0.5 sm:right-2 md:right-4 lg:right-6 cursor-pointer hover:text-gray-300 hidden md:block'>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <div className='fixed w-full z-20 bg-gray-600 bg-opacity-95 border-gray-500 border-b py-3 px-4 md:px-12 lg:px-16 block md:hidden'>
              <div onClick={closeModal} className='text-xl'>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </div>
            <div id='templateModal' className="modal-box px-0 rounded-none bg-black bg-opacity-70 min-h-full min-w-full pt-12 md:pt-12 pb-0 md:pb-6">
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