import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import Inicio from './components/pages/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Inicio></Inicio>
      </div>
    </>
  )
}

export default App
