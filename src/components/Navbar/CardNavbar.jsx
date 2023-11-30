import React from 'react'
import { useGlobalState } from '../../state/state'
import SubMenu from './Submenu'
import indonesia from '../../assets/logo/indonesia.png'
import english from '../../assets/logo/english.png'
import { useTranslation } from 'react-i18next'

const CardNavbar = () => {
  const [content, setContent] = useGlobalState('content')
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')
  const [t, i18n] = useTranslation('global')

  const switchLang = (lang) => {
    i18n.changeLanguage(lang)
    if (lang === 'id') {
      content === 'about' ? setContent(t('navbar.about')) : 
      content === 'resume' ? setContent(t('navbar.resume')) : 
      content === 'project' ? setContent(t('navbar.project')) : 
      content === 'contact' ? setContent(t('navbar.contact')) : null
      portofolioPage === 'all' ? setPortofolioPage('semua') : null
    } else if (lang === 'en') {
      content === 'tentang' ? setContent(t('navbar.about')) : 
      content === 'resume' ? setContent(t('navbar.resume')) : 
      content === 'proyek' ? setContent(t('navbar.project')) : 
      content === 'kontak' ? setContent(t('navbar.contact')) : null
      portofolioPage === 'semua' ? setPortofolioPage('all') : null
    }
  }

  return (
    <>
      <div className='flex flex-row w-full justify-between'>

        {/* title */}
        <div className='px-4 md:px-8 flex items-end pt-5'>
          <div className='text-3xl font-bold capitalize'>
            { content === 'about' ? content + ' me' : content === 'tentang' ? content + ' saya' : content }
          </div>
        </div>
        
        {/* list menu */}
        <div className='bg-gray-600 bg-opacity-50 rounded-tl-none rounded-br-none rounded-xl py-5 px-8 border-l border-b border-gray-500 hidden sm:block'>
          <ul className='flex flex-row gap-8 font-medium'>
            <SubMenu title={t('navbar.about')} onClick={() => setContent(t('navbar.about'))} />
            <SubMenu title={t('navbar.resume')} onClick={() => setContent(t('navbar.resume'))} />
            <SubMenu title={t('navbar.project')} onClick={() => setContent(t('navbar.project'))} />
            <SubMenu title={t('navbar.contact')} onClick={() => setContent(t('navbar.contact'))} />
            <div className="dropdown dropdown-bottom dropdown-end cursor-pointer mt-0.5">
              <label tabIndex={1} className="cursor-pointer capitalize flex flex-row items-center">
                <i className="fa-solid text-sm fa-globe pr-1.5"></i> 
                <span className='text-xs font-normal'>{t('navbar.language')}</span>
              </label>
              <ul tabIndex={1} style={{marginRight: '-30px'}} className="dropdown-content shadow mt-1 rounded-md w-32 text-xs font-normal bg-gray-700 border border-gray-500">
                <li className='hover:bg-gray-600 hover:bg-opacity-50 py-1.5 px-2.5' onClick={() => switchLang('id')}>
                  <div className='flex flex-row items-center'>
                    <img src={indonesia} className='rounded-sm w-5 mr-2' alt="" />
                    <span>Indonesia</span>
                    <span className={t('navbar.language') == 'bahasa' ? '' : 'hidden'}>
                      <i className='fa-solid fa-check text-green-500 text-sm ml-2'></i>
                    </span>
                  </div>
                </li>
                <li className='hover:bg-gray-600 hover:bg-opacity-50 py-1.5 px-2.5' onClick={() => switchLang('en')}>
                  <div className='flex flex-row items-center'>
                    <img src={english} className='rounded-sm w-5 mr-2' alt="" />
                    <span>English</span>
                    <span className={t('navbar.language') == 'language' ? '' : 'hidden'}>
                      <i className='fa-solid fa-check text-green-500 text-sm ml-7'></i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </ul>
        </div>
      </div>

      <div className='relative group pb-2 w-12 mx-4 md:mx-8 mt-4'>
        <span className='absolute inset-x-0 bottom-0 h-1.5 rounded-full bg-blue-400 origin-left transform scale-x-100 transition-transform duration-500'></span>
      </div>
    </>
  )
}

export default CardNavbar