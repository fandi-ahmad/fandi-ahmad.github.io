import React, { useState } from 'react'
import { useGlobalState } from '../state/state'
import { CardPorto } from '../components/Cards'
import ProjectDetail from '../components/ProjectDetail/ProjectDetail'

// data for project list
import projectLists from '../data/projectLists'

const Project = () => {
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')

  const Canvas = () => {
    const renderProjects = (categories) => {
      return projectLists
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
      'all': projectLists.map(item => item.category), // all category
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