import React from 'react'
import { Card, CardBody ,CardText, CardImg } from 'reactstrap';
import {AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import '../Style/CartProduct.css'


function CartProduct(props) {
    // console.log(props.cartProduct);

  return (
    <Card style={{width: '15rem'}} className=' bg-info col-lg-4 col-md-4 col-sm-6 col-10 ' >

    <CardBody className=' d-flex flex-column align-items-center justify-content-around text-dark'>
        <CardImg alt="photo" src={props.cartProduct.photo}  style={{width: '9rem'}} className='cart-img' />
        <CardText tag="h5" className='cart-tex' >Name : {props.cartProduct.type.length < 10 ? props.cartProduct.type : props.cartProduct.brand}</CardText>
        <CardText tag="h5" className={ props.cartProduct.avalibale > 0 ? 'text-success cart-tex' : 'text-danger cart-tex'} >In stock : {props.cartProduct.avalibale}</CardText>
        <CardText tag="h5" className='cart-tex' >Price : {props.cartProduct.price}$</CardText>
        <CardText tag="h5" className='cart-tex' >Count : {props.cartProduct.count}</CardText>
        <div className='ics'>
            {/* <AiOutlinePlus className='fs-3 text-success bg-light rounded-circle me-3 cart-ic' onClick={()=>props.addProduct(props.cartProduct)} style={{cursor:'pointer'}}/>
            <AiOutlineMinus className='fs-3 text-warning bg-light rounded-circle me-3 cart-ic'  onClick={()=>props.decrementProduct(props.cartProduct)}  style={{cursor:'pointer'}}/>
            <AiTwotoneDelete className='fs-3 text-danger bg-light rounded-circle cart-ic' onClick={()=>props.removeProduct(props.cartProduct)} style={{cursor:'pointer'}}/>
            */}
            <AiOutlinePlus className='fs-3 text-success bg-light rounded-circle me-3 cart-ic' onClick={()=>props.incrementProduct(props.cartProduct)} />
            <AiOutlineMinus className='fs-3 text-warning bg-light rounded-circle me-3 cart-ic'  onClick={()=>props.decrementProduct(props.cartProduct)} />
            <AiTwotoneDelete className='fs-3 text-danger bg-light rounded-circle cart-ic' onClick={()=>props.removeProduct(props.cartProduct)} />
    
        </div>
    </CardBody>







    </Card>
               
)
}

export default CartProduct;