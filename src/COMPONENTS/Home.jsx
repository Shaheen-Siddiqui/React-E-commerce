import React,{useContext} from 'react';
import {Cart} from '../CONTEXT/Context';
import './style.css';
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import {Usefilter} from '../CONTEXT/FilterContext';
import {Categoryfaction,StockFunction,RaitingFunction,AscendingFunctio,FastDelevryFunction,SearchFilter} from './Functions_of_filter'

const Home = () => {
let {state:{Products}} = useContext(Cart);
let {filterState}=Usefilter();

let SearchFilterPass = SearchFilter(Products,filterState)
let FastDelevryFunctionPass = FastDelevryFunction(SearchFilterPass,filterState);
let AscendingFunctioPass = AscendingFunctio(FastDelevryFunctionPass,filterState)
const RaitingFunctionPass = RaitingFunction(AscendingFunctioPass,filterState)
const StockFunctionPass = StockFunction(RaitingFunctionPass, filterState)
const categoryfactionpass = Categoryfaction(StockFunctionPass, filterState)

  return (
    <div className="home">
    <Filters />
      <div className="productCantainet">
      {
      categoryfactionpass.map((values)=>{
          return (<>
              <SingleProduct values={{...values}}/> 
          </>)
        })}
      </div>
    </div>
  )
}

export default Home;