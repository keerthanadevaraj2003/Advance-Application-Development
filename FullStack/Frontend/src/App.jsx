import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; 
import Login from "./pages/Login";
import Sidebar1 from "./components/Sidebar1";
import UserLogin from "./pages/Userlogin";
import AdminLogin from "./pages/adminlogin";
import Signup from "./pages/Signuppage";
import Profile from "./components/Profile";
import Book from "./pages/Book";
import Userpage from "./pages/Userpage";
import Sidebar from "./components/Sidebar";
import Theme from "./pages/Theme";
import Food from "./pages/Food";
import Adminpage from "./pages/Adminpage";
import Admin_themes from "./pages/Admin_themes";
import Addons from "./pages/Addons";
import Adminpanel from "./pages/Adminpanel";
import Dashboard from "./components/Dashboard";
import Viewbooking from "./pages/Viewbooking";
import Viewbooking1 from "./pages/Viewbooking1";
import Editbooking from "./pages/Editbooking";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Theme1 from "./pages/Theme1";
import Etheme from "./pages/Etheme";
import Theme2 from "./pages/Theme2";
import Addons1 from "./pages/Addons1";
import Addons2 from "./pages/Addons2";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/userpage" element={<Sidebar/> }/>
       
        <Route path="/adminpanel" element={<Adminpanel/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/side" element={<Sidebar/>}/>
        <Route path="/themes" element={<Theme/>}/>
        <Route path="/admintheme" element={<Admin_themes/>}/>
        <Route path="/addons" element={<Addons/>}/>
        <Route path="/view" element={<Viewbooking/>}/>
        <Route path="/view1" element={<Viewbooking1/>}/>
        <Route path="/edit/:id" element={<Editbooking/>}/>
        <Route path="/edittheme/:id" element={<Etheme/>}/>
        <Route path="/editaddon/:id" element={<Addons2/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/nav" element={<Nav1/>}/>
        <Route path="/nav2" element={<Nav2/>}/>
        <Route path="/addonview" element={<Addons1/>}/>
        <Route path="/adminpage" element={<Theme1/>}/>
        <Route path="/utheme" element={<Theme2/>}/>
       
        <Route path="/adminpage" element={<Adminpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;