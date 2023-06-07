import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {remove} from '../Store/cartSlice';

function Cart ()  {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productID)=>{
       dispatch(remove(productID))
    }
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
            {
              cartItems.map((item) => (
                 <div className='cartCard'>
                      <img style = {{paddingLeft : '20px'}}src = {item.image} alt="" />
                      <h5 style = {{margin : 'auto'}}>{item.title}</h5>
                      <h5 style = {{margin : 'auto'}}>${item.price}</h5>
                      <button className='btn' onClick={()=> handleRemove(item.id)}>Remove</button>
                </div>

              ))
            }

        </div>
    </div>
  )
}

export default Cart;