import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Badge, Button, Container, Table } from 'reactstrap'
import Swal from 'sweetalert2'
import ProductRow from '../../Components/AdminComponents/ProductRow'
import '../../Style/products.css'

const Products = () => {

  const [products , setProducts ] = useState([])

  const location = useLocation()


  
  useEffect(()=>{
    getProducts()

  },[])



  const getProducts = ()=> {
    axios({
      method : 'get',
      url : 'http://localhost:9000/shopProducts',
    }).then((info)=>{
      setProducts(info.data) 
      // console.log(products);

    })
  }



  const deleteProduct = (product)=>{


    Swal.fire({
      icon : 'warning',
      title : 'Are you sure ?',
      text : "You won't be able to revert this !" ,
      confirmButtonText : 'Yes, delete Product!',
      showCancelButton : true,
      showCloseButton: true,
      iconColor : '#db4646',
      cancelButtonColor : '#198754',
      confirmButtonColor : '#e42121'

    }).then((popupData)=>{
        if (popupData.isConfirmed) {

          axios({
            method : 'delete',
            url : `http://localhost:9000/shopProducts/${product.id}`
      
          }).then(()=>{
            getProducts()

            Swal.fire({
              icon : 'success',
              title : 'Deleted',
              text : "Product has been deleted." 
            })
          })
          
        }
    })

   
  }






  return (
      <div  className=''>
        <Container fluid >
        
            <Link to={'/dashboard/products/addproduct'}>
              <Button  color='success' className='my-3 btn-add-products' >Add New Product</Button>
            </Link>
              
            <h3 className='text-center '><Badge color="success" className='text-center message-products'>{location.state !== null && location.state.sucessMessageProducts !== undefined ? location.state.sucessMessageProducts : ''}
            </Badge></h3>
          
            <Table hover responsive dark striped className='' >
                <thead className='thead-products'>
                  <tr>
                      <th>ID</th>
                      <th className='text-products text-center'>Product Image</th>
                      <th className='text-products text-center'>Product Name</th>
                      <th className='text-products text-center'>Price</th>
                      <th className='text-products text-center'>Items</th>
                      <th className='text-products text-center'>Controls</th>
                  </tr>
                </thead>
                <tbody className="table-light fw-bold" >

                  {
                    products.map((product)=>(

                      <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} />
                      
                    ))
                  }
                  
              
                </tbody>
              </Table>

          </Container>
    </div>

  )
}

export default Products