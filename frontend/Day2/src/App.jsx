
import './App.css'

import Login from './components/login'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './components/Signup';
import Nav from './components/Navbar';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Navbar' element={<Nav/>}/>
        </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
