import React ,{useState , useEffect}  from 'react';
import {useDispatch} from 'react-redux';    // to dispatch the action
import { add } from '../Store/cartSlice';

const Products = () => {
    const [products , setProducts] = useState([]);
    const dispatch = useDispatch();
     useEffect(()=> {  //Use axios
         const fetchProduct = async() => {
            const res = await fetch('https://fakestoreapi.com/products')  // await pauses the execution of its surrounding async function until the promise is settled
            const data = await res.json();
            console.log(data);
            setProducts(data);
         };
         fetchProduct();
      
     } , []);

     const handleAdd = (product) => {
         dispatch(add(product))
     };

  return (
    <div className='productsWrapper'>
        {
            products.map( product => (
               <div className='card' key = {product.id}>
                   <img src={product.image} alt="product picture"/>
                   <div style={{height:'100px'}}>
                   <h4 >{product.title}</h4>
                   </div>
                   <h4>${product.price}</h4>
                   <button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>

             </div>

            ))
        }
    </div>

  )
}

export default Products;