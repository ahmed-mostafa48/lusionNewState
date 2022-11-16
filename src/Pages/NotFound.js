import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/NotFound.css'
import {MdOutlineCancel} from 'react-icons/md'



function NotFound (){

    return (
      <div className='bg-light notfound-div d-flex flex-column align-items-center  justify-content-center' >
            <div className=' cl d-flex flex-column align-items-center '>

            <MdOutlineCancel  className='notfound-ic ' />
            <h2 className='notfound-line1'>Page Not Found</h2>
            <h4 className='notfound-line2'>Please go back to HomePage
              <Link to={'/'}  className="text-decoration-none text-info ms-2 " >Lusion</Link>
            </h4>
          </div>
     </div>
    )
  
}


export default NotFound;