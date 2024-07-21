import React from 'react'
import { CardContent, CardProfile } from './components/Cards'
import { BottomNavbar, CardNavbar } from './components/Navbar'

const Layout = ({children}) => {
  const toTop = () => {
    document.getElementById('cardContent').scrollTop = 0
  }

  return (
    <>
      <div className="text-white h-screen max-h-fit gap-4 max-w-screen-2xl mx-auto px-4 lg:px-0 lg:grid lg:grid-cols-4">
        <CardProfile/>
        <div id='cardContent' className="col-span-3 overflow-y-auto">
          <CardContent>
            <CardNavbar/>
            {children}
          </CardContent>
        </div>
      </div>
      
      <div onClick={toTop} className='fixed z-30 bottom-4 right-1.5 hidden lg:block'>
        <div className='border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white duration-100 w-7 h-7 rounded-full flex justify-center items-center text-xl cursor-pointer'>
          <i className="fa-solid fa-caret-up"></i>
        </div>
      </div>

      <BottomNavbar/>
    </>
  )
}

export default Layout
