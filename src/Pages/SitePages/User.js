import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Store from '../../Context/Store'
import { Badge, Button, ButtonGroup, Container, Form, FormFeedback, FormGroup, FormText, Input, Label, Table } from 'reactstrap'
import '../../Style/User.css'


const User = () => {


    const context = useContext(Store)

    const {username} = useParams()

    const navigate = useNavigate()

    // const [siteAdmin] = useState(false)

    const [feedback,setFeedback] = useState(false)

    const [Name,setName] = useState(context.storeLoggedUser.Name)
    const [NameCheck,setNameCheck] = useState(null)
    const [NameText,setNameText] = useState('enter your name')

    const [NameForm,setNameForm] = useState(false)


    const [email,setEmail] = useState(context.storeLoggedUser.email)
    const [emailCheck,setEmailCheck] = useState(false)
    const [emailText,setEmailText] = useState('enter your email')

    const [emailForm,setEmailForm] = useState(false)

    
    const [userName,setUserName] = useState(context.storeLoggedUser.userName)
    const [userNameCheck,setUserNameCheck] = useState(false)
    const [userNameText,setUserNameText] = useState('enter your user name')
    
    const [userNameForm,setUserNameForm] = useState(false)

    const [registeredPassword,setRegisteredPassword] = useState('')
    const [registeredPasswordCheck,setRegisteredPasswordCheck] = useState(false)
    const [registeredPasswordText,setRegisteredPasswordText] = useState('enter your registered Password')
    const [showRegisteredPassword, setShowRegisteredPassword] = useState(false);
    const [registeredPasswordForm,setRegisteredPasswordForm] = useState(false)

    const [password,setPassword] = useState('')
    const [passwordCheck,setPasswordCheck] = useState(false)
    const [passwordText,setPasswordText] = useState('enter your password')
    const [showPassword, setShowPassword] = useState(false);

    const [confirmPassword,setConfirmPassword] = useState('')
    const [confirmPasswordCheck,setConfirmPasswordCheck] = useState(false)
    const [confirmPasswordText,setConfirmPasswordText] = useState('Confirm your password')
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [passwordForm,setPasswordForm] = useState(false)


    const [phoneNumber,setPhoneNumber] = useState(context.storeLoggedUser.phoneNumber)
    const [phoneNumberCheck,setPhoneNumberCheck] = useState(false)
    const [phoneNumberText,setPhoneNumberText] = useState('enter your Phone Number')

    const [phoneNumberForm,setphoneNumberForm] = useState(false)


    const [birthDate,setBirthDate] = useState(context.storeLoggedUser.birthDate)
    const [birthDateCheck,setBirthDateCheck] = useState(false)
    const [birthDateText,setBirthDateText] = useState('select your birth date')

    const [birthDateForm,setBirthDateForm] = useState(false)


    const [gender, setGender] = useState(context.storeLoggedUser.gender);
    const [genderCheck,setGenderCheck] = useState(false)
    const [genderText,setGenderText] = useState('select your gender')

    const [genderForm,setGenderForm] = useState(false)


    const [updateMessage,setupdateMessage] = useState(false)

    const [year,setyear] = useState('')
    const [month,setMonth] = useState('')
    const [day,setDay] = useState('')
    const [hour,setHour] = useState('')
    const [minute,setMinute] = useState('')
    const [second,setSecond] = useState('')




   
 //////// 1 //////////// 
    // useEffect(()=>{
    //     !context.storeLoggedUserCheck && navigate('/signin')
    //     console.log('n user');
    // },[])
 //////// 1 //////////// 



    // const editFName = (e) =>{
    //     e.preventDefault()

    //     let fn =  context.storeCheckReturn(setFNameText,'Name',setFNameCheck , true, null  , (fName.length < 3 || context.storeIncludesNumber(fName) || fName.includes(' ') || context.storeSymbolCheck.test(fName) ) ) 


    //         ///////////// 1 ////////////


    //         setFeedback(true)

    //         if (fn) {
                
            
    //     axios({
    //         method : 'put',
    //         url : `http://localhost:9000/users/${context.storeLoggedUser.id}`,
    //         // data : {
    //         //     fName,
    //         //     lName : context.storeLoggedUser.lName ,
    //         //     userName : context.storeLoggedUser.userName ,
    //         //     password : context.storeLoggedUser.password ,
    //         //     phoneNumber : context.storeLoggedUser.phoneNumber ,
    //         //     birthDate : context.storeLoggedUser.birthDate ,
    //         //     gender : context.storeLoggedUser.gender ,
    //         //     siteAdmin : context.storeLoggedUser.siteAdmin
    //         // }

    //         data : { ...context.storeLoggedUser, fName  }


    //     }).then((info)=>{
    //         console.log(info.data);
    //         localStorage.user = JSON.stringify(info.data)
    //         // context.storeSetLoggedUserCheck(false)
    //         // localStorage.user !== undefined && context.storeSetLoggedUser(localStorage.user)

    //         //    setTimeout(() => {
    //         //     localStorage.user !== undefined && context.storeSetLoggedUser(localStorage.user)
    //         // }, 3000);
    //         context.storeLogIn()
    //         setTimeout(()=>{
    //             setFNameForm(false)

    //         },1000)

    //         setTimeout(()=>{
    //             setFeedback(false)

    //         },1000)

    //         setTimeout(()=>{
    //             setFNameCheck(null)

    //         },2000)

    //         // navigate(`/user/${info.data.userName}`)

    //     })

      
    // }
  

    ///////////// 1 ////////////



    ///////////// 2 ////////////

       
    //     let arrObj = JSON.parse(localStorage.user)
    //    for (let key in arrObj ) {
    
    //         // console.log(arrObj[key]);
    //         if (key === 'fName') {
                
    //             arrObj[key]= fName
    //         }
    //     }
    //     console.log(arrObj);

    //     localStorage.user = JSON.stringify([arrObj][0])
    //     context.storeSetLoggedUser(arrObj)
    //     setFNameForm(false)

    //     axios({
    //         method : 'put',
    //         url : `http://localhost:9000/users/${context.storeLoggedUser.id}`,
    //         // data : {
    //         //     fName,
    //         //     lName : context.storeLoggedUser.lName ,
    //         //     userName : context.storeLoggedUser.userName ,
    //         //     password : context.storeLoggedUser.password ,
    //         //     phoneNumber : context.storeLoggedUser.phoneNumber ,
    //         //     birthDate : context.storeLoggedUser.birthDate ,
    //         //     gender : context.storeLoggedUser.gender ,
    //         //     siteAdmin : context.storeLoggedUser.siteAdmin
    //         // }
    //         data : { ...context.storeLoggedUser, fName  }

    //     }).then((info)=>{
    //         console.log(info.data);
    //     })

    ///////////// 2 ////////////



    // }




    
    const edit = (e,checkReturn, dataValue, setForm , setCheck) =>{
        e.preventDefault()

            setFeedback(true)

           

            if (checkReturn) {
                                    
                axios({
                    method : 'put',
                    url : `http://localhost:9000/users/${context.storeLoggedUser.id}`,
                    data : dataValue


                }).then((info)=>{
                    // console.log(info.data);
                    localStorage.user = JSON.stringify(info.data)
                    context.storeLogIn()
                    setTimeout(()=>{
                        setForm(false)

                    },1000)

                    setTimeout(()=>{
                        setFeedback(false)

                    },1000)

                    setTimeout(()=>{
                        setCheck(null)

                    },2000)
                })

                setupdateMessage(true)
            }

            setTimeout(()=>{
                setupdateMessage(false)
            },6000)
        }


    const editName = (e) =>{
        // e.preventDefault()

        edit(e,
            context.storeCheckReturn(setNameText,'Name',setNameCheck , true, null  , (Name.length < 3 || context.storeIncludesSpaceNoNumber(Name) || context.storeSymbolCheck.test(Name) ) )
            , { ...context.storeLoggedUser,  Name } , setNameForm , setNameCheck
        )
    
    }



    
    const editPhone = (e) =>{
        edit(e,
            context.storeCheckReturn(setPhoneNumberText,'phone Number',setPhoneNumberCheck , true , null , (!context.storePhoneCheck.test(phoneNumber)) ) 
            , { ...context.storeLoggedUser,  phoneNumber } , setphoneNumberForm , setPhoneNumberCheck
        )
    
    }


    
    const editDate = (e) =>{
        edit(e,
            context.storeCheckReturn(setBirthDateText,'Birth Date',setBirthDateCheck , false , '' , (birthDate === '') ) 
            , { ...context.storeLoggedUser,  birthDate } , setBirthDateForm , setBirthDateCheck
        )
    
        // updateAge()

    }

    
    const editGender = (e) =>{
        edit(e,
            context.storeCheckReturn(setGenderText,'Gender',setGenderCheck , false , gender , (gender === '') ) 
            , { ...context.storeLoggedUser,  gender } , setGenderForm , setGenderCheck
        )
    
    }

    



    // const editEmail = (e) =>{
    //     edit(e,
    //         context.storeCheckReturn(setEmailText,'Email',setEmailCheck ,  true, null  , ( !context.storeEmailCheck.test(email)) )
    //         , { ...context.storeLoggedUser,  email } , setEmailForm , setEmailCheck
    //     )
    
    // }



    // const editUserName = (e) =>{
        
    //     edit(e,
    //         context.storeCheckReturn(setUserNameText,'User Name',setUserNameCheck ,  true, null  , ( userName.length < 6 || userName.includes(' ') || !context.storeIncludesNumber(userName) || context.storeUserSymbolCheck.test(userName) ) ) 
    //         , { ...context.storeLoggedUser,  userName } , setUserNameForm , setUserNameCheck
    //     )
    
    // }
    



    const editEmail = (e) =>{
        e.preventDefault()


   let em = context.storeCheckReturn(setEmailText,'Email',setEmailCheck ,  true, null  , ( !context.storeEmailCheck.test(email)) )
    // let us2 = context.storeCheckReturn(setEmailText,'- this Email available',setEmailCheck ,  true, null  , ( ) ) 

   if (em) {
    
    axios({
        url: 'http://localhost:9000/users',
        method : 'get',
    }).then((info)=>{
    //    console.log(info.data);

      let userCheckExist =  info.data.map((user)=>{
        return  email === user.email
       })   

       if (userCheckExist.includes(true)) {
        setEmailText('Email already exists')
        setEmailCheck(false)
        setFeedback(true)
       }

       else{
        edit(e, em
            , { ...context.storeLoggedUser,  email } , setEmailForm , setEmailCheck
        )

       }

    })
  
   }

   else{
    setFeedback(true)

   }


}





    const editUserName = (e) =>{
            e.preventDefault()


       let us = context.storeCheckReturn(setUserNameText,'User Name',setUserNameCheck ,  true, null  , ( userName.length < 6 || userName.includes(' ') || !context.storeIncludesNumber(userName) || context.storeUserSymbolCheck.test(userName) || !context.storeCharsCheck.test(userName) ) ) 
        // let us2 = context.storeCheckReturn(setUserNameText,'- this User Name not available',setUserNameCheck ,  true, null  , ( ) ) 

       if (us) {
        
        axios({
            url: 'http://localhost:9000/users',
            method : 'get',
        }).then((info)=>{
        //    console.log(info.data);

          let userCheckExist =  info.data.map((user)=>{
            return  userName === user.userName
           })   

           if (userCheckExist.includes(true)) {
            setUserNameText('User Name already exists')
            setUserNameCheck(false)
            setFeedback(true)
           }

           else{
            edit(e, us
                , { ...context.storeLoggedUser,  userName } , setUserNameForm , setUserNameCheck
            )

           }

        })
      
       }

       else{
        setFeedback(true)

       }

    
    }




    const checkPassword = (e) =>{
        e.preventDefault()

        setFeedback(true)

        axios({
            method : 'get',
            url : `http://localhost:9000/users/${context.storeLoggedUser.id}`
        }).then((info)=>{
            // console.log(info.data.password);
            let regPasscheck = registeredPassword === info.data.password

            let regPs =  context.storeCheckReturn(setRegisteredPasswordText,'Password',setRegisteredPasswordCheck ,  true, null  , ( regPasscheck === false || registeredPassword.length < 8 || registeredPassword.includes(' ') || !context.storeIncludesNumber(registeredPassword) || !context.storeSymbolAndSpaceCheck.test(registeredPassword) ) ) 
                
                if (regPs){
                    setTimeout(()=>{
                        setRegisteredPasswordForm(false)
                        setPasswordForm(true)
                        setFeedback(false)

                    },1000)
                    
                    setTimeout(()=>{  
                        setShowRegisteredPassword(false)           
                    },1000)

                }
                

            
            
        })

    }
    const closeRegPass = () =>{
        setRegisteredPasswordForm(false)
        setRegisteredPassword('') 
        setShowRegisteredPassword(false)  
    }

    const closeEditPass = () =>{

        setPasswordForm(false)

        setPassword('')
        setConfirmPassword('')
        setShowPassword(false)
        setShowConfirmPassword(false)
        setPasswordCheck(null)
        setConfirmPasswordCheck(null)
        setRegisteredPassword('') 

    }

    const editPassword = (e) =>{       

        let ps =  context.storeCheckReturn(setPasswordText,'Password',setPasswordCheck ,  true, null  , (password.length < 8 || password.includes(' ') || !context.storeIncludesNumber(password) || !context.storeSymbolAndSpaceCheck.test(password) ) ) 

        let cps =  context.storeCheckReturn(setConfirmPasswordText,'Confirmation Password',setConfirmPasswordCheck ,  true, null  , (confirmPassword.length < 8 || confirmPassword.includes(' ') || !context.storeIncludesNumber(confirmPassword) || !context.storeSymbolAndSpaceCheck.test(confirmPassword) || password !== confirmPassword) ) 
       
        let newPass =  context.storeCheckReturn(setPasswordText,' - new Password',setPasswordCheck ,  true, null  , ( password.length < 8 || password.includes(' ') || !context.storeIncludesNumber(password) || !context.storeSymbolAndSpaceCheck.test(password) || password === registeredPassword) )

        let newPass2 =  context.storeCheckReturn(setConfirmPasswordText,' - Confirm the new Password',setConfirmPasswordCheck ,  true, null  , ( confirmPassword.length < 8 || confirmPassword.includes(' ') || !context.storeIncludesNumber(confirmPassword) || !context.storeSymbolAndSpaceCheck.test(confirmPassword) || confirmPassword === registeredPassword || password !== confirmPassword) )

        edit(e,
                (ps && cps && newPass && newPass2 )
            , { ...context.storeLoggedUser,  password } , setPasswordForm , setPasswordCheck
        )
     
        if  (ps && cps && newPass && newPass2 )
        {
            setTimeout(()=>{  
                // setPassword('')
                // setConfirmPassword('')
                // setShowPassword(false)
                // setShowConfirmPassword(false)
                // setPasswordCheck(null)
                // setConfirmPasswordCheck(null)
                closeEditPass()

            },2000)
        }

    }

    



    const cancelEdit = (setForm,setCheck) =>{
        setForm(false)
        setCheck(null)
        setFeedback(false)
    }

    const resetOpenEdit = () =>{
        setNameForm(false)
        setEmailForm(false)
        setUserNameForm(false)
        setphoneNumberForm(false)
        setBirthDateForm(false)
        setGenderForm(false)
        setRegisteredPasswordForm(false)
        setPasswordForm(false)

        // setRegisteredPassword('')
        // setShowRegisteredPassword(false) 
        // setPassword('')
        // setConfirmPassword('')
        // setShowPassword(false)
        // setShowConfirmPassword(false)

        // setPasswordCheck(null)
        // setConfirmPasswordCheck(null)
        // setRegisteredPassword('') 

        closeEditPass()

        
    }

    const openEdit = (setOpenForm,setCheck,setCheck2=()=>{}) =>{

        resetOpenEdit()
        setFeedback(false)
        setCheck(null)
        setCheck2(null)
        setOpenForm(true)

    }

   
    const updateAge = ()=>{

        let userDate = new Date(context.storeLoggedUser.birthDate)

        let userMilliSeconds = userDate.getTime()

        // console.log(userMilliSeconds);


        // let date = new Date()       
        // let ageMilliSeconds = ( date.getTime() - userMilliSeconds)

        let ageMilliSeconds = (Date.now() - userMilliSeconds)

        // console.log(age);

        let second = Math.floor(ageMilliSeconds/1000)
        let minute = Math.floor(second / 60)
        let hour = Math.floor(minute / 60)
        let day = Math.floor(hour / 24)
        let month = Math.floor(day / 30)
        let year = Math.floor(month / 12)


        second = (second % 60)
        minute = (minute % 60)
        hour = (hour % 24)
        day = (day % 30)
        month = (month % 12 )

        // console.log(year , month , day , hour , minute , second);

        setyear(year)
        setMonth(month)
        setDay(day)
        setHour(hour)
        setMinute(minute)
        setSecond(second)


    }

    useEffect(()=>{
        updateAge()
        // console.log('a');
    },[context.storeLoggedUser.birthDate])
    





  return (
    <div className='d-flex flex-column align-items-center justify-content-between mt-3 ' >
        {/* <h1 className='text-primary mb-4 mt-3'>My Account</h1> */}
        {/* <h1>profile</h1> */}

         {context.storeLoggedUserCheck && 
         <Container className='d-flex flex-column align-items-center justify-content-between w-100 '>

            <div className='w-100 '>
                {/* <hr className=' hrs ' /> */}

                <div className='d-flex flex-column align-items-center justify-content-between  '>
                    <img src={context.storeLoggedUser.image} className='rounded-circle img-profile' />
                   
                    <div className='my-3'>
                            <h1 className='text-primary user-line1 text-center mb-4'>{context.storeLoggedUser.Name}</h1>
                            <h6 className='user-line2 text-info'>User Name  <span className='ms-2 text-light'>{context.storeLoggedUser.userName}</span> </h6>
                            <h6 className='user-line2 text-info'>My name is <span className='ms-2 text-light'>{context.storeLoggedUser.Name}</span> and i'm <span className='ms-2 text-light'>{context.storeLoggedUser.gender}</span> </h6>
                            <h6 className='user-line2 text-info'>My Age is <span className='text-light'>{year} years</span> , <span className='text-light'>{month} months</span> , <span className='text-light'>{day} days</span> , <span className='text-light'>{hour} hours</span> , <span className='text-light'>{minute} minutes</span> and <span className='text-light'>{second} seconds</span> </h6>

                    </div>
                </div>

                <hr  className='hrs' />
            </div>

            <h5><Badge color="success" className={updateMessage ? 'text-center message' : 'text-center message d-none' }>Your account updated successfully</Badge></h5>

            <Table hover dark >   
                <tbody >
                     <tr className='trs'>
                        <th className='text-info ths wd-tds' scope="row">Name</th>       
                        <td className={NameForm ? 'd-none' : ' wd-tds' }>{context.storeLoggedUser.Name}</td>
                        <td className={NameForm ? 'd-none' : 'wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setNameForm,setNameCheck)}>Edit</Link></td>    

                        <td className={NameForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editName} className='d-flex flex-column justify-content-around align-items-start mt-3 update-form' >
                                    <FormGroup className="position-relative update-groups">
                                        <Input type='text' id='NameIn'  valid={NameCheck && true }  invalid={NameCheck === false ? true : undefined}   value={Name} onChange={(e)=>{ setName(e.currentTarget.value) }}  placeholder='Name' />
                                        <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={NameCheck && true}  invalid={NameCheck === false ? "true" : undefined} >{NameText}</FormFeedback>
                                        <FormText className='upd-tx'>Name without any Symbols or numbers</FormText>
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                        <Button outline color='primary'  onClick={()=>cancelEdit(setNameForm , setNameCheck) } >Cancel</Button>
                                    </div>
                        </Form></td>                     
                    </tr>                   
           
                    
                    <tr className='trs'>
                        <th className='text-info ths wd-tds' scope="row">Email</th>
                        <td className={emailForm ? 'd-none' : ' wd-tds' }>{context.storeLoggedUser.email}</td>
                        <td className={emailForm ? 'd-none' : ' wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setEmailForm,setEmailCheck)}>Edit</Link></td>
                        <td className={emailForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editEmail} className='d-flex flex-column justify-content-around align-items-start mt-3 update-form2' >
                                    <FormGroup className="position-relative update-groups">
                                        <Input type='text' id='emailIn'  valid={emailCheck && true }  invalid={emailCheck === false ? true : undefined}   value={email} onChange={(e)=>{ setEmail(e.currentTarget.value) }} placeholder='email' />
                                        <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={emailCheck && true}  invalid={!emailCheck ? "true" : undefined} >{emailText}</FormFeedback>
                                        <FormText className='upd-tx'>EX : name@domain.com</FormText>
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                        <Button outline color='primary'  onClick={()=>setEmailForm(false)} >Cancel</Button>
                                    </div>
                        </Form></td>          
                    </tr>
          




                    <tr className='trs'>
                        <th className='text-info ths wd-tds' scope="row">User Name</th>
                        <td className={userNameForm ? 'd-none' : ' wd-tds' }>{context.storeLoggedUser.userName}</td>
                        <td className={userNameForm ? 'd-none' : ' wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setUserNameForm,setUserNameCheck)}>Edit</Link></td>
                        <td className={userNameForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editUserName} className='d-flex flex-column justify-content-around align-items-start mt-3 update-form2' >
                                    <FormGroup className="position-relative update-groups">
                                        <Input type='text' id='userNameIn'  valid={userNameCheck && true }  invalid={userNameCheck === false ? true : undefined}   value={userName} onChange={(e)=>{ setUserName(e.currentTarget.value) }} placeholder='user name' />
                                        <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={userNameCheck && true}  invalid={!userNameCheck ? "true" : undefined} >{userNameText}</FormFeedback>
                                        <FormText className='upd-tx'>at least 6 characters contain Letters and numbers and can contain only - and/or _</FormText>
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                        <Button outline color='primary'  onClick={()=>setUserNameForm(false)} >Cancel</Button>
                                    </div>
                        </Form></td>          
                    </tr>
          

           
                    <tr className='trs'>
                        <th className='text-info ths wd-tds' scope="row">phone Number</th>
                        <td className={phoneNumberForm ? 'd-none' : ' wd-tds' }>{context.storeLoggedUser.phoneNumber}</td>
                        <td className={phoneNumberForm ? 'd-none' : ' wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setphoneNumberForm,setPhoneNumberCheck)}>Edit</Link></td>
                        <td className={phoneNumberForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editPhone} className='d-flex flex-column justify-content-around align-items-start  mt-3 update-form2' >
                                    <FormGroup className="position-relative update-groups ">
                                        <Input type='text' id='phoneNumberIn'  valid={phoneNumberCheck && true }  invalid={phoneNumberCheck === false  ? true : undefined}   value={phoneNumber} onChange={(e)=>{ setPhoneNumber(e.currentTarget.value) }} placeholder='phone number' />
                                        <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={phoneNumberCheck && true}  invalid={!phoneNumberCheck ? "true" : undefined} >{phoneNumberText}</FormFeedback>
                                        <FormText className='upd-tx'>start with a plus sign, followed by the country code and national number</FormText>
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                        <Button outline color='primary'  onClick={()=>setphoneNumberForm(false)} >Cancel</Button>
                                    </div>
                        </Form></td>          
                    </tr>  
                    </tbody>
          
                <tbody >
                    <tr className='trs'>
                        <th className='text-info ths wd-tds' scope="row">Birth Date</th>
                        <td className={birthDateForm ? 'd-none' : ' wd-tds' }>{context.storeLoggedUser.birthDate}</td>
                        <td className={birthDateForm ? 'd-none' : ' wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setBirthDateForm, setBirthDateCheck)}>Edit</Link></td>
                        <td className={birthDateForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editDate} className='d-flex flex-column justify-content-around align-items-start mt-3 update-form' >
                                    <FormGroup className="position-relative update-groups">
                                        <Input  id="birthDateIn" name="birthDate" placeholder="birthDate" type="date" valid={birthDateCheck && true }  invalid={birthDateCheck  === false  ? true : undefined}  value={birthDate} onChange={(e)=>{ setBirthDate(e.currentTarget.value) }} />
                                        <FormFeedback className={feedback ?'d-flex mt-3' : 'd-none'} tooltip  valid={birthDateCheck && true}  invalid={!birthDateCheck ? "true" : undefined} >{birthDateText}</FormFeedback>
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                        <Button outline color='primary'  onClick={()=>setBirthDateForm(false)} >Cancel</Button>
                                    </div>
                        </Form></td>          
                    </tr>  

                    <tr className='trs'>
                        <th className='text-info ths wd-tds' scope="row">Gender</th>
                        <td className={genderForm ? 'd-none' : ' wd-tds' }>{context.storeLoggedUser.gender}</td>
                        <td className={genderForm ? 'd-none' : ' wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setGenderForm,setGenderCheck)}>Edit</Link></td>
                        <td className={genderForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editGender} className='d-flex flex-column justify-content-around align-items-start mt-3 update-form' >
                                    <FormGroup className="position-relative update-groups">
                                    <ButtonGroup className="position-relative d-flex justify-content-between">
                                        <Button className='' color="light" outline onClick={() => setGender('Male')} active={gender === 'Male'} >Male</Button>
                                        <Button className='' color="light" outline onClick={() => setGender('Female')} active={gender === 'Female'} >Female</Button>
                                        <FormFeedback className={feedback ?'d-flex mt-3' : 'd-none'} tooltip  valid={genderCheck && true}  invalid={genderCheck === false ? "true" : undefined} >{genderText}</FormFeedback>
                                    </ButtonGroup>
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                        <Button outline color='primary'  onClick={()=>setGenderForm(false)} >Cancel</Button>
                                    </div>
                        </Form></td>          
                    </tr>

                    <tr className='trs'>
                        <th className='text-info ths wd-tds wd-tds' scope="row">Password</th>
                        
                        <td className={registeredPasswordForm || passwordForm ? 'd-none text-warning' : 'text-warning ps-tx wd-tds' }>enter your passowrd to be allowed to edit it</td>

                        
                        <td className={registeredPasswordForm || passwordForm  ? 'd-none' : 'wd-tds' }><Link className='text-decoration-none' onClick={()=>openEdit(setRegisteredPasswordForm , setRegisteredPasswordCheck )}>Edit</Link></td> 
                       

                        <td className={registeredPasswordForm ? 'd-flex  wd-tds' : 'd-none' }><Form onSubmit={checkPassword} className='d-flex flex-column justify-content-around align-items-start mt-3  update-form3' >
                                <FormGroup className="position-relative update-groups ">
                                    <Input type={showRegisteredPassword ? 'text' : 'password'} id='regPasswordIn'  valid={registeredPasswordCheck && true }  invalid={registeredPasswordCheck === false ? true : undefined}   value={registeredPassword} onChange={(e)=>{ setRegisteredPassword(e.currentTarget.value) }} placeholder='password' />
                                    <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={registeredPasswordCheck && true}  invalid={!registeredPasswordCheck ? "true" : undefined} >{registeredPasswordText}</FormFeedback>
                                    <FormText color='warning'>your registered password</FormText>
                                    <Button className='d-block my-3' color="info" outline onClick={() => setShowRegisteredPassword(!showRegisteredPassword)} active={showRegisteredPassword === true} >{showRegisteredPassword ? 'Hide' : 'Show'}</Button>
                                </FormGroup>

                                <div className='d-flex'>
                                    <Button outline type='submit' color='primary' className='me-3'>Continue</Button>
                                    <Button outline color='primary'  onClick={closeRegPass} >Cancel</Button>
                                </div>

                        </Form></td>


                        <td className={passwordForm ? 'd-flex wd-tds' : 'd-none' }><Form onSubmit={editPassword} className='d-flex flex-column justify-content-around align-items-start mt-3  update-form4' >
                                <FormGroup className="position-relative update-groups ">
                                    <Label for="passwordIn">Password</Label>
                                    <Input type={showPassword ? 'text' : 'password'} id='passwordIn'  valid={passwordCheck && true }  invalid={passwordCheck === false ? true : undefined}   value={password} onChange={(e)=>{ setPassword(e.currentTarget.value) }} placeholder='password' />
                                    <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={passwordCheck && true}  invalid={!passwordCheck ? "true" : undefined} >{passwordText}</FormFeedback>
                                    <FormText>at least 8 characters containing Letters and Symbols and numbers</FormText>
                                    <Button className='d-block my-3' color="info" outline onClick={() => setShowPassword(!showPassword)} active={showPassword === true} >{showPassword ? 'Hide' : 'Show'}</Button>
                                </FormGroup>

                                <FormGroup className="position-relative ">
                                    <Label for="confirmPasswordIn">Confirm Password</Label>
                                    <Input type={showConfirmPassword ? 'text' : 'password'} id='confirmPasswordIn'  valid={confirmPasswordCheck && true }  invalid={confirmPasswordCheck === false  ? true : undefined}   value={confirmPassword} onChange={(e)=>{ setConfirmPassword(e.currentTarget.value) }} placeholder='confirm password'  />
                                    <FormFeedback className={feedback ?'d-flex' : 'd-none'} tooltip valid={confirmPasswordCheck && true}  invalid={!confirmPasswordCheck ? "true" : undefined} >{confirmPasswordText}</FormFeedback>
                                    <FormText>passowrd confirmation shall be the same as the passowrd</FormText>
                                    <Button className='d-block my-2' color="info" outline onClick={() => setShowConfirmPassword(!showConfirmPassword)} active={showConfirmPassword === true} >{showConfirmPassword ? 'Hide' : 'Show'}</Button>
                                </FormGroup>

                                <div className='d-flex'>
                                    <Button outline type='submit' color='primary' className='me-3'>Edit</Button>
                                    <Button outline color='primary'  onClick={closeEditPass} >Cancel</Button>
                                </div>
                        </Form></td>  
                        
                                           
                    </tr>  

                </tbody>
            </Table>
        </Container>
            }
    </div>

  )
}

export default User