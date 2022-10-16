import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody ,CardText, Button, CardImg } from 'reactstrap';
import '../Style/ShopCard.css'


function ShopCard(props) {

  const navigate = useNavigate()
  return (
    <Card style={{width: '15rem'}} className='  col-lg-4 col-md-4 col-sm-6 col-10  p-0' >
    <CardImg alt="photo" src={props.shopProduct.photo} top width="100%" />
        <CardBody className='card-b d-flex flex-column ' >
            <div className='d-flex flex-column align-items-start justify-content-between'>
                <CardText tag="h6" className='text-muted' >{props.shopProduct.type}</CardText>
                <CardText tag="h6" className={ props.shopProduct.avalibale > 0 ?'text-dark fw-bolder' : 'text-muted fw-normal text-decoration-line-through' } >{`$${(props.shopProduct.price).toFixed(2)}`}</CardText>
                <CardText tag="h6" className={ props.shopProduct.avalibale > 0 ? 'text-success av-tx' : 'text-danger av-tx'} >Avalibale : {props.shopProduct.avalibale}</CardText>
            </div>

            <div className='d-flex  justify-content-between bt mt-2 shop-card-btns'>
            <Button color="dark" size='md' className='bt-details' outline  onClick={()=>navigate('/ProductDetails',{state : {shopProduct :props.shopProduct }})} >Details</Button>
                <Button color="dark" outline onClick={()=>props.addProduct(props.shopProduct)} >
                <FaCartPlus /> 
                </Button>
            </div>

        </CardBody>
    </Card>
  )
}


export default ShopCard;