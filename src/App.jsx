import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import Inicio from './components/pages/Inicio'
import NavMenu from './components/common/NavMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageMenu from './components/pages/PageMenu'
import Testimonios from './components/pages/Testimonios'
import PageUbicacion from "./components/pages/PageUbicacion"
import PageEquipo from "./components/pages/PageEquipo"
import StateCarrito from "./context/StateCarrito"
import PageDetalle from "./components/pages/PageDetalle"
import Registro from "./components/pages/Registro"
import Login from "./components/pages/Login"
import RutasProtegidas from "./routes/RutasProtegidas"
import RutasAdmin from "./routes/RutasAdmin"
import FooterMenu from "./components/common/FooterMenu"
import StateUsuarios from "./context/StateUsuarios";
import { useEffect } from "react";
import Aos, { init } from "aos";
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos, init({
      duration: 1000
    })
  }, [])


  return (
    <>
      <StateUsuarios>
        <StateCarrito>
          <div className='App'>
            <BrowserRouter>
              <NavMenu></NavMenu>
              <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/pageMenu' element={<PageMenu></PageMenu>}></Route>
                <Route path='/testimonios' element={<Testimonios></Testimonios>}></Route>
                <Route path='/pageUbicacion' element={<PageUbicacion></PageUbicacion>}></Route>
                <Route path='/equipoChef' element={<PageEquipo></PageEquipo>}></Route>
                <Route path='/detalleProducto/:id' element={<PageDetalle></PageDetalle>}></Route>
                <Route path='/registro' element={<Registro></Registro>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path="/administrador/*" element={
                  <RutasProtegidas>
                    <RutasAdmin></RutasAdmin>
                  </RutasProtegidas>
                }></Route>
              </Routes>
              <FooterMenu></FooterMenu>
            </BrowserRouter>
          </div>
        </StateCarrito>
      </StateUsuarios>
    </>
  )
}

export default App
