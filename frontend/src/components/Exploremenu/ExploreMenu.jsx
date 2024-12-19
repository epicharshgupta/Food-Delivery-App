import React from 'react'
import './ExploreMenu.css';
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id="exploremenu">
    <h1>Explore Our menu</h1>
    <p className='menutext'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your 
    cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='menulist'>
        {
            menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                    className='menulistitem' key={index}>
                        <img className={category===item.menu_name?"active":""}
                        src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>

                    </div>
                )
            })
        }
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu;
