import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Route, Routes } from 'react-router';
import List from './pages/List/List.jsx';
import Orders from './pages/Orders/Oreders.jsx';
import Add from './pages/Add/Add.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url="http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
            <Route path="/add" element={<Add url={url}/>}></Route>
            <Route path="/list" element={<List url={url}/>}></Route>
            <Route path="/orders" element={<Orders url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
