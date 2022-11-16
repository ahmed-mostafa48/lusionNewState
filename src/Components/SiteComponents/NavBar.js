import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import '../../Style/NavBar.css'
import Store from '../../Context/Store';
import { RiShoppingBasket2Fill, RiShoppingBasket2Line } from 'react-icons/ri';

function NavBar(args) {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const context = useContext(Store)


//   let newProducts = context.storecartProducts.filter((cartProd)=>{
//     return cartProd.count > 0 
//   })

// console.log(newProducts);

  return (
    <div>
        <Navbar expand='sm'  color='' className='color ' container={true} {...args} >
        <NavbarToggler onClick={toggle}  className='bg-light mb-2 ' />
            <Collapse isOpen={isOpen} navbar>
            <Nav navbar className='d-flex align-items-center'>

                <NavbarBrand className=" ">
                    <h4 className=" text-light fw-bold ">Lusion</h4>

                </NavbarBrand>


                <NavItem className="me-4 " >
                 <h6>   <Link to='/'  className="text-decoration-none text-white-50 navbar-link" >Home</Link></h6>
                </NavItem>
                <NavItem className='w me-4'>
                <h6><Link to='/shop' className="text-decoration-none text-white-50 navbar-link">shop</Link></h6>
                </NavItem>

                
                { context.storeLoggedUserCheck === true && context.storeLoggedUser.siteAdmin === true  &&
                    <NavItem className="w me-4" >
                        <h6> <Link to='/dashboard' className="text-decoration-none text-white-50 navbar-link" >DashBoard</Link></h6>
                    </NavItem>
                }
                

              
            </Nav>
          

         
            <Nav className="ms-auto d-flex align-items-center nav-s " navbar>               

    
                    { context.storeLoggedUserCheck === true ? 

                    <Fragment>
                      
                            <UncontrolledDropdown nav inNavbar className="w me-3 ">
                                <DropdownToggle nav caret  className='text-white-50 pointer'>{context.storeLoggedUser.userName}</DropdownToggle>
                                <DropdownMenu end className='drop' >
                                    <DropdownItem className='cll drop'>{context.storeLoggedUser.Name}</DropdownItem>
                                    
                                    <DropdownItem className='drop'>
                                        <Link to={`/user/${context.storeLoggedUser.userName}`} className="pointer text-decoration-none text-white-50 " >Profile</Link>
                                    </DropdownItem>
                                    
                                    <DropdownItem divider className='bg-light' />
                                   
                                    <DropdownItem className='text-white-50 drop'>
                                        <span className='pointer' onClick={context.storeSignOut}>Sign Out</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                    </Fragment>

                    :  <Fragment>
                            <NavItem className="w me-4 " >
                                <h6> <Link to='/register' className="text-decoration-none text-white-50 pointer" >Register</Link></h6>
                            </NavItem>
                            <NavItem className="w me-4 " >
                                <h6> <Link to='/signin' className="text-decoration-none text-white-50 pointer" >Sign In</Link></h6>
                            </NavItem>

                    </Fragment>
                    }
                    
                    <NavItem className='r'>
                        <Link to='/cart' className='d-flex flex-column  text-decoration-none '>
                            <Badge color={context.storeShowLength() >0 ? 'success' : "danger"} pill className='mg text-center'>{context.storeShowLength() }</Badge>
                            <RiShoppingBasket2Fill className='fs-2  border border-2 border-white-50 rounded-circle cart-ic'/>
                        </Link>
                    </NavItem>


                </Nav>
           
            </Collapse>    
            
      </Navbar>
    
    </div>
  )
}


export default NavBar;