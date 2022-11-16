import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import CartProduct from '../../Components/SiteComponents/CartProduct';
import '../../Style/Cart.css'
import Store from '../../Context/Store';

function Cart() {

      const navigate = useNavigate()

      const context = useContext(Store)

  
  return (
    <div className='d-flex flex-column align-items-center justify-content-between' >

     
{ context.storeShowLength() > 0 ?

      <Container className=' mt-5 '>

        <div className='cart-total-lines d-flex align-items-center justify-content-center py-1 mb-3'>
          <h4 className='me-4 cart-total'>Total Price is <span className='text-warning'>${context.storeGetTotalPrice()}</span></h4>
          <Button className='bt-cart ' color="light" outline size="sm" onClick={()=>navigate('/Shop')}  >Continue Shopping</Button>
        </div>


        <div className='row d-flex align-items-center justify-content-center'  style={{gap: '70px'}}>
        {
          context.storecartProducts.map((cartProduct)=>(
            cartProduct.count > 0 && 
            <CartProduct  key={cartProduct.id+'cart'} cartProduct={cartProduct}   />
            
          ))
        }
        </div>
        <div className='d-flex flex-column align-items-center'>
        
          <Link to={'/checkout'}>
          {/* <Link to={context.storeLoggedUserCheck === true ? '/checkout' : '/signin'}> */}
          {/* <Link to={context.storeLoggedUserCheck === true && '/checkout'}> */}
              <Button className='my-5 pay-bt' color='primary' size="md" >Proceed To Pay</Button>
          </Link>
        </div>

      </Container>

       :
       
       
       
       <div className='empty-cart bg-white w-100 d-flex flex-column align-items-center justify-content-center'>
              <h4 className='text-danger cart-empty-line1'>Your Shopping Cart IS Empty</h4>
              <h4 className='text-dark cart-empty-line2'>Please go to Products Section to <Link to={'/shop'} className='text-success'>Start Shopping</Link></h4>
        </div>
       

  
      } 



    </div>
  )
}


export default Cart;