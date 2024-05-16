import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar} from "./components/Navbar";
import {AboutSection} from "./pages/AboutSection";
import {Experience} from "./pages/Experience";
import {Projects} from "./pages/Projects";
import {Home} from "./pages/Home";
import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home />
    </>
  )
}

export default App
