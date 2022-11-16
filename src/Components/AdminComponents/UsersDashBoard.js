import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import '../../Style/DashBoard.css'

const UsersDashBoard = () => {

  const [users , setUsers] = useState([])

  const [males , setMales] = useState([])
  const [females , setFemales] = useState([])

  const [admins , setAdmins] = useState([])
  const [members , setMembers] = useState([])

  const [lastUser , setLastUser] = useState({})


  useEffect(()=>{

    axios({
      method : 'get',
      url : 'http://localhost:9000/users'
    }).then((info)=>{

      setUsers(info.data)

      // console.log(info.data.length);


      


      let malesTemp = info.data.filter((user)=>{
            return user.gender === 'Male'
              
      })

      setMales(malesTemp)


      let femalesTemp = info.data.filter((user)=>{
          return user.gender === 'Female'
        })

      setFemales(femalesTemp)

        // console.log(males);
        // console.log(females);  


        let adminsTemp = info.data.filter((user)=>{
          return user.siteAdmin === true
            
        })

        setAdmins(adminsTemp)


        let membersTemp = info.data.filter((user)=>{
          return user.siteAdmin === false
            
        })

        setMembers(membersTemp)

          // console.log(admins);
          // console.log(members);



          setLastUser(info.data[info.data.length-1])

        // console.log(info.data[info.data.length-1].id);


    })


  },[])





  return (
    <div className='border border-2 border-muted d-flex flex-column justify-content-around align-items-center text-black-50'>
        <div className='bg-success w-100 mb-4'>
            <h2 className='text-white text-center  py-2 headtxt'>Users</h2>
        </div>

        <h4 className='text-warning tree-txt'>You Have <span className='text-success'>{users.length}</span> Users Registered</h4>
        <h6 className='txt2'>With <span className='text-success'>{males.length}</span> Male {'&'} <span className='text-success'>{females.length}</span> Female</h6>
        <h6 className='txt2'>With <span className='text-success'>{admins.length}</span> Admin {'&'} <span className='text-success'>{members.length}</span> Members</h6>
      
        <h6 className='mt-2 txt3'>The newest registered user is the owner of the account No <span className='text-success'>{lastUser.id}</span></h6>
        <h6 className='txt2'>Named  <span className='text-success '>{lastUser.Name}</span></h6>
        <div className='d-flex align-items-center mt-1 v-btn'>
            <h6  className='txt2'>To preview that user click</h6>
            <Link to={`/dashboard/users/viewuser/${lastUser.id}`}>
                <Button color='primary' size='sm' className='ms-2  v-btn2'>View</Button> 
            </Link>
        </div>
        <Link to='/dashboard/users'className='text-decoration-none mt-2 mb-3'>
            <Button color='success' className='m-btn'>Manage Users</Button>
        </Link>
    </div>
  )
}

export default UsersDashBoard