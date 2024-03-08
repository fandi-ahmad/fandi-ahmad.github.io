// components
import { CardContent, CardProfile } from "./components/Cards"
import { About, Project, Contact, Resume } from "./pages"
import { CardNavbar, BottomNavbar } from "./components/Navbar"

import { useGlobalState } from "./state/state"
import { useTranslation } from "react-i18next"

const App = () => {
  const [content, setContent] = useGlobalState('content')
  const [t, i18n] = useTranslation('global')

  const Content = () => {
    return (
      content === t('navbar.about') ? <About/> :
      content === t('navbar.resume') ? <Resume/> :
      content === t('navbar.project') ? <Project/> :
      content === t('navbar.contact') ? <Contact/> :
      null
    );
  }

  return (
    <>
      <div className="text-white h-screen max-h-fit gap-4 max-w-screen-2xl mx-auto px-4 lg:px-0 lg:grid lg:grid-cols-4">
        <CardProfile/>
        <div className="col-span-3 overflow-y-auto">
          <CardContent className=''>
            <CardNavbar/>
            <Content/>
          </CardContent>
        </div>

      </div>
      <BottomNavbar/>
    </>
  )
}

export default App
