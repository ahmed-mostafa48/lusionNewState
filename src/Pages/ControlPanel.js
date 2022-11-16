import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavBar from '../Components/AdminComponents/AdminNavBar'
import AdminSideBar from '../Components/AdminComponents/AdminSideBar'
import AddNewUser from './AdminPages/AddNewUser'
import AddProduct from './AdminPages/AddProduct'
import AdminNotFound from './AdminPages/AdminNotFound'
import DashBoard from './AdminPages/DashBoard'
import EditProduct from './AdminPages/EditProduct'
import EditUser from './AdminPages/EditUser'
import Products from './AdminPages/Products'
import Users from './AdminPages/Users'
import ViewProduct from './AdminPages/ViewProduct'
import ViewUser from './AdminPages/ViewUser'

const ControlPanel = () => {
  return (
    <div className='bg-white'>     

      <AdminNavBar />
      <div className="row ">
        <div className="col-lg-2 col-md-3 col-sm-3 col-4 p-0">
          <AdminSideBar />
        </div>
            <div className="col-lg-10 col-md-9 col-sm-9  col-8 p-0 bg-white">
              <Routes>
                <Route path="" element={<DashBoard />} />
                <Route path="users" element={<Users />} />
                <Route path="users/addnewuser" element={<AddNewUser />} />
                <Route path="users/edituser/:ID" element={<EditUser />} />
                <Route path="users/viewuser/:ID" element={<ViewUser />} />
                <Route path="products" element={<Products />} />
                <Route path="products/addproduct" element={<AddProduct />} />
                <Route path="products/editproduct/:ID" element={<EditProduct />} />
                <Route path="products/viewproduct/:ID" element={<ViewProduct />} />

                <Route path="*" element={<AdminNotFound /> } />

                      
              </Routes>
          </div>
      </div>
    </div>


  )
}

export default ControlPanel
