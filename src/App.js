
import s1 from './Photos/s1.jpg'
import s2 from './Photos/s2.jpg'
import s3 from './Photos/s3.jpg'
import s4 from './Photos/s4.jpg'

import t1 from './Photos/t1.jpg'
import t2 from './Photos/t2.jpg'
import t3 from './Photos/t3.jpg'
import t4 from './Photos/t4.jpg'

import fifth1 from './Photos/fifth1.jpg'
import fifth2 from './Photos/fifth2.jpg'
import fifth3 from './Photos/fifth3.jpg'
import fifth4 from './Photos/fifth4.jpg'
import fifth5 from './Photos/fifth5.jpg'
import fifth6 from './Photos/fifth6.jpg'

import shopC1 from './Photos/shopC1.jpg'
import shopC2 from './Photos/shopC2.jpg'
import shopC3 from './Photos/shopC3.jpg'
import shopC4 from './Photos/shopC4.jpg'
import shopC5 from './Photos/shopC5.jpg'
import shopC6 from './Photos/shopC6.jpg'
import shopC7 from './Photos/shopC7.jpg'
import shopC8 from './Photos/shopC8.jpg'

import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import './Style/App.css'
import ProductDetails from './Components/ProductDetails'


function App() {


  const [homeProducts2] = useState([
    {id : 1 , type : 'Clothing', items : 5 , photo : s1},
    {id : 2 , type : 'Bag Brand', items : 20  , photo : s2},
    {id : 3 , type : 'Accessories', items : 6  , photo : s3},
    {id : 4 , type : 'Shoes', items : 8  , photo : s4},
  ])

  // const [bestSellProducts] = useState([
  //   {id : 1 , type : 'Quilted Gilet With Hood' , price : 150 , photo : t1 },
  //   {id : 2 , type : 'Quilted Gilet With Hood' , price : 110 , photo : t2 },
  //   {id : 3 , type : 'Quilted Gilet With Hood' , price : 200 , photo : t3 },
  //   {id : 4 , type : 'Quilted Gilet With Hood' , price : 250 , photo : t4 },
  // ])

  const [bestSellProducts] = useState([
  {id : 10 , type : 'Quilted Gilet With Hood' , price : 150 , photo : t1, count : 0 , avalibale :10, brand : 'Wrangler' ,sizes : [ 'L' , 'XL'], colors : ['blush','rouge','white'] },
  {id : 11 , type : 'Quilted Gilet With Hood' , price : 110 , photo : t2 , count : 0 , avalibale :8, brand : 'Woodland' ,sizes : [ 'M' , 'L'], colors : ['white & black','bronze & white'] },
  {id : 12 , type : 'Quilted Gilet With Hood' , price : 200 , photo : t3 , count : 0 , avalibale :7, brand : 'Reebok' ,sizes : [ 'S' , 'M'], colors : ['white','gray','silver'] },
  {id : 13 , type : 'Quilted Gilet With Hood' , price : 250 , photo : t4 , count : 0 , avalibale :4, brand : 'Levi’s' ,sizes : [ 'S', 'M' , 'L'], colors : ['white','black','denim'] },
])


  const [styleProducts] = useState([
    {id : 1 , photo : fifth1 },
    {id : 2 , photo : fifth2 },
    {id : 3 , photo : fifth3 },
    {id : 4 , photo : fifth4 },
    {id : 5 , photo : fifth5 },
    {id : 6 , photo : fifth6 },
  ])


  // const [shopProducts , setShopProducts] = useState([
  const [shopProducts ] = useState([
    {id : 1 , type : 'Hood' , price : 100 , photo : shopC1 , count : 0 , avalibale :20, brand : 'wrangler' ,sizes : ['M' , 'L'] , colors : ['College Navy','Yankees Blue','white','black'] }, 
    {id : 2 , type : 'Shirt ' , price : 120 , photo : shopC2 , count : 0 , avalibale :5, brand : 'HUGO BOSS' ,sizes : ['S' , 'M' , 'L'], colors : ['purple & white','purple & black','YInMn Blue & black'] },
    {id : 3 , type : 'Shirt ' , price : 150 , photo : shopC3 , count : 0 , avalibale :14, brand : 'UNIQLO' ,sizes : ['M' , 'L','XL'], colors : ['gray','black','red'] },
    {id : 4 , type : 'shirt' , price : 210 , photo : shopC4 , count : 0 , avalibale :9, brand : 'Twillory' ,sizes : ['S' , 'M' , 'L'], colors : ['purple','gray','white'] },
    {id : 5 , type : 'shirt' , price : 200 , photo : shopC5 , count : 0 , avalibale :3, brand : 'Rhone' ,sizes : ['S' , 'M' ,'XL'], colors : ['gray & black' ,'denim & black','spruce & black', 'gray & white'] },
    {id : 6 , type : 'shirt' , price : 250 , photo : shopC6 , count : 0 , avalibale :8, brand : 'Asket' ,sizes : ['XS' , 'L'], colors : ['black','white','aegean'] },
    {id : 7 , type : 'Jeans' , price : 320 , photo : shopC7 , count : 0 , avalibale :20, brand : 'Ash & Erie' ,sizes : [ 'M' , 'L'], colors : ['white','black','silver'] },
    {id : 8 , type : 'Jeans' , price : 350 , photo : shopC8 , count : 0 , avalibale :7, brand : 'Everlane' ,sizes : ['S' , 'M' , 'L'], colors : ['Alaskan Blue','UCLA Blue','Tall Ships Blue'] },
    {id : 9 , type : 'Hood' , price : 105 , photo : shopC1 , count : 0 , avalibale :20, brand : 'Antigravity' ,sizes : ['S' , 'M'], colors : ['mocha','spruce','inddigo','ocean'] },
    ])


  


 const [cartProducts , setCartProducts] = useState([])


 



  function addProduct (e){
    let cartPr = cartProducts;
    
    let checkExist = cartProducts.map((p)=>{
     return e.id === p.id ? true : false

    })

    if (! checkExist.includes(true)) {
      e.stock = e.avalibale
      cartPr.push(e)
    }
    cartPr = cartProducts.map((p)=>{
      if (p.id === e.id && p.avalibale > 0 ) {
        p.count ++ 
        p.avalibale --
      }
      return p
    })
    
    setCartProducts(cartPr)

  //   console.log(checkExist);
  //   console.log(cartProducts);

}



  // function addProduct (e){

  //   let temp = e;
  
  //   let y = cartProducts;
    
  //   let checkExist = cartProducts.map((p)=>{
  //    return temp.id == p.id ? true : false
  
  //   })
  
  //   if (! checkExist.includes(true)) {
  //     temp.stock = temp.avalibale
  //     y.push(temp)
  //   }
  //   y = cartProducts.map((p)=>{
  //     if (p.id === temp.id && p.avalibale > 0 ) {
  //       p.count ++ 
  //       p.avalibale --
  //     }
  //     return p
  //   })
    
  //   setCartProducts(y)
  
  // }

  

// function addProduct (e){

    // let x = cartProducts.map((p)=>{
    //  return e.id == p.id ? true : false

    // })

    // if (! x.includes(true)) {
    //   cartProducts.push(e)
    // }
    // cartProducts = cartProducts.map((p)=>{
    //   if (p.id === e.id && p.avalibale > 0 ) {
    //     p.count ++ 
    //     p.avalibale --
    //   }
    //   return p
    // })
    
    // setCartProducts(cartProducts)



    // !x.includes(true) && y.push(e);
    // y = cartProducts.map((p)=>{
    //   p.id === e.id && p.avalibale > 0  && ((p.count +=1 )  &&( p.avalibale -=1));
    //   return p
    // })
    // setCartProducts(y)


  //   console.log(checkExist);
  //   console.log(cartProducts);

  // }






   function incrementProduct (e){
      let updateProducts = cartProducts.map((cartProduct)=>{
      if (e.id === cartProduct.id && cartProduct.avalibale > 0)
      {  cartProduct.count ++ 
        cartProduct.avalibale --
      }
        return cartProduct
      })
    
      setCartProducts(
        updateProducts
      )
  
  }

  
  function decrementProduct (e){
    let updateProducts = cartProducts.map((cartProduct)=>{
    if (e.id === cartProduct.id && cartProduct.count > 1)
    {  cartProduct.count -- 
      cartProduct.avalibale ++
    }
      return cartProduct
    })
  
    setCartProducts(
      updateProducts
    )

}
  



  function removeProduct (e){
    // console.log(e);
    let updateProducts = cartProducts.map((cartProduct)=>{
      if(e.id === cartProduct.id )
      { 
        cartProduct.count = 0
        cartProduct.avalibale = cartProduct.stock
      }
      return cartProduct
    })
   
    updateProducts = cartProducts.filter((cartProduct)=>{
      return e.id !== cartProduct.id 
    })

    setCartProducts(
      updateProducts
    )
  }


  function showLength (){
    let newProducts = cartProducts.filter((cartProduct)=>{
      return cartProduct.count > 0 
    })
      
    return newProducts.length
  }






     /////////way 1 by click on button//////

     const [total , setTotal] = useState(0)

     function getTotal(){
       let totalPrice =  showLength() > 0 ?  cartProducts.map((p)=>p.count * p.price).reduce((acc,cur)=> acc+cur ) : 0
   
       setTotal(totalPrice)
     }




  /////////way 2 direct//////
  function getTotalPrice(){
    let totalPrice = showLength() > 0 ?  cartProducts.map((p)=>p.count * p.price).reduce((acc,cur)=> acc+cur ) : 0
  
      return totalPrice
    }







  



  return(
    <Fragment>
        <NavBar cartProducts={cartProducts} showLength={showLength} />

        <Routes>
          <Route path="/" element={<Home  homeProducts2={homeProducts2} bestSellProducts={bestSellProducts} styleProducts={styleProducts}/>} />
          <Route path="/Shop" element={<Shop shopProducts={shopProducts} addProduct={addProduct}  />} />    
          <Route path="/Cart" element={<Cart cartProducts={cartProducts} incrementProduct={incrementProduct} decrementProduct={decrementProduct} removeProduct={removeProduct} getTotalPrice={getTotalPrice}  getTotal={getTotal} total={total}  showLength={showLength} />} />   
          <Route path="/ProductDetails" element={<ProductDetails addProduct={addProduct} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </Fragment>
  )
}


export default App;




