import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';   // to get the data from store

function Navbar ()  {
    const items = useSelector((state) => state.cart);
  return (
    <div style={{display : 'flex' , alignItem : 'center' , justifyContent : 'space-between'}}>
        <span className='logo'>REDUX-STORE</span>
        <div>
            <Link className='navLink'  to = '/'>Home</Link>
            <Link className='navLink' to = '/cart'>Cart</Link>
            <span className='cartCount'>Cart Items: {items.length} </span>
        </div>
       
    </div>
  )
}

export default Navbar;