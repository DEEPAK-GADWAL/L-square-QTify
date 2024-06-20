import React from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import { StyledEngineProvider } from '@mui/material/styles';
import Logo from './components/logo/Logo';
function App() {

  return (
   <div>
    <StyledEngineProvider injectFirst>
    <Navbar/>
    <HomePage/>
    </StyledEngineProvider>
   </div>
  )
}

export default App
