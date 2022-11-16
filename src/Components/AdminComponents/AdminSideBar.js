import React from 'react'
import '../../Style/AdminSideBar.css'
import {AiTwotoneHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container, Table } from 'reactstrap';
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'
import {GoPerson} from 'react-icons/go'

const AdminSideBar = () => {
  return (
        <div className='admin-side bg-dark d-flex flex-column align-items-center justify-content-between'>
            <Table borderless dark className='mt-3'>   
                <tbody>
                    <tr>
                        <td className='td-hover p-2 mt-3'>
                            <Link to='/dashboard' className='d-flex text-decoration-none text-light side-links'>
                                <AiTwotoneHome className='mx-3' />
                                <h6 className='side-h6'>DashBoard</h6>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='td-hover p-2 mt-3'>
                            <Link to='/dashboard/products' className='d-flex text-decoration-none text-light side-links'>
                                <RiShoppingBasket2Fill className='mx-3' />
                                <h6 className='side-h6'>Products</h6>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='td-hover p-2 mt-3'>
                            <Link to='/dashboard/users'className='d-flex text-decoration-none text-light side-links'>
                                <BsFillPersonFill className='mx-3' />
                                <h6 className='side-h6'>Users</h6>
                            </Link>
                        </td>
                    </tr>
            
                </tbody>
            </Table>
        </div>
  )
}

export default AdminSideBar