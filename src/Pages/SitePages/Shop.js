import React, { useContext } from 'react'
import { Button , Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ShopCard from '../../Components/SiteComponents/ShopCard';
import ShopLogo from '../../Components/SiteComponents/ShopLogo';
import '../../Style/Shop.css'
import Store from '../../Context/Store';



 function Shop() {

  const navigate = useNavigate()

  const context = useContext(Store)



  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>

      <ShopLogo />

      <Container className='my-5 row  d-flex justify-content-center align-items-center' style={{gap: '70px'}}>
      
        {context.storeShopProducts.map((shopProduct)=>(
            <ShopCard key={shopProduct.id+'shop'} shopProduct={shopProduct} />
        ))}

      </Container>

        {/* <div className='d-flex align-items-center justify-content-center'> */}
      <Button color="light" outline    size="lg"  className='b-home' onClick={()=>navigate('/')}  >Back Home</Button>
      {/* </div> */}
      
    </div>
  )
}

export default Shop;