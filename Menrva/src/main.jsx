import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
<Routes>  
<Route path='/' element={<App></App>} />
<Route path='/about-us' element={<About></About>} />
<Route path='/contact-us' element={<Contact></Contact>} />
</Routes>

</BrowserRouter>
)
