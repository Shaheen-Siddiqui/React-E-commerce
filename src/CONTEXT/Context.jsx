import {createContext,useReducer} from 'react';
import {CardReducer} from './CardReducer';
import Products from './Products';

export const Cart = createContext();

const Context = ({children}) => {
  const initialState={
    Products:Products,
    cart:[],
  }
  let[state,Dispach]=useReducer(CardReducer,initialState);

  return (
    <Cart.Provider value={{state,Dispach}}>
    {children}
    </Cart.Provider>
  )
}
export {Context};
