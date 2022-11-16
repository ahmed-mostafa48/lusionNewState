import React, { useContext, useState } from 'react'
import { Badge, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Store from '../../Context/Store'
import axios from 'axios'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import '../../Style/SignIn.css'
import  ClipLoader from 'react-spinners/ClipLoader'
import {FcCancel} from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip';


const SignIn = () => {


    const context = useContext(Store)

    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [userCheck, setUserCheck] = useState(false);


    const navigate = useNavigate()

    const location = useLocation()
    // console.log(location.state);
    

 //////// 1 //////////// 
    // useEffect(()=>{
    //     context.storeLoggedUserCheck && navigate(`/user/${context.storeLoggedUser.userName}`)
    //     console.log('n log');

    // })
 //////// 1 //////////// 

    const checks = ()=>{


        axios({
            url: 'http://localhost:9000/users',
            method : 'get',
        }).then((info)=>{
        //    console.log(info.data)
            let existsUSer =  info.data.filter((user)=>{
                return  email === user.email && password === user.password
            }) 

            // console.log(existsUSer);

             setLoading(true)
             setTimeout(() => {
                setLoading(false)
                // setFeedback(true)
            }, 3000);
           

            // context.storeCheckReturn(()=>{},'',setUserNameCheck ,  true, null  , (existsUSer.length === 0) ) 
            // context.storeCheckReturn(()=>{},'',setPasswordCheck ,  true, null  , (existsUSer.length === 0) ) 
            
        // let UserPass =  context.storeCheckReturn(setUserPassText,'User Name and/or Password',setUserPassCheck ,  true, null  , (existsUSer.length === 0) ) 

        // if (UserPass) {
        if(existsUSer.length > 0) {
            // setUserPassCheck(true)
            // setUserPassText('Valid User Name and/or Password')

          

            setTimeout(() => {    
                // localStorage.user = JSON.stringify(existsUSer)
                localStorage.user = JSON.stringify(existsUSer[0])
                context.storeLogIn()
                setUserCheck(false)

            }, 3000);
           


            // let lguser =  JSON.parse(localStorage.user)

            setTimeout(() => {


                // console.log(context.storeLoggedUser.userName);
                // console.log(existsUSer.userName);
                // console.log(lguser.userName);

                
            //   navigate(`/user/${context.storeLoggedUser.userName}`)
            //   navigate(`/user/${existsUSer.userName}`)
            // navigate(`/user/${lguser.userName}`)


            },3300);
            
         }

         else{
            setTimeout(() => {

                setUserCheck(true)
            }, 3000);

         }
        
        })


    }



    const signInFormReset = ()=>{

    }

    const formSignIn = (f)=>{
        f.preventDefault()


        checks()

    }


  return (
    <div className='bg-light sign-in-div d-flex flex-column justify-content-evenly align-items-center '>
            <ReactTooltip event='click' globalEventOff='click' place='left' effect="solid"/>

        <div className='my-2'>
            <h2><Badge color="success" className='text-center message'>{location.state !== null && location.state.sucessMessage !== undefined ? location.state.sucessMessage : ''}</Badge></h2>
        </div>

        <div className='bg-white log-in-div d-flex flex-column justify-content-center align-items-center border border-2 mt-4 '>


            <h1 className='text-success my-3'>Sign In</h1>
            <Form onSubmit={formSignIn} onReset={signInFormReset}  className='d-flex flex-column justify-content-around align-items-start sign-form' >

        
                <FormGroup className="signin-groups">
                    <Label for="emailIn" className= 'text-info fw-bold'>Email</Label>
                    <Input type='text' id='emailIn'  data-tip="EX : name@domain.com"    className='bg-dark text-info remove-shadow'  value={email} onChange={(e)=>{ setEmail(e.currentTarget.value) }} placeholder='Enter Your Email' />
                </FormGroup>

                <FormGroup className="signin-groups">
                    <Label for="passwordIn" className='text-info fw-bold '>Password</Label>
                    <div className='position-relative'>
                    <Input type={showPassword ? 'text' : 'password'} data-tip="at least 8 characters containing Letters and Symbols and numbers" className='bg-dark text-info remove-shadow' id='passwordIn'  value={password} onChange={(e)=>{ setPassword(e.currentTarget.value) }} placeholder='Password' />
                    <AiFillEyeInvisible className={showPassword ?  'd-none' : 'text-info fs-5 position-absolute top-50 end-0 translate-middle' } onClick={()=>setShowPassword(true)} />
                    <AiFillEye className={!showPassword ?  'd-none' : 'text-info fs-5 position-absolute top-50 end-0 translate-middle' } onClick={()=>setShowPassword(false)} />
                    </div>
                </FormGroup>

                <div className={userCheck === false ? 'd-none' :'d-flex justify-content-center align-items-center w-100 mb-2'} >
                    <FcCancel className='fs-4 me-1'  />
                    <h5 className='text-danger incorr-log-m '>Incorrect Email or Password</h5>
                </div>


                <Button  type='submit' color='success' className='signin-btn signin-groups d-flex  justify-content-center align-items-center'>
                        <ClipLoader size={20} color="#ffffff" className={loading ? 'me-3' : 'd-none'}/>
                    Sign In</Button>

            </Form>

            <h5 className=' my-3'><Link to='/register' className='text-info' >Sign Up</Link></h5>


        </div>
    </div>


  )
}

export default SignIn