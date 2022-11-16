import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody ,CardText, Button, CardImg } from 'reactstrap';
import Store from '../../Context/Store';
import '../../Style/ShopCard.css'
import { useState } from 'react';
import { useEffect } from 'react';

function ShopCard(props) {



  const navigate = useNavigate()

  const context = useContext(Store)


  const [photo , setPhoto] = useState('')



    useEffect(()=>{
      context.storeCheckPhoto(props.shopProduct.photo,setPhoto)
    },[])


  return (
    <Card style={{width: '15rem'}} className='  col-lg-4 col-md-4 col-sm-6 col-10  p-0' >
      
      <CardImg alt="photo" src={photo} top width="100%"/> 

      <CardBody className='card-b d-flex flex-column ' >
            <div className='d-flex flex-column align-items-start justify-content-between'>
                <CardText tag="h6" className='text-muted' >{props.shopProduct.type}</CardText>
                <CardText tag="h6" className={ props.shopProduct.avalibale > 0 ?'text-dark fw-bolder' : 'text-muted fw-normal text-decoration-line-through' } >{`$${(props.shopProduct.price)}`}</CardText>
                {/* <CardText tag="h6" className={ props.shopProduct.avalibale > 0 ?'text-dark fw-bolder' : 'text-muted fw-normal text-decoration-line-through' } >{`$${(props.shopProduct.price).toFixed(2)}`}</CardText> */}
                <CardText tag="h6" className={ props.shopProduct.avalibale > 0 ? 'text-success av-tx' : 'text-danger av-tx'} >Avalibale : {props.shopProduct.avalibale}</CardText>
            </div>

            <div className='d-flex  justify-content-between bt mt-2 shop-card-btns'>

                {/* <Button color="dark" size='md' className='bt-details' outline  onClick={()=>navigate('/productdetails',{state : {shopProduct :props.shopProduct }})} >Details</Button> */}

                <Link to={`/productdetails/${props.shopProduct.id}`}>
                  <Button color="dark" size='md' className='bt-details' >Details</Button>
                </Link>

                <Button color="dark" outline onClick={()=>context.storeAddProduct(props.shopProduct)} >
                  <FaCartPlus /> 
                </Button>
              </div>

        </CardBody>
    </Card>
  )
}


export default ShopCard;