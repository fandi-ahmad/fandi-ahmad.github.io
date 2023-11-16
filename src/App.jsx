// components
import { CardProfile, CardContent } from "./components/Cards"
import Navbar from "./components/Navbar"
import { AboutContent, PortofolioContent, ContactContent } from "./components/Content"


import { useGlobalState } from "./state/state"

const App = () => {
  const [content, setContent] = useGlobalState('content')

  const Canvas = () => {
    return (
      content === 'about' ? <AboutContent /> :
      content === 'portofolio' ? <PortofolioContent /> :
      content === 'contact' ? <ContactContent /> :
      null
    );
  }

  return (
    <div className="bg-gray-800 text-white h-screen p-16 grid grid-cols-4 gap-4">
      <CardProfile/>
      <CardContent className='col-span-3'>
        <Navbar/>
        <Canvas/>
      </CardContent>
    </div>
  )
}

export default App
