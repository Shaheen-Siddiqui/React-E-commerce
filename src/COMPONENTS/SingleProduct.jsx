import React,{useContext} from 'react';
import {Cart} from '../CONTEXT/Context';

const SingleProduct = ({values}) => {
let {state:{cart},Dispach} = useContext(Cart);
return (
    <div className="Single">
    <img  className="Singley" src={values.image} alt="" />
    <div className="Flex-outer">
    <div>
      <strong>{values.catogary} </strong>
      <h5>{values.ProductName} </h5>
      <h5>{values.price.split('.')[0]}</h5>
      <h5>({values.raiting}) stars* </h5>
      <span>{values.fastDelevry?(<strong>Fast Delevry</strong>):(<span>4 days Delevry</span> ) }</span>
      </div>

    {
      cart.find(e => e.id ===values.id)?
      
      ( <button onClick={()=> Dispach({type:'REMOVE_FROM_CART',payload:values})} className="btn btn-primary">  Remove from cart</button>):
      ( <button onClick={()=> Dispach({type:'ADD_TO_CART',payload:values})} className="btn btn-primary btn-success"> add to cart</button>)

    }
    
    </div>
    </div>
  )
}
export default SingleProduct;
