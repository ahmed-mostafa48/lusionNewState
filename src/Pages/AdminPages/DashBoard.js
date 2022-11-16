import React from 'react'
import { Container } from 'reactstrap'
import ProductsDashBoard from '../../Components/AdminComponents/ProductsDashBoard'
import UsersDashBoard from '../../Components/AdminComponents/UsersDashBoard'
import '../../Style/DashBoard.css'

const DashBoard = () => {



  return (
    <Container fluid  className='row d-flex  justify-content-around align-items-center mt-5'>
      
  
        <div className='col-xl-6  col-lg-10 col-md-11 col-sm-12 mrg-dash'>
            <ProductsDashBoard />
        </div>

        <div className='col-xl-6 col-lg-10 col-md-11 col-sm-12'>
            <UsersDashBoard />
        </div>


    </Container>
  )
}

export default DashBoard