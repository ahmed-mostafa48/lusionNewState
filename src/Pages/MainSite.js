import React from 'react'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../Components/SiteComponents/NavBar'
import Store from '../Context/Store'
import Cart from './SitePages/Cart'
import Home from './SitePages/Home'
import NotFound from './NotFound'
import ProductDetails from './SitePages/ProductDetails'
import Register from './SitePages/Register'
import Shop from './SitePages/Shop'
import SignIn from './SitePages/SignIn'
import User from './SitePages/User'
import CheckOut from './SitePages/CheckOut'

const MainSite = () => {

    const context = useContext(Store)


  return (
    <div className=''>
        
        <NavBar />

        <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop   />} />    
            <Route path="/cart" element={<Cart  />} />   
            {/* <Route path="/productdetails" element={<ProductDetails />} /> */}
            <Route path="/productdetails/:ID" element={<ProductDetails />} />

            <Route path="/register" element={ context.storeLoggedUserCheck ?(<Navigate replace to={`/user/${context.storeLoggedUser.userName}`}/>)  :  (<Register /> ) }   />
            <Route path="/signin" element={ context.storeLoggedUserCheck  ? (<Navigate replace to={`/user/${context.storeLoggedUser.userName}`} />) :  (<SignIn /> )}   />         
                
                
            <Route path="/user/:username" element={ context.storeLoggedUserCheck  ? (<User /> ) : (<Navigate replace to="/signin" />) }   />

            {/* <Route path="/checkout" element={<CheckOut   />} />   */}
            {/* <Route path="/checkout" element={ context.storeLoggedUserCheck  ? <CheckOut   /> : <SignIn /> } />   */}
            <Route path="/checkout" element={ context.storeLoggedUserCheck  ? (<CheckOut   /> ): (<Navigate replace to="/signin" />) } />  


            <Route path="*" element={<NotFound />} />

        </Routes>


 {/* 

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop   />} />    
          <Route path="/cart" element={<Cart cartProducts={cartProducts} />} />   
          <Route path="/productdetails" element={<ProductDetails />} /> */}
          {/* <Route path="/productdetails/:ID" element={<ProductDetails />} /> */}

        {/* //////// 1 //////////// */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/:username" element={<User />} /> */}
        {/* //////// 1 //////////// */}

        {/* //////// 2 //////////// */}
          {/* <Route path={"/signin" } element={loggedUserCheck === true ? <User /> : <SignIn /> } />
          <Route path={"/register" } element={loggedUserCheck === true ? <User /> : <Register /> } />
          <Route path={"/user/:username" } element={loggedUserCheck === true ? <User /> : <SignIn /> } /> */}
        {/* //////// 2 //////////// */}



        {/* //////// 3 //////////// */}

        {/* {
          loggedUserCheck === true ?
            <>
              <Route path={"/signin" } element={<User />} />
              <Route path={"/register" } element={<User />} />
              <Route path={"/user/:username" } element={<User />} />
            </>
            :
            <>
            <Route path={"/signin" } element={<SignIn />} />
              <Route path={"/register" } element={<Register />} />
              <Route path={"/user/:username" } element={<SignIn />} />
          </>
        } */}
        
        {/* //////// 3 //////////// */}



           {/* //////// 4 //////////// */}






          {/* <Route path="/register" element={ !loggedUserCheck ? (<Register /> ): (<Navigate replace to={`/user/${loggedUser.userName}`}/>)  }   />
          <Route path="/signin" element={ !loggedUserCheck ?  (<SignIn /> ) : (<Navigate replace to={`/user/${loggedUser.userName}`} />)}   />          */}
          

          {/* <Route path="/register" element={ loggedUserCheck ?(<Navigate replace to={`/user/${loggedUser.userName}`}/>)  :  (<Register /> ) }   />
          <Route path="/signin" element={ loggedUserCheck  ? (<Navigate replace to={`/user/${loggedUser.userName}`} />) :  (<SignIn /> )}   />         
          
          
          <Route path="/user/:username" element={ loggedUserCheck  ? (<User /> ) : (<Navigate replace to="/signin" />) }   /> */}
          
        {/* //////// 4 //////////// */}



        {/* </Routes> */}



    </div>
  )
}

export default MainSite