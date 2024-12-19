import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdownload = () => {
  return (
    <div className='appdo' id="appdo">

        <p>For Better Experience Download
        Tomato App</p>
        <div className='platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />


        </div>
    </div>
  )
}

export default Appdownload
