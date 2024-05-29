import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Home';
import Login from './Login';
import About from './About';
import ContactUs from './Contactus';
import User, { Orders, Profile } from './User';



function Header(){
  return(
    <>
      <ul className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/user">User</Link></li>
      </ul>
    </>
  )
}


function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/user" element={<User/>}>
        <Route path="orders" element={<Orders/>} />
        <Route path="Profile" element={<Profile/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
