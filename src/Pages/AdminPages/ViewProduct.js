import React from 'react'
import Store from '../../Context/Store';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';
import '../../Style/ViewProduct.css'

const ViewProduct = () => {

  const {ID} = useParams()

  const [productObject , setProductObject] = useState({})

  const context = useContext(Store)

  const [photo , setPhoto] = useState('')

  useEffect(()=>{
    
    axios({
        method : 'get',
        url : `http://localhost:9000/shopProducts/${ID}`
    }).then((info)=>{

      context.storeCheckPhoto(info.data.photo,setPhoto)
      setProductObject(info.data)
  })
    
  },[])


  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-3'>
        <Card style={{width: '15rem'}} className=' bg-white col-lg-4 col-md-4 col-sm-6 col-10  p-0 card-wd' >
            <CardBody className=' d-flex flex-column align-items-center justify-content-around text-dark  p-2'>
              <CardImg alt="photo" src={photo}  width="100%" className='mb-3' />

              <div className='p-0 w-100 text-black-50 body-div'>
                <CardText tag="h6" className='details-head-products ms-2' >Product Details</CardText>

                <CardText tag="h6" className='cart-tex-products text-dark ms-3' >Code : #{productObject.id}</CardText>
                <CardText tag="h6" className='cart-tex-products text-dark ms-3' >Type : {productObject.type}</CardText>
                <CardText tag="h6" className='cart-tex-products text-dark ms-3' >Brand : {productObject.brand}</CardText>
                <CardText tag="h6" className='cart-tex-products text-dark ms-3 ' >Price : ${productObject.price}</CardText>
                
                { productObject.colors !== undefined && productObject.sizes !== undefined &&
                    <div className='mb-2'>
                        <CardText tag="h6" className='cart-tex-products text-dark ms-3' >Sizes : 
                          {productObject.sizes.map((p,i,a)=>(
                              (i+1 < a.length) ? <span  className=' ' key={i} > {p + ' / '}</span> :  <span  className=' ' key={i} > {p}</span>
                          ))
                          }
                        </CardText>
                        
                        <CardText className='cart-tex-products text-dark ms-3' >Colors : 
                          {productObject.colors.map((p,i,a)=>(
                              (i+1 < a.length) ? <span className=' ' key={i} > {p + ' / '}</span> : <span className=' ' key={i} >{p}</span>
                          ))}
                          </CardText>
                      
                    </div>
                }



              </div>

              <CardText tag="h6" className='text-black-50 cart-tex-products mt-2' >In stock : {productObject.avalibale} items</CardText>
          </CardBody>
      </Card>


    </div>
  )
}

export default ViewProduct