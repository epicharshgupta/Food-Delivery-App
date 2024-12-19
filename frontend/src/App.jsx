import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Appdownload from './components/Appdownload/Appdownload';
import { useState } from 'react';
import LoginPop from './components/loginpopup/LoginPop';
import Orderplaced from './pages/Orderplaces/Orderplaced';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/myOrders/MyOrders';


const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  
  return (
    <>
      {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Orderplaced/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>

        </Routes>
        <Appdownload/>

      </div>
      <Footer />
    </>
  )
}

export default App;
