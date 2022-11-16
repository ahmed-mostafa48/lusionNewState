import React, { useContext } from 'react'
import { Card, CardBody ,CardText, CardImg } from 'reactstrap';
import {AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {BsTrashFill} from "react-icons/bs";


import '../../Style/CartProduct.css'
import Store from '../../Context/Store';
import { useState } from 'react';
import { useEffect } from 'react';


function CartProduct(props) {
    // console.log(props.cartProduct);

    const context = useContext(Store)

    const [photo , setPhoto] = useState('')

    useEffect(()=>{
      context.storeCheckPhoto(props.cartProduct.photo,setPhoto)
    },[])


  return (
    <Card style={{width: '12rem'}} className=' bg-white col-lg-4 col-md-4 col-sm-6 col-10  p-0 ' >

    <CardBody className=' d-flex flex-column align-items-center justify-content-around text-dark  p-2'>
        {/* <CardImg alt="photo" src={props.cartProduct.photo}  width="100%" className='cart-img mb-3' /> */}
        <CardImg alt="photo" src={photo}  width="100%" className='cart-img mb-3' />

        <div className='t p-0 w-100 text-black-50 cart-text-div'>
        <CardText tag="h5" className='cart-tex details-head ms-2' >Product Details</CardText>

        <CardText tag="h5" className='cart-tex text-dark ms-3' >Code : #{props.cartProduct.id}</CardText>
            <CardText tag="h5" className='cart-tex text-dark ms-3' >Name : {props.cartProduct.type.length < 10 ? props.cartProduct.type : props.cartProduct.brand}</CardText>
            <CardText tag="h5" className='cart-tex text-dark ms-3 mb-2' >Price : ${props.cartProduct.price}</CardText>
        </div>

        <CardText tag="h6" className='text-black-50 cart-tex mt-2' >In stock : {props.cartProduct.avalibale} more items</CardText>

        <div className='d-flex justify-content-between w-100'>
            <CardText tag="h6" className='cart-tex text-success' >{props.cartProduct.count} item</CardText>

            <div className='ics'>
                <AiOutlineMinus className='fs-5 text-dark bg-warning cart-ic cart-ic-marg'  onClick={()=>context.storeDecrementProduct(props.cartProduct)} />
                <AiOutlinePlus className='fs-5 text-light bg-success cart-ic cart-ic-marg' onClick={()=>context.storeIncrementProduct(props.cartProduct)} />
                <BsTrashFill className='fs-5 text-light bg-danger  cart-ic' onClick={()=>context.storeRemoveProduct(props.cartProduct)} />
            </div>
        </div>
    </CardBody>




    </Card>
               
)
}

export default CartProduct;