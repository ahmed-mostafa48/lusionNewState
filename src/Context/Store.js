import { createContext } from "react";

const Store = createContext({
    storeHomeProducts2 : [],
    storeStyleProducts : [],
    storeShopProducts : [],
    storeBestSellProducts : [],
    storecartProducts : [],
    storeTotal : 0,
    storeAddProduct : () =>{},
    storeIncrementProduct : () =>{},
    storeDecrementProduct : () =>{},
    storeRemoveProduct : () =>{},
    storeShowLength : () =>{},
    storeGetTotal : function (){},
    storeGetTotalPrice : function (){},

    storeIncludesNumber : function (){},
    storeIncludesSpaceNoNumber : function (){},
    storeCheckReturn : () =>{},
    storeSymbolCheck :[],
    storeSymbolAndSpaceCheck : [],
    storeUserSymbolCheck :[],
    storePhoneCheck : [],
    storeEmailCheck : [],
    storeCharsCheck : [],
    storeLoggedUser : {} ,
    storeSetLoggedUser :  () =>{},
    storeSetLoggedUserCheck :  () =>{},
    storeLoggedUserCheck : false ,
    storeLogIn :  () =>{},
    storeSignOut :  () =>{},
    
    storeCheckPhoto : ()=>{}, 


})

export default Store