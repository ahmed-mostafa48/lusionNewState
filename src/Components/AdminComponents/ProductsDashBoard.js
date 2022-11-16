import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import '../../Style/DashBoard.css'

const ProductsDashBoard = () => {

  const [products , setProducts] = useState([])
  
  const [prices , setPrices] = useState([])
  
  const [fewestItemsProduct , setFewestItemsProduct] = useState({})

  const [noImageProducts, setNoImageProducts] = useState([])




  useEffect(()=>{

    axios({
      method : 'get',
      url : 'http://localhost:9000/shopProducts'
    }).then((info)=>{

      setProducts(info.data)


      // console.log(info.data);

    let pricesTemp =  info.data.map((product)=>{
        return product.price
    })

    setPrices(pricesTemp)

    // console.log(prices);

  




    let fewestItemsProductTemp = info.data.reduce((acc , curr )=>{
        return acc.avalibale < curr.avalibale ? acc : curr
        // return acc.avalibale <= curr.avalibale ? acc : curr
    })

    setFewestItemsProduct(fewestItemsProductTemp)

    // console.log(fewestItemsProduct);

    // console.log(fewestItemsProductTemp);



//////////////////////////////////////////////////////

  



        


      let noImgTemp = []

      info.data.filter((product)=>{
          
        axios.get(product.photo)
        // .then((info2)=>{
        //       if (info2.status === 200) { }
                  
        //     })
            .catch((err)=>{
             
                    if (err.request.status !== 200 || err.response.status !== 200) {
    
    
    
                      // return product

                      noImgTemp.push(product)
    
                      // return noImgTemp
    
                      setNoImageProducts(noImgTemp)
    
    
                    }
                
                   
    
            })
            // .then((res)=>{
            //   // console.log(res);
            //   // setNoImageProducts(res)          
            // })
        
            
    
          })
      
          
          // console.log(noImageProducts);



    })


  },[])






  
  return (
    <div className='border border-2 border-muted d-flex flex-column justify-content-around align-items-center text-black-50'>
    <div className='bg-success w-100 mb-4'>
        <h2 className='text-white text-center  py-2 headtxt'>Products</h2>
    </div>

    <h4 className='text-warning tree-txt'>You Have <span className='text-success'>{products.length}</span> Products Available</h4>
    <h6 className='txt2'>With Prices between <span className='text-success'>${Math.min(...prices)}</span> : <span className='text-success'>${Math.max(...prices)}</span></h6>
    <h6 className='txt2'>With <span className='text-success'>{noImageProducts.length}</span> Product has No Image</h6>
  
    <h6 className='mt-2 txt3'>The Product with the fewest number of items is Product No <span className='text-success'>{fewestItemsProduct.id}</span></h6>
    <h6 className='txt2'>With  <span className='text-success '>{fewestItemsProduct.avalibale}</span> item only</h6>
    <div className='d-flex align-items-center mt-1 v-btn'>
        <h6 className='txt2' >To preview that Product click</h6>
        <Link to={`/dashboard/products/viewproduct/${fewestItemsProduct.id}`}>
            <Button color='primary' size='sm' className='ms-2  v-btn2'>View</Button> 
        </Link>
    </div>
    <Link to='/dashboard/products'className='text-decoration-none mt-2 mb-3'>
        <Button color='success' className='m-btn'>Manage Products</Button>
    </Link>
</div>
  )
}

export default ProductsDashBoard