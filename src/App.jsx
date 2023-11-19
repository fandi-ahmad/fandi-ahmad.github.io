// components
import { CardContent, CardProfile } from "./components/Cards"
import Navbar from "./components/Navbar"
import { About, Portofolio, Contact } from "./pages"


import { useGlobalState } from "./state/state"

const App = () => {
  const [content, setContent] = useGlobalState('content')

  const Content = () => {
    return (
      content === 'about' ? <About/> :
      content === 'portofolio' ? <Portofolio/> :
      content === 'contact' ? <Contact/> :
      null
    );
  }

  return (
    <div className="text-white h-screen p-16 grid grid-cols-4 gap-4 max-w-screen-2xl mx-auto">
      <CardProfile/>
      <CardContent className='col-span-3'>
        <Navbar/>
        <Content/>
      </CardContent>
    </div>
  )
}

export default App
