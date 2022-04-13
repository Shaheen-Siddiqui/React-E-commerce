import React,{useContext,useState} from 'react';
import {Usefilter} from '../CONTEXT/FilterContext';

const Filters = () => {
  let[state,setState]=useState(1);
  let {filterState:{catogaryForMen,catogaryForWomen,isStock,A_D_Order},FilterDispach}=Usefilter()

  return (
<>
<form onSubmit={(e)=> e.preventDefault()}>
<div className="sidebar">
              <h2>Filter Products :-</h2>
              <div className="outerMain">
                 <div className="inner"> <input onChange={(e)=> FilterDispach({type:'CTRY_FOR_MEN',payload:e.target.checked})} checked={catogaryForMen} type="checkbox" className="for_H_w" /> Male</div>
                 <div className="inner"> <input onChange={(e)=> FilterDispach({type:'CTRY_FOR_WOMEN',payload:e.target.checked})} checked={catogaryForWomen} type="checkbox" className="for_H_w" /> Female</div>

                 <div className="inner"> <input type="checkbox" className="for_H_w" checked={isStock} onChange={(e)=> FilterDispach({type:'IN_STOCK',payload:e.target.checked})} /> isStocke</div>
                  
                 <div className="inner"> <input onChange={()=> FilterDispach({type:'THREE_&_ABOVE'}) } type="radio" name='position' className="for_H_w"/> 3 stars***& above***</div>
                 <div className="inner"> <input onChange={()=> FilterDispach({type:'FOUR_AND_ABOVE'}) } type="radio" name='position' className="for_H_w"/> 4 stars***& above***</div>
                 <div className="inner"> <input onChange={()=> FilterDispach({type:'FAST_DELEVRY'}) } type="radio" name='fastDelevry' className="for_H_w"/>Fast Delevry Products</div>

                 <button checked={A_D_Order} onClick={()=> FilterDispach({type:'ASCENDING'})} className="btn btn-dark inner">Ascending</button>
                 <button checked={A_D_Order} onClick={()=> FilterDispach({type:'DESCENDING'})} className="btn btn-dark inner">Descending</button>
                  
                <input type="reset" onClick={()=> FilterDispach({type:'CLEAR_CART'})} className="btn- btn-outline-danger inner" value={'Clear Fills'} />
              </div>
      </div>
      </form>
</>    
 )};

export default Filters;
