// components
import { CardContent, CardProfile } from "./components/Cards"
import { About, Portofolio, Contact } from "./pages"
import { CardNavbar, BottomNavbar } from "./components/Navbar"

import { useGlobalState } from "./state/state"

const App = () => {
  const [content, setContent] = useGlobalState('content')

  const Content = () => {
    return (
      content === 'about' ? <About/> :
      content === 'portfolio' ? <Portofolio/> :
      content === 'contact' ? <Contact/> :
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
