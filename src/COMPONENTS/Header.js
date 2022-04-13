import React,{useContext} from 'react';
import {Navbar,Container,FormControl,Nav,Dropdown,Badge,} from 'react-bootstrap';
import {FaShoppingCart,FaTrashAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Cart} from '../CONTEXT/Context';
import {Usefilter} from '../CONTEXT/FilterContext';

const Header = () => {
  let {state:{cart},Dispach}=useContext(Cart);
  let {FilterDispach}=Usefilter()


return(<> 
<Navbar bg="dark" variant="dark" style={{ height: "100px", position:"fixed",top:0 ,width:"100%"}} >
   <Container>
     <Navbar.Brand> 
         <Link to="/">SHAPPING CART</Link>
     </Navbar.Brand>
 <FormControl onChange={(e)=> FilterDispach({type:"FILTER_BY_SEARCH",payload:e.target.value})} style={{ width: "500px"}} placeholder="Search a product" />
 <Nav>
     <Dropdown>
         <Dropdown.Toggle variant="success">
         <FaShoppingCart style={{color: "white",fontSize: "25px"}} />       
         <Badge bg="success">{cart.length}</Badge>
         </Dropdown.Toggle>

         <Dropdown.Menu  style={{minWidth:"300px",marginLeft:'-5rem'}}>
         {
          cart.length>0 ?
          ( <>
            {
              cart.map((value)=>{
              return(<>
                <div className="DisingALl">
                  <img className="ImageH_W" src={value.image} alt={value.ProductName} />
                  <div className="For-peras">
                    <h5>{value.ProductName} </h5>
                    <h5>{value.price.split('.')[0]} </h5>
                  </div>
                  <FaTrashAlt onClick={()=>Dispach({type:'DELETE_CART',payload:value})} />
                </div>
              </>) 
            })
            }
            <Link to="/Gotocart">
            <button className="btn btn-dark CartBtn">Go_to_Cart </button>
            </Link>
            </>)
          :
          (<b><h5 style={{padding:"10px"}}>No item in Cart</h5></b> )
         }
         </Dropdown.Menu>
     </Dropdown>
 </Nav>
   </Container>
 </Navbar>

</>)     
}

export default Header;
