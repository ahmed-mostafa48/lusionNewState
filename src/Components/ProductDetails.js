import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import '../Style/ProductDetails.css'

function ProductDetails(props) {

    const location = useLocation()
    // console.log(location.state);

    const navigate = useNavigate()

 
     

  return (

    <Container>
    
        <div className='d-flex flex-column justify-content-around align-items-center mt-3'>
    
            <h1 className='mb-5 text-info details-tit'>Product Details</h1>
            <div className='row d-flex justify-content-between prod-detail' >
                <div className='d-flex justify-content-between p-0 col-sm-5  col-10'>
                    <img alt="" src={location.state.shopProduct.photo} width={'100%'} />
                </div>

                   
                <div className='d-flex flex-column justify-content-between align-items-start col-sm-7 col-10 text-warning details-text'>
                            <h2 className='details-keys' >Type : <span className={location.state.shopProduct.type.length < 10 ? 'text-light details-4' :'text-light details-6' } >{location.state.shopProduct.type}</span></h2>
                            <h2 className='details-keys' >Brand : <span className='text-light details-4'>{location.state.shopProduct.brand}</span></h2>
                            <h2 className={ location.state.shopProduct.avalibale > 0 ? 'details-keys' : 'text-muted text-decoration-line-through details-keys'} >Price : <span className={ location.state.shopProduct.avalibale > 0 ?'text-light  details-4' : 'text-muted details-4' }>{`$${(location.state.shopProduct.price).toFixed(2)}`}</span></h2>
                            <h2 className={ location.state.shopProduct.avalibale > 0 ? 'details-keys' : 'text-muted text-decoration-line-through details-keys'} >Avalibale : <span className={ location.state.shopProduct.avalibale > 0 ? 'text-light  details-4' : 'text-muted details-4'}>{location.state.shopProduct.avalibale}</span></h2>
                            <h2 className={ location.state.shopProduct.count > 0 ? 'details-keys' : 'text-muted text-decoration-line-through details-keys'} >In Cart : <span className={ location.state.shopProduct.count > 0 ? 'text-success  details-4' : 'text-muted details-4'}>{location.state.shopProduct.count}</span></h2>

                            
                            <h2 className='text-warning details-keys' >Colors : 
                                {location.state.shopProduct.colors.map((p,i,a)=>(
                                    (i+1 < a.length) ? <span className='text-light details-6 ' key={i} > {p + ' /'}</span> : <span className='text-light details-6 ' key={i} >{p}</span>
                                ))}
                                </h2>
                            
                            
                            <h2 className='text-warning details-keys' >Sizes : 
                                {location.state.shopProduct.sizes.map((p,i,a)=>(
                                   (i+1 < a.length) ? <span  className='text-light details-5 ' key={i} > {p + ' /'}</span> :  <span  className='text-light details-5 ' key={i} > {p}</span>
                                ))
                                }
                            </h2>

                            <Button color="light" size="md" className='fw-bold' onClick={()=>navigate('/Cart',props.addProduct(location.state.shopProduct))} >buy</Button>

                            {/* <Button color="light" size="md" onClick={()=>props.addProduct(location.state.shopProduct)} >
                                <span onClick={()=>navigate('/Cart')}>buy</span>
                                <Link to={'/Cart'}>buy</Link>
                            </Button> */}
                 </div>
            </div>
                   

            
            <Button className=' my-5 bt-shop-dt' color="light" outline size="md" onClick={()=>navigate('/Shop')}  >Back to Shop</Button>
        </div>
        </Container>
       

  )
}

export default ProductDetails;



