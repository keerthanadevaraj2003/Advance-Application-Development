
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ImagePage from './pages/LandingPage';
import Login from './components/login'
import Signup from './components/Signup';
import Nav from './components/Navbar';
import Profile from './pages/ProfilePage';
import About from './pages/AboutPage';
import Service from './pages/ServicePage';
import Review from './pages/ReviewPage';
import Contact from './pages/ContactPage';
import Blog from './pages/BlogPage';
import Themes from './pages/ThemesPage';
import Menu from './pages/MenuPage';
import Price from './pages/PricePage';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<ImagePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Navbar' element={<Nav/>}/>
          <Route path='/ProfilePage' element={<Profile/>}/>
          <Route path='/AboutPage' element={<About/>}/>
          <Route path='/ServicePage' element={<Service/>}/>
          <Route path='/ReviewPage' element={<Review/>}/>
          <Route path='/ContactPage' element={<Contact/>}/>
          <Route path='/BlogPage' element={<Blog/>}/>
          <Route path='/ThemesPage' element={<Themes/>}/>
          <Route path='/MenuPage' element={<Menu/>}/>
          <Route path='/PricePage' element={<Price/>}/>
        </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
