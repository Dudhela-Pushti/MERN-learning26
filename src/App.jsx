import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent'
import { ContentComponent } from './components/ContentComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { NavBar } from './components/NavBar'
import { HomeComponent } from './components/HomeComponent'
import { ErrorNotFound } from './components/ErrorNotFound'
import { Watch } from './components/Watch'
import { Route, Routes } from "react-router-dom";
import { IplHome } from './components/IplHome'
import { IplTeam } from './components/IplTeam'
import { IplTimeTable } from './components/IplTimeTable'
import { Employees } from './components/Employees'
import { Input } from './input/Input'
import { FormDemo1 } from './form/FormDemo1'
import { FormDemo2 } from './form/FormDemo2'
import { FormDemo3 } from './form/FormDemo3'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <NavBar></NavBar>
        <Routes>
        <Route path="/home" element={<IplHome/>}></Route>
        <Route path="/TimeTable" element={<IplTimeTable/>}></Route>
        <Route path="/TeamDetail" element={<IplTeam/>}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/input" element={<Input/>}></Route>
        <Route path="/formdemo1" element={<FormDemo1/>}></Route>
        <Route path="/formdemo2" element={<FormDemo2/>}></Route>
        <Route path="/formdemo3" element={<FormDemo3/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        </Routes>
      </div>
      
  )
}

export default App
