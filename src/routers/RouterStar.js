import React from 'react'
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import InicioStar from '../components/InicioStar'
import MainStar from '../components/MainStar';

const RouterStar = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="" element={<InicioStar/>} />
            <Route exact path="/personajes" element={<MainStar/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterStar