import React, { Fragment, useEffect } from 'react';
import './App.scss';
import { Routes, Route, Link, useNavigate, BrowserRouter, Navigate } from "react-router-dom";
import MyComponent from './components/MyComponent';
import { Button, Spinner } from '@onfido/castor-react';
import MyForm from './components/Form';
import EnterAadharForm from './components/EnterAadharForm';
import ProceedToVerify from './components/ProceedToVerify';
import OnfidoRedirect from './components/OnfidoRedirect';
import Base64ToImage from './components/Base64ToImage';
// import MyFrame from './components/MyFrame';


function App() {
  
  return (
    <>
    
    <Routes>
      <Route path='/' element={<EnterAadharForm/>} />
      <Route path='/proceed' element={<ProceedToVerify/>} />
      <Route path='/redirect' element={<OnfidoRedirect/>} />
      <Route path='/image' element={<Base64ToImage/>} />

    </Routes>
      
    </>
  );
}

export default App;
