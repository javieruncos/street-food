import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import Inicio from './components/pages/Inicio'
import NavMenu from './components/common/NavMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageMenu from './components/pages/PageMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
         <NavMenu></NavMenu>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/pageMenu' element={<PageMenu></PageMenu>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
