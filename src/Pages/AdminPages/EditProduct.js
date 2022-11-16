import React from 'react'
import EditOrNewProduct from '../../Components/AdminComponents/EditOrNewProduct'

const EditProduct = () => {





  return (
    <div>
        <EditOrNewProduct headText={'Edit Product'} btnText={'Update Product'}  sucessMessageProducts={'Product has been Updated successfully'} action={'edit'}  />

    </div>
  )
}

export default EditProduct