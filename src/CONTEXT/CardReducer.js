export const CardReducer = (state,action) => {

    const {cart}=state; //cart Destructured...
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,cart:[...cart,{...action.payload,Quantity:1}]}
        case 'REMOVE_FROM_CART':
            return {...state,cart:cart.filter(i=> i.id!==action.payload.id)}
        case 'DELETE_CART':
            return {...state,cart:cart.filter(i=>i.id!==action.payload.id)}
        case 'FILTER_BY_SEARCH':
            

        default: 
            return state;
    };
};

