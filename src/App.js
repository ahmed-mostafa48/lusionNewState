
import s1 from './Images/s1.jpg'
import s2 from './Images/s2.jpg'
import s3 from './Images/s3.jpg'
import s4 from './Images/s4.jpg'

// import t1 from './Images/t1.jpg'
// import t2 from './Images/t2.jpg'
// import t3 from './Images/t3.jpg'
// import t4 from './Images/t4.jpg'

import fifth1 from './Images/fifth1.jpg'
import fifth2 from './Images/fifth2.jpg'
import fifth3 from './Images/fifth3.jpg'
import fifth4 from './Images/fifth4.jpg'
import fifth5 from './Images/fifth5.jpg'
import fifth6 from './Images/fifth6.jpg'

// import shopC1 from './Images/shopC1.jpg'
// import shopC2 from './Images/shopC2.jpg'
// import shopC3 from './Images/shopC3.jpg'
// import shopC4 from './Images/shopC4.jpg'
// import shopC5 from './Images/shopC5.jpg'
// import shopC6 from './Images/shopC6.jpg'
// import shopC7 from './Images/shopC7.jpg'
// import shopC8 from './Images/shopC8.jpg'

import React, {useEffect, useState  } from "react";
import { Navigate, Route, Routes, useNavigate, useParams} from "react-router-dom";

import './Style/App.css'
import axios from 'axios'
import Store from './Context/Store'
import MainSite from './Pages/MainSite'
import ControlPanel from './Pages/ControlPanel'
import NotFound from "./Pages/NotFound";
import NotAuthorized from './Pages/AdminPages/NotAuthorized'


