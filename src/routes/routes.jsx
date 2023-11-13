import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Main from "../views/Main";
import Project from "../views/Project";

export const RoutesTemplate = () => {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
};

export default RoutesTemplate;