import React, { Component } from 'react'

import Home from './pages/Home'
import Detection from './pages/Detection'
import logo from './logo.svg';
import Banner from './components/Banner';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Impact from './components/Impact';
import Project from './components/Project';
import Features from './components/Features';
import Functions from './components/Functions';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Irrigation from './pages/Irrigation';
import Soil from './pages/Soil';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route index element={<Home/>} />
        <Route path='/detection' element={<Detection/>} />
        <Route path='/soil' element={<Soil/>} />
        <Route path='/irrigation' element={<Irrigation/>} />
      
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
