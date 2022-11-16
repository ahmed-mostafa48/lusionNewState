import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Badge, Card, CardBody, CardImg, CardText } from 'reactstrap'

import '../../Style/ViewUser.css'

const ViewUser = () => {

    const {ID} = useParams()

    const [userObject , setUserObject] = useState({})


    useEffect(()=>{
        axios({
            method : 'get',
            url : `http://localhost:9000/users/${ID}`
        }).then((info)=>{
            setUserObject(info.data)
        })
        
    },[])
    
  return (
    <div className=' d-flex flex-column align-items-center justify-content-center mt-4 '   >

         <h5 className='text-success userview-head' >Account Number #{userObject.id}</h5>

        <Card style={{width: '13rem'}} className='p-0 card-userview' >

            <CardBody className=' d-flex flex-column align-items-center justify-content-around  p-2'>
                <CardImg alt="photo" src={userObject.image}  width="100%" className='mb-3' />
                
                <div className='p-0 w-100 text-black-50 tex-userview-div'>
                    <CardText tag="h6" className=' details-head-userview ms-2' >User Information</CardText>

                    <div className='d-flex flex-column align-items-center justify-content-center '>
                        <CardText tag="h6" className='tex-userview text-black-50 ' >Name : {userObject.Name}</CardText>
                        <CardText tag="h6" className='tex-userview text-black-50 ' >Gender : {userObject.gender}</CardText>
                        <CardText tag="h6" className='tex-userview text-black-50  mb-2' >Birth Date : {userObject.birthDate}</CardText>
                    </div>
                    <h6 className='bg-success text-white tex2-userview p-1'>User Name : {userObject.userName}</h6>

                    <div className='bg-danger d-flex align-items-center justify-content-center mb-2'>
                        <h6 className='tex3-userview text-white mt-2'>User Role : <Badge color='white' className=' text-danger  tex4-userview'>{userObject.siteAdmin ? 'Admin' : 'Member'}</Badge></h6>
                    </div>

                </div>

            </CardBody>
        </Card>

    </div>
  )
}

export default ViewUser