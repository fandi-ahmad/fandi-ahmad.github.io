import React from 'react'
import { CardContent, CardProfile } from './components/Cards'
import { BottomNavbar, CardNavbar } from './components/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <div className="text-white h-screen max-h-fit gap-4 max-w-screen-2xl mx-auto px-4 lg:px-0 lg:grid lg:grid-cols-4">
        <CardProfile/>
        <div className="col-span-3 overflow-y-auto">
          <CardContent className=''>
            <CardNavbar/>
            {children}
          </CardContent>
        </div>
      </div>
      <BottomNavbar/>
    </>
  )
}

export default Layout
