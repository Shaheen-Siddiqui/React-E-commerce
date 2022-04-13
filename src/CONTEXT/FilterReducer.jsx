export const FilterReducer =(filterState, action)=>{
    switch (action.type) {
        
        case 'CTRY_FOR_MEN':
            return {...filterState,catogaryForMen:action.payload}
        case 'CTRY_FOR_WOMEN':
            return {...filterState,catogaryForWomen:action.payload}    
        case 'IN_STOCK':
            return {...filterState,inStoke:action.payload}
        case 'THREE_&_ABOVE':
            return {...filterState,raiting:action.type}
        case 'FOUR_AND_ABOVE':
            return {...filterState,raiting:action.type }
        case 'ASCENDING':
            return {...filterState,A_D_Order:action.type}
        case 'DESCENDING':
            return {...filterState,A_D_Order:action.type }
        case 'FAST_DELEVRY':
            return {...filterState,fastDelevry:action.type}
        case 'FILTER_BY_SEARCH':
            return {...filterState,SearchFilter:action.payload}    
        case 'CLEAR_CART':
            return {
                ...filterState,
                catogaryForMen:false,
                catogaryForWomen:false,
                inStoke:false,
                raiting:'',
                A_D_Order:'',
                SearchFilter:'',

            }
            
        default:
            break;
    }
};

