import React,{useContext,useState,useEffect} from 'react';
import {Cart} from '../CONTEXT/Context';
import {FaTrashAlt} from 'react-icons/fa';
import {FaMinusCircle,FaPlusSquare} from 'react-icons/fa';

const Gotocart = () => {
let {state:{cart},Dispach} = useContext(Cart)
let[total,setTotal] = useState()
  
let [Quantiti,setQuantity]=useState(1)

const INCREMENT=()=>{
  setQuantity(Quantiti+1)
  
}
const DECREMENT=()=>{
  setQuantity(Quantiti-1)
}

useEffect(()=>{
  setTotal(()=>{
    return cart.reduce((InitialValue,ArrVal)=>{
      return (InitialValue+ Number(ArrVal.price.split('.')[0]));
    },0)
  })

},[cart]);

  return (
    <div className="container-c">
      {
        cart.map(({image,ProductName,price,raiting,id,Quantity})=>{
            return (<>
        <div className="OUterMain">
        <div className="Comp_des">
        <img className="Image" src={image} alt="brandedThings" />
        <h3>{ProductName}</h3>
        <div className="inc_dec_imp">

        </div>
        <h3>{price.split(".")[0]} </h3>
        <i className="fa fa-trash-o" style={{fontSize:"36px"}}></i>

        <div className="inc_dec_imp">
        <FaMinusCircle onClick={DECREMENT} className='iconsPM'/>
        
        <input className='imputFild' type="text" placeholder={Quantiti}/>
        <FaPlusSquare  onClick={INCREMENT} className='iconsPM'/>
        </div>

        <h3>({raiting}) stars* </h3>
        <FaTrashAlt  onClick={()=>Dispach({type:'DELETE_CART',payload:{id}})} style={{fontSize:'3rem',color:'red',cursor:'pointer'}}/>

      </div>
    </div>
            </>)
        })
      }
<div className="sidebar leftSideBaar">
<h1>Subtotal ({cart.length}) items</h1>

  <b><h3>Total:Rs {total*Quantiti}</h3></b>
 
<button disabled={cart.length==0} className="btn btn-dark CartBtnS"> {cart.length==0?('Button Has been Desabled'):('proceed` to checKout')} </button>

</div>

    </div>
  )
}

export default Gotocart
