import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../views/Main";
import Project from "../views/Project";

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesTemplate;