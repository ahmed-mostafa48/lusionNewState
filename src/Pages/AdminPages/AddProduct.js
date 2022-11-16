import React from 'react'
import EditOrNewProduct from '../../Components/AdminComponents/EditOrNewProduct'

const AddProduct = () => {
  return (
    <div>
        
        <EditOrNewProduct headText={'New Product'} btnText={'Add Product'} sucessMessageProducts={'Product has been added successfully'} action={'add'}  />

    </div>
  )
}

export default AddProduct