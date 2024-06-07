import { About, Resume, Project, Contact } from '../pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout';

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default RoutesTemplate;