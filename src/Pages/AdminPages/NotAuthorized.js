import React from 'react'
import NavBar from '../../Components/SiteComponents/NavBar'

import { Link } from 'react-router-dom';
import '../../Style/NotFound.css'
import {MdOutlineCancel} from 'react-icons/md'

const NotAuthorized = () => {
  return (
    <div>
        <NavBar />
        <div className='bg-light notfound-div d-flex flex-column align-items-center  justify-content-center' >
            <div className=' cl d-flex flex-column align-items-center text-danger'>

            <MdOutlineCancel  className='notfound-ic text-danger' />
            <h2 className='notfound-line1 '>Not Authorized</h2>
            <h4 className='notfound-line2 '>Please go back to HomePage
              <Link to={'/'}  className="text-decoration-none text-info ms-2 " >Lusion</Link>
            </h4>
          </div>
     </div>
        
    </div>
  )
}

export default NotAuthorized