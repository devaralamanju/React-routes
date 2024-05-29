import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Home';
import Login from './Login';
import About from './About';
import ContactUs from './Contactus';
import User, { Orders, Profile } from './User';
import ContactUsWithAnchor from './ContactUsWithAnchor';
import ErrorPage from  './ErrorPage';
import ListsKeys from './ListsKeys'; 



function Header(){
  return(
    <>
      <ul className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/10?posts=5&category=admin">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/user">User</Link></li>
        {/* <li><a href="/ContactUsWithAnchor"></a></li> */}
      </ul>
    </>
  )
}


function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
  <ListsKeys/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about/:id" element={<About/>} />
      <Route path="/contact/:id/:name" element={<ContactUs/>} />
      <Route path="/contactusanchor" element={<ContactUsWithAnchor/>} />
      <Route path="/user" element={<User/>}>
        <Route path="orders" element={<Orders/>} />
        <Route path="Profile" element={<Profile/>} />
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
