import React, { useContext , useState , useEffect} from 'react'
import '../../Style/products.css'
import Store from '../../Context/Store';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductRow = (props) => {

    const context = useContext(Store)


    const [photo , setPhoto] = useState('')
  
  
  
      useEffect(()=>{
        context.storeCheckPhoto(props.product.photo,setPhoto)
      },[])


  return (
    <tr className='tr-products  ' >

    <th scope="row" className='tds-products '>
    <div className='centerItems-products'>
        <span className='text-info  dn row-heads-products'>Product ID : </span> 
        <span className='text-black-50'>{props.product.id}</span>
        </div>
      </th>
    <td className='td-img-products tds-products text-center '>
        <div className='centerItems-products'>
          <span className='text-info  dn row-heads-products'>Product Image : </span>
          {/* <img src={product.photo} className='img-products' /> */}
          <img src={photo} className='img-products' />

        </div>
      </td>
    <td className='text-products tds-products text-center '>
      <div className='centerItems-products'>
        <span className='text-info dn row-heads-products'>Product Name : </span>
        <span className='text-black-50'>{props.product.type}</span>
      </div>
    </td>
    <td className='text-products tds-products text-center '>
      <div className='centerItems-products'>
        <span className='text-info  dn  row-heads-products'>Product Price : </span>
        <span className='text-black-50'>${props.product.price}</span>
      </div>
    </td>
    <td className={ 'text-muted text-products tds-products text-center '}>
    <div className='centerItems-products'>
      <span className='text-info  dn  row-heads-products'>Product Items : </span>
      <span className='text-black-50'>{props.product.avalibale}</span>
      </div>
    </td>
  
  <td>
    <div className='centerItems-products actions-products-height'>
        <div className='d-flex justify-content-around align-items-center actions-products w-100 actions-products-direction'>
          <Button color='danger' size='md' className='btns-products' onClick={()=>props.deleteProduct(props.product)} >Delete</Button>
            
            <Link to={`/dashboard/products/viewproduct/${props.product.id}`} className='btns-products'>
                  <Button color='primary' size='md' className='btns-products btns-products2'>View</Button>
            </Link>

            <Link to={`/dashboard/products/editproduct/${props.product.id}`} className='btns-products'>
                <Button color='warning' size='md' className='btns-products btns-products2'>Edit</Button>
            </Link>
        </div>
      </div>
  </td>
</tr>
  )
}

export default ProductRow