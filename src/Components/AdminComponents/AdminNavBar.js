import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import '../../Style/AdminNavBar.css'

const AdminNavBar = (args) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        
        <Navbar expand='sm' className='' color='primary' container='fluid' {...args} >


            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <NavbarBrand className=" text-light "><h5 className='mt-2'>Control Panel</h5></NavbarBrand>
                <Nav className=" ms-auto " navbar >
                    <NavItem className="   " >
                        <Link to={'/'}  className="text-decoration-none text-light  " ><h6 className='brand-adm'>Lusion</h6></Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    </div>
  )
}

export default AdminNavBar