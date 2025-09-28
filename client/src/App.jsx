
import React, { useContext } from 'react'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Home from './pages/Home'

//  For the Router To link to other pages : 
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import { AppContext } from './context/AppContext'


 import { ToastContainer } from 'react-toastify';
const App = () => {


  const {showLogin} = useContext(AppContext);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50' >
      {/* gradient color is when two or more colors smoothly blend into each other instead of staying solid */}
      {/* bg-gradient-to-b → background gradient going top → bottom (b = bottom).
            from-teal-50 → gradient starts with teal-50 (a very light teal).
            to-orange-50 → gradient ends with orange-50 (a very light orange). */}
  <ToastContainer position='bottom-right' />
  <Navbar/>

  {/*  when showlogin is true then Login page will be mounted  */}
  {showLogin && <Login />}
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
          <Route path='/buy' element={<BuyCredit/>}/>

  
    
    </Routes>
    <Footer/>  {/*  this means footer willl be displayed on all the pages  */}
    
    
    </div>
  )
}

export default App
