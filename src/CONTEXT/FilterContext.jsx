import React,{createContext,useReducer,useContext} from 'react';
import {FilterReducer} from './FilterReducer'


const FilterCart=createContext();
const FilterContext = ({children}) => {
  const InitialState={
    catogaryForMen:false,
    catogaryForWomen:false,
    inStoke:false,
    raiting:'',
    A_D_Order:null,
    fastDelevry:null,
    SearchFilter:'',
  }

let [filterState,FilterDispach]=useReducer(FilterReducer,InitialState);
  return (
    <div>
      <FilterCart.Provider value={{filterState,FilterDispach}}>
            {children}
      </FilterCart.Provider>
    </div>
  )
}
const Usefilter=()=>useContext(FilterCart);   
export {FilterContext,Usefilter};