function App() {



const navigate = useNavigate()

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

//   const [bestSellProducts] = useState([
//   {id : 10 , type : 'Quilted Gilet With Hood' , price : 150 , photo : t1, count : 0 , avalibale :10, brand : 'Wrangler' ,sizes : [ 'L' , 'XL'], colors : ['blush','rouge','white'] },
//   {id : 11 , type : 'Quilted Gilet With Hood' , price : 110 , photo : t2 , count : 0 , avalibale :8, brand : 'Woodland' ,sizes : [ 'M' , 'L'], colors : ['white & black','bronze & white'] },
//   {id : 12 , type : 'Quilted Gilet With Hood' , price : 200 , photo : t3 , count : 0 , avalibale :7, brand : 'Reebok' ,sizes : [ 'S' , 'M'], colors : ['white','gray','silver'] },
//   {id : 13 , type : 'Quilted Gilet With Hood' , price : 250 , photo : t4 , count : 0 , avalibale :4, brand : 'Levi’s' ,sizes : [ 'S', 'M' , 'L'], colors : ['white','black','denim'] },
// ])


  const [styleProducts] = useState([
    {id : 1 , photo : fifth1 },
    {id : 2 , photo : fifth2 },
    {id : 3 , photo : fifth3 },
    {id : 4 , photo : fifth4 },
    {id : 5 , photo : fifth5 },
    {id : 6 , photo : fifth6 },
  ])


  // const [shopProducts , setShopProducts] = useState([
  // const [shopProducts ] = useState([
  //   {id : 1 , type : 'Hood' , price : 100 , photo : shopC1 , count : 0 , avalibale :20, brand : 'wrangler' ,sizes : ['M' , 'L'] , colors : ['College Navy','Yankees Blue','white','black'] }, 
  //   {id : 2 , type : 'Shirt ' , price : 120 , photo : shopC2 , count : 0 , avalibale :5, brand : 'HUGO BOSS' ,sizes : ['S' , 'M' , 'L'], colors : ['purple & white','purple & black','YInMn Blue & black'] },
  //   {id : 3 , type : 'Shirt ' , price : 150 , photo : shopC3 , count : 0 , avalibale :14, brand : 'UNIQLO' ,sizes : ['M' , 'L','XL'], colors : ['gray','black','red'] },
  //   {id : 4 , type : 'shirt' , price : 210 , photo : shopC4 , count : 0 , avalibale :9, brand : 'Twillory' ,sizes : ['S' , 'M' , 'L'], colors : ['purple','gray','white'] },
  //   {id : 5 , type : 'shirt' , price : 200 , photo : shopC5 , count : 0 , avalibale :3, brand : 'Rhone' ,sizes : ['S' , 'M' ,'XL'], colors : ['gray & black' ,'denim & black','spruce & black', 'gray & white'] },
  //   {id : 6 , type : 'shirt' , price : 250 , photo : shopC6 , count : 0 , avalibale :8, brand : 'Asket' ,sizes : ['XS' , 'L'], colors : ['black','white','aegean'] },
  //   {id : 7 , type : 'Jeans' , price : 320 , photo : shopC7 , count : 0 , avalibale :20, brand : 'Ash & Erie' ,sizes : [ 'M' , 'L'], colors : ['white','black','silver'] },
  //   {id : 8 , type : 'Jeans' , price : 350 , photo : shopC8 , count : 0 , avalibale :7, brand : 'Everlane' ,sizes : ['S' , 'M' , 'L'], colors : ['Alaskan Blue','UCLA Blue','Tall Ships Blue'] },
  //   {id : 9 , type : 'Hood' , price : 105 , photo : shopC1 , count : 0 , avalibale :20, brand : 'Antigravity' ,sizes : ['S' , 'M'], colors : ['mocha','spruce','inddigo','ocean'] },
  //   ])



  const [shopProducts , setShopProducts] = useState([])

  const [bestSellProducts ,setBestSellProducts] = useState([])

  const [cartProducts , setCartProducts] = useState([])


  const [loggedUser,setLoggedUser] = useState({})
  const [loggedUserCheck,setLoggedUserCheck] = useState(false)




  
  useEffect(()=>{
    axios.get('http://localhost:9000/shopProducts')
    .then((info)=>{
      // console.log(info);
        setShopProducts(info.data)
      
    })

    axios.get('http://localhost:9000/bestSellProducts')
    .then((info)=>{
      // console.log(info);
      setBestSellProducts(info.data)
      
    })

    LogIn()

  // if (localStorage.user !== undefined) {
  //  let userArray =  JSON.parse(localStorage.user)
  //  let lguser= userArray[0]
  //   setLoggedUser(lguser)
  //   setLoggedUserCheck(true)
  //   // console.log(loggedUser);
    
  // }
  // else{
  //   setLoggedUser({})
  //   setLoggedUserCheck(false)

  // }


  },[])




 




 



  const addProduct =(e) => {
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






   const incrementProduct = (e) => {
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

  
  const decrementProduct = (e) => {
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
  



  const removeProduct = (e) => {
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


  const showLength = () => {
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











//////////////////////// Add , edit user checks , methods ////////////////////////////////


   const [symbolAndSpaceCheck] = useState(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ )
   
   const [symbolCheck] = useState(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ )

   const [userSymbolCheck] = useState(/[ `!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/)

   const [phoneCheck] = useState(/^\+(?:[0-9] ?){6,14}[0-9]$/ )

  //  const [emailCheck] = useState(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)

  const [emailCheckExprssion] = useState(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)


   const [charsCheck] = useState(/[a-zA-Z]/ )
  //  const [charsCheck] = useState(/^[a-zA-Z]/ )

   
  function includesNumber(value) {
      return value.split('').filter(v => !isNaN(v)).length !== 0
  }

  function includesSpaceNoNumber(value) {

    return value.split('').filter(v => !isNaN(v) && v !== " " ).length !== 0
   
  }



const checkReturn = (setText,text,setCheck,s,f,condition)=>{
  if (condition === true) {
     s ? setText(`Invalid ${text}`) : setText(`Select your ${text}`)
      setCheck(false)
      return false
  }
  
  else{
     setText(text) 
      setCheck(true)
      return true
  }
}





const LogIn = ()=>{

  if (localStorage.user !== undefined) {
    // let userArray =  JSON.parse(localStorage.user)
    // let lguser= userArray[0]

    let lguser =  JSON.parse(localStorage.user)

     setLoggedUser(lguser)
     setLoggedUserCheck(true)
    //  console.log(loggedUser);
     
   }
   else{
     setLoggedUser({})
     setLoggedUserCheck(false)
 
   }
 
}




const signOut = ()=>{
  localStorage.removeItem("user")
  LogIn()  
  navigate('/signin')
}





     

////////////////////////////////////////////////////////////////////////////////////////////////


const checkPhoto =(photo ,setPhoto)=>{
  
let myPromise = new Promise((res,rej)=>{
      
      
axios.get(photo)
.then((info)=>{
      if (info.status === 200) {
        res(photo)
      }
        
})
.catch((err)=>{
 
        if (err.request.status !== 200 || err.response.status !== 200) {
            // console.log(err);
            rej('https://i.ibb.co/XVsKqy5/default-product-image.webp')

        }
    
   
})



})
.then((dataPhoto)=> setPhoto(dataPhoto) ) 
.catch((defaultPhoto)=> setPhoto(defaultPhoto))


}


///////////////////////////////////////////////////////////////////////




  return(
    <Store.Provider 
      value={{
        storeHomeProducts2 : homeProducts2 ,
        storeStyleProducts : styleProducts ,
        storeShopProducts : shopProducts,
        storeBestSellProducts : bestSellProducts,
        storecartProducts : cartProducts,
        storeTotal : total,
        storeAddProduct : addProduct ,
        storeIncrementProduct : incrementProduct ,
        storeDecrementProduct : decrementProduct,
        storeRemoveProduct : removeProduct,
        storeShowLength : showLength,
        storeGetTotal : getTotal ,
        storeGetTotalPrice : getTotalPrice,

        storeIncludesNumber :includesNumber,
        storeIncludesSpaceNoNumber : includesSpaceNoNumber,
        storeCheckReturn : checkReturn ,
        storeSymbolCheck :symbolCheck,
        storeSymbolAndSpaceCheck : symbolAndSpaceCheck ,
        storeUserSymbolCheck : userSymbolCheck ,
        storePhoneCheck :phoneCheck ,
        storeEmailCheck : emailCheckExprssion ,
        storeCharsCheck : charsCheck ,
        storeLoggedUser : loggedUser ,
        storeSetLoggedUser : setLoggedUser ,
        storeLoggedUserCheck : loggedUserCheck ,
        storeSetLoggedUserCheck : setLoggedUserCheck ,
        storeLogIn : LogIn ,
        storeSignOut : signOut ,
        
        storeCheckPhoto : checkPhoto,




        
      }}
    >

       
          
        <Routes>

          <Route path="*" element={<MainSite />} />
          {/* <Route path="/dashboard/*" element={<ControlPanel />} /> */}
          <Route path="/dashboard/*" element={loggedUser.siteAdmin === true ? <ControlPanel /> : loggedUser.siteAdmin === false ? <NotAuthorized /> : <NotFound /> } />


        </Routes>


    </Store.Provider>
  )
}


export default App;




