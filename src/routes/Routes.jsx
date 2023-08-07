import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Portofolio from '../pages/Portofolio';

export const RoutesTemplate = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/portofolio" element={<Portofolio/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesTemplate