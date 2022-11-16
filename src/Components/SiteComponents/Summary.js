import React ,{ useContext }  from 'react'
import { Button, Container } from 'reactstrap'
import Store from '../../Context/Store'
import '../../Style/Summary.css'


const Summary = (props) => {

    const context = useContext(Store)

  return (
    <Container className='mt-3 d-flex flex-column justify-content-around align-items-center'>
        <h1 className='text-center text-muted checkout-head'>CheckOut</h1>

        <div className='checkout-products border border-1 p-4 border-primary my-3'>
            <h5 className='text-center text-muted summary-head ' >Summary</h5>
            <hr />
        {
            context.storecartProducts.map((product)=>(
                <div key={product.id}>
                    <h6 className='h-size'>Product : {product.brand} {product.type}</h6>
                    <h6 className='h-size'>Price : ${product.price}</h6>
                    <h6 className='h-size'>{product.count} items</h6>
                    <hr />
                </div>
            ))
        }
            <h6 className='text-warning h-total-sum'>Total : ${context.storeGetTotalPrice()}</h6>

        </div>

        <Button className='mb-5 mt-3 btn-summary' color='primary' size="md" onClick={props.changeContinue} >Continue</Button>

    </Container>
  )
}

export default Summary