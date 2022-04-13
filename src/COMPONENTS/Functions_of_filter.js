
export const Categoryfaction = (Product, {catogaryForMen, catogaryForWomen}) => {

  let Empaty = [];

  if (catogaryForMen === false && catogaryForWomen === false) {
    Empaty = Product;
  }
  if (catogaryForMen) {
    Empaty = Empaty.concat(Product.filter(Elem => Elem.catogary === 'men'));
  }
  if (catogaryForWomen) {
    Empaty = Empaty.concat(Product.filter(Elem => Elem.catogary === 'women'));
  }
  return Empaty;
};

//  PRODUCT IN STOCK FUNCTION //
export const StockFunction = (Product,{inStoke})=>{
  if (inStoke
    ) {
    
    return Product.filter(Elem=> Elem.inStoke===true);
  }
  return Product
};

// RAITING THREE_ABOVE RAITING FOUR_ABOVE FUNCTION //
export const RaitingFunction =(Product ,{raiting} )=>{

  if (raiting==='THREE_&_ABOVE') {
    return Product.filter(Elem=> Elem.raiting>=3)
  }

  if (raiting==='FOUR_AND_ABOVE') {
    return Product.filter(Element=> Element.raiting>=4)
  }
return Product;
};

//  ASCENDIN PRICE FUNCTION  //
export const AscendingFunctio=(product,{A_D_Order}) =>{
  if(A_D_Order==='ASCENDING'){
    return product.sort((a,b)=> a.price-b.price)
  }
  if(A_D_Order==='DESCENDING'){
    return product.sort((a,b)=> b.price-a.price )
  }

  return product;
}

// FAST DELEVRY FUNCTION //

export const FastDelevryFunction=(product,{ fastDelevry}) =>{
  if (fastDelevry==='FAST_DELEVRY') {
    return product.filter(Elem =>Elem.fastDelevry===true)
  }
return product

}
// SEARCH FILTER FUNTION //
export const SearchFilter=(product,{SearchFilter})=>{
if (SearchFilter) {
  return product.filter(Elem =>Elem.ProductName.toLowerCase().includes(SearchFilter));
  
  }
return product
};  
