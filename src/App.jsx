import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import Inicio from './components/pages/Inicio'
import NavMenu from './components/common/NavMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageMenu from './components/pages/PageMenu'
import Testimonios from './components/pages/Testimonios'
import PageUbicacion from "./components/pages/PageUbicacion"

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
         <NavMenu></NavMenu>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/pageMenu' element={<PageMenu></PageMenu>}></Route>
            <Route path='/testimonios' element={<Testimonios></Testimonios>}></Route>
            <Route path='/pageUbicacion' element={<PageUbicacion></PageUbicacion>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
