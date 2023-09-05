import React from 'react';
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Home from './pages/Home';
import Success from "./pages/Success"

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </Router>
  )
}

export default App