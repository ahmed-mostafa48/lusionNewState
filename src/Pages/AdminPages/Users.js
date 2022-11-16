import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Badge, Button, Container, Table } from 'reactstrap'
import '../../Style/Users.css'
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Store from '../../Context/Store'


const Users = () => {

  const [users , setUsers] = useState([])

  const location = useLocation()

  const context = useContext(Store)

  const navigate = useNavigate()



  const getUsers = ()=> {
    axios({
      method : 'get',
      url : 'http://localhost:9000/users',
    }).then((info)=>{
      setUsers(info.data) 
      // console.log(users);
    })
  }

  const deleteUser = (user)=> {

    if (user.id === context.storeLoggedUser.id) {

      Swal.fire({
      
        icon : 'question' ,
        title : "You will remove your own account.",
        text : 'Are you sure ?' ,
        confirmButtonText : 'Yes',
        showCancelButton : true,
        showCloseButton: true,
        iconColor : 'black',
        cancelButtonColor : 'black',
        confirmButtonColor : 'black',
        color : 'white',
        background : '#db4646'
        

      }).then((popupData)=>{
       
          if (popupData.isConfirmed) {
         
            axios({
              method : 'delete',
              url : `http://localhost:9000/users/${user.id}`

            }).then((info)=>{
              getUsers()

              Swal.fire({
                icon : 'warning',
                iconColor : 'danger',
                title : 'Your account has been removed.',
                text : "Go back to Sign Up page and make a new Lussion account" ,
                confirmButtonColor : '#db4646',
                color : '#db4646',
              })
              localStorage.removeItem("user")
              context.storeLogIn()
              navigate('/register')



            })


          }

      })


    }

    else{
        Swal.fire({
          icon : 'warning',
          title : 'Are you sure ?',
          text : "You won't be able to revert this !" ,
          confirmButtonText : 'Yes, delete User!',
          showCancelButton : true,
          showCloseButton: true,
          iconColor : '#db4646',
          cancelButtonColor : '#198754',
          confirmButtonColor : '#e42121'

        }).then((popupData)=>{
            if (popupData.isConfirmed) {

              axios({
                method : 'delete',
                url : `http://localhost:9000/users/${user.id}`

              }).then(()=>{
                getUsers()

                Swal.fire({
                  icon : 'success',
                  title : 'Deleted',
                  text : "User has been deleted." 
                })
              })
              
            }
        })
      }
      
  }

  const changeRole =(user)=>{


    if (user.id === context.storeLoggedUser.id) {
      Swal.fire({
        icon : 'question' ,
        title : "You won't be able to access the dashboard again !",
        text : 'Are you sure ?' ,
        confirmButtonText : 'Yes',
        showCancelButton : true,
        showCloseButton: true,
        iconColor : 'black',
        cancelButtonColor : 'black',
        confirmButtonColor : 'black',
        color : 'white',
        background : '#db4646'
        

      }).then((popupData)=>{
       
          if (popupData.isConfirmed) {
         
            axios({
              method : 'put',
              url : `http://localhost:9000/users/${user.id}`,
              data : {...user , siteAdmin : !user.siteAdmin }

            }).then((info)=>{
              getUsers()

              Swal.fire({
                icon : 'warning',
                iconColor : 'danger',
                title : 'You no longer be an Admin.',
                text : "You can't access the dashboard , go to homepage." ,
                confirmButtonColor : '#db4646',
                color : '#db4646',
              })
              localStorage.removeItem("user")
              localStorage.user = JSON.stringify(info.data)
              context.storeLogIn()  


            })


          }

      })
       
    }


    else{
          axios({
                method : 'put',
                url : `http://localhost:9000/users/${user.id}`,
                data : {...user , siteAdmin : !user.siteAdmin }

              }).then(()=>{
                getUsers()
              })
        }
   
    


    




  }
  
    useEffect(()=>{
      getUsers()
        
    },[])







  return (
    <div  className=''>
        <Container fluid >
        
            <Link to={'/dashboard/users/addnewuser'}>
              <Button  color='success' className='my-3 btn-add-users' >Add New User</Button>
            </Link>
              
            <h2 className='text-center '><Badge color="success" className='text-center message-users'>{location.state !== null && location.state.sucessMessage !== undefined ? location.state.sucessMessage : ''}
            </Badge></h2>
          
            <Table hover responsive dark className='' >
                <thead className='thead-users'>
                  <tr>
                      <th>ID</th>
                      <th className='text-users'>User Image</th>
                      <th className='text-users'>User Name</th>
                      <th className='text-users'>Birth Date</th>
                      <th className='text-users'>Role</th>
                      <th className='text-users text-center'>Controls</th>
                  </tr>
                </thead>
                <tbody className="table-primary fw-bold" >

                  {
                    users.map((user)=>(
                      
                        <tr key={user.id} className='tr-users' >

                            <th scope="row" className='tds-users'>
                                <span className='text-info  dn row-heads'>ID : </span> 
                                <span>{user.id}</span>
                              </th>
                            <td className='td-img-users tds-users'>
                              <span className='text-info  dn row-heads'>User Image : </span>
                              <img src={user.image} className='img-users' />
                            </td>
                            <td className='text-users tds-users'>
                              <span className='text-info dn row-heads'>User Name : </span>
                              <span>{user.userName}</span>
                            </td>
                            <td className='text-users tds-users'>
                              <span className='text-info  dn  row-heads'>Birth Date : </span>
                              <span>{user.birthDate}</span>
                            </td>
                            <td className={user.siteAdmin  ? 'text-success text-users tds-users' : 'text-muted text-users tds-users'}>
                              <span className='text-info  dn  row-heads'>Role : </span>
                              <span>{user.siteAdmin  ? 'Admin' : 'Member'}</span>
                            </td>
                          
                          <td>
                            <div className='d-flex justify-content-around align-items-center actions-users'>
                              <Button outline color='danger' size='md' className='btn-delete-user' onClick={()=>deleteUser(user)} >Delete User</Button>
                              
                              <Link to={`/dashboard/users/viewuser/${user.id}`}>
                                    <Button outline color='primary' size='md' className='btn-view-user'>View</Button>
                              </Link>

                              <Link to={`/dashboard/users/edituser/${user.id}`}>
                                  <Button outline color='info' size='md' className='btn-edit-user'>Edit</Button>
                              </Link>
                              <Button color={user.siteAdmin  ? 'secondary' : 'success'} size='md' className='btn-role' onClick={()=>changeRole(user)}>{user.siteAdmin  ? 'Remove Admin' : 'Make Admin'}</Button>
                            </div>
                          </td>
                        </tr>
                      

                    ))
                  }
                  
              
                </tbody>
              </Table>

          </Container>
    </div>
  )
}

export default Users