import React from 'react'
import SubMenu from './Submenu'
import indonesia from '../../assets/logo/indonesia.png'
import english from '../../assets/logo/english.png'
import { useGlobalState } from '../../state/state'
import { useTranslation } from 'react-i18next'

const BottomNavbar = () => {
  const [content, setContent] = useGlobalState('content')
  const [t, i18n] = useTranslation('global')

  const switchLang = (lang) => {
    i18n.changeLanguage(lang)
    if (lang === 'id') {
      content === 'about' ? setContent(t('navbar.about')) : 
      content === 'resume' ? setContent(t('navbar.resume')) : 
      content === 'portfolio' ? setContent(t('navbar.portfolio')) : 
      content === 'contact' ? setContent(t('navbar.contact')) : null
    } else if (lang === 'en') {
      content === 'tentang' ? setContent(t('navbar.about')) : 
      content === 'resume' ? setContent(t('navbar.resume')) : 
      content === 'portofolio' ? setContent(t('navbar.portfolio')) : 
      content === 'kontak' ? setContent(t('navbar.contact')) : null
    }
  }

  return (
    <div className='fixed sm:hidden z-30 bottom-0 w-full bg-gray-600 bg-opacity-95 rounded-xl rounded-bl-none rounded-br-none py-4 px-8 text-white border-gray-500 border-t flex justify-center'>
      <ul className='flex flex-row gap-6 sm:gap-8 font-medium text-xs'>
        <SubMenu title='about' onClick={() => setContent('about')} />
        <SubMenu title='resume' onClick={() => setContent('resume')} />
        <SubMenu title='portfolio' onClick={() => setContent('portfolio')} />
        <SubMenu title='contact' onClick={() => setContent('contact')} />
        <div className="dropdown dropdown-top dropdown-end cursor-pointer" style={{marginTop: '-2px'}}>
          <label tabIndex={2} className="cursor-pointer capitalize flex flex-row items-center">
            <i className="fa-solid fa-globe text-lg"></i> 
            <span className='text-xs font-normal hidden'>{t('navbar.language')}</span>
          </label>
          <ul tabIndex={2} style={{marginRight: '-20px'}} className="dropdown-content shadow mb-1 rounded-md w-32 text-xs font-normal bg-gray-700 border border-gray-500">
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
  )
}

export default BottomNavbar