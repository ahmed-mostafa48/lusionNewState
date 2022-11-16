import React from 'react'
import { Link } from 'react-router-dom';
import '../../Style/AdminNotFound.css'
import {MdOutlineCancel} from 'react-icons/md'


const AdminNotFound = () => {
  return (
    <div className='bg-light adm-notfound-div d-flex flex-column align-items-center  justify-content-center' >
    <div className=' adm-cl d-flex flex-column align-items-center '>

    <MdOutlineCancel  className='adm-notfound-ic ' />
    <h2 className='adm-notfound-line1'>Page Not Found</h2>
    <h4 className='adm-notfound-line2'>Please go back to 
      <Link to={'/dashboard'}  className="text-decoration-none text-info ms-2 " >DashBoard</Link> Page
    </h4>
  </div>
</div>
  )
}

export default AdminNotFound