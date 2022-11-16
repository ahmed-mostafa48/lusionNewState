import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import Store from '../../Context/Store'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import  ClipLoader from 'react-spinners/ClipLoader'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip';
import '../../Style/EditORNewUser.css'
import Swal from 'sweetalert2'

const EditORNewUser = (props) => {

    
    const {ID} = useParams()


    const navigate = useNavigate()

    const context = useContext(Store)

    const [siteAdmin , setSiteAdmin] = useState(false)
    const [siteAdminRole , setSiteAdminRole] = useState('Member')
    const [siteAdminText , setSiteAdminText] = useState('Role')
    const [siteAdminCheck , setSiteAdminCheck] = useState(false)



    const [image,setImage] = useState('https://i.ibb.co/TKNG65J/default-profile-image.jpg')
    // const [image,setImage] = useState('')

    const [imageText,setImageText] = useState('User Image')
    const [imageCheck,setImageCheck] = useState(null)


    const [Name,setName] = useState('')
    const [NameCheck,setNameCheck] = useState(null)
    const [NameText,setNameText] = useState('Name')

    const [email,setEmail] = useState('')
    const [emailCheck,setEmailCheck] = useState(null)
    const [emailText,setEmailText] = useState('Email')

    const [userName,setUserName] = useState('')
    const [userNameCheck,setUserNameCheck] = useState(null)
    const [userNameText,setUserNameText] = useState('User Name')

    const [password,setPassword] = useState('')
    const [passwordCheck,setPasswordCheck] = useState(null)
    const [passwordText,setPasswordText] = useState('Password')

    const [showPassword, setShowPassword] = useState(false);


    const [phoneNumber,setPhoneNumber] = useState('')
    const [phoneNumberCheck,setPhoneNumberCheck] = useState(null)
    const [phoneNumberText,setPhoneNumberText] = useState('Phone Number')


    const [birthDate,setBirthDate] = useState('')
    const [birthDateCheck,setBirthDateCheck] = useState(null)
    const [birthDateText,setBirthDateText] = useState('Birth Date')



    const [gender, setGender] = useState('Male');
    const [genderCheck,setGenderCheck] = useState(true)
    const [genderText,setGenderText] = useState('Gender')


    const [emailExist, setEmailExist] = useState(false);

    const [loading, setLoading] = useState(false);

    const [axiosUrl, setAxiosUrl] = useState('');
    const [axiosMethod, setAxiosMethod] = useState('');






    useEffect(()=>{
        props.action === 'add' ? setImage('') :  props.action === 'reg' && setImage('https://i.ibb.co/TKNG65J/default-profile-image.jpg')
    



        if (props.action === 'add' || props.action === 'reg') {
            setAxiosUrl('http://localhost:9000/users')
            setAxiosMethod('post')
        }

        
        else if ( props.action === 'edit' ) {
            setAxiosUrl(`http://localhost:9000/users/${ID}`)
            setAxiosMethod('put')
     

            axios({
                method : 'get',
                url : `http://localhost:9000/users/${ID}`
            }).then((info)=>{
                // console.log(info.data);

                setSiteAdmin(info.data.siteAdmin)
                setSiteAdminRole(info.data.siteAdmin === true ? 'Admin'  : info.data.siteAdmin === false && 'Member'  )
                setImage(info.data.image)
                setName(info.data.Name)
                setEmail(info.data.email)
                setUserName(info.data.userName)
                setPassword(info.data.password)
                setPhoneNumber(info.data.phoneNumber)
                setBirthDate(info.data.birthDate)
                setGender(info.data.gender)
                

            })


        }
    
},[])


    const registerFormReset = ()=>{
        setName('')
        setEmail('')
        setUserName('')
        setPassword('')
        setPhoneNumber('')
        setBirthDate('')
        setGender('Male')

        setNameCheck(null)
        setEmailCheck(null)
        setUserNameCheck(null)
        setPasswordCheck(null)
        setPhoneNumberCheck(null)
        setBirthDateCheck(null)
        setGenderCheck(true)

        setNameText('Name')
        setEmailText('Email')
        setUserNameText('User Name')
        setPasswordText('Password')
        setPhoneNumberText('Phone Number')
        setBirthDateText('Birth Date')
        setGenderText('Gender')

        setEmailExist(false)
        setShowPassword(false)


        props.action === 'add' ||  props.action === 'edit' ? setImage('') :  props.action === 'reg' && setImage('https://i.ibb.co/TKNG65J/default-profile-image.jpg')
        setImageCheck(null)
        setImageText('User Image')

        setSiteAdmin(false)
        setSiteAdminRole('Member')
        setSiteAdminCheck(false)
        setSiteAdminText('Role')


    }



       


    const checks = ()=>{

        
        let n =  context.storeCheckReturn(setNameText,'Name',setNameCheck , true, null  , (Name.length < 3 || context.storeIncludesSpaceNoNumber(Name) || context.storeSymbolCheck.test(Name) ) )

        let em =  context.storeCheckReturn(setEmailText,'Email',setEmailCheck ,  true, null  , ( !context.storeEmailCheck.test(email)) ) 

        let us =  context.storeCheckReturn(setUserNameText,'User Name',setUserNameCheck ,  true, null  , ( userName.length < 6 || userName.includes(' ') || !context.storeIncludesNumber(userName) || context.storeUserSymbolCheck.test(userName) || !context.storeCharsCheck.test(userName)   ) ) 

        let ps =  context.storeCheckReturn(setPasswordText,'Password',setPasswordCheck ,  true, null  , (password.length < 8 || password.includes(' ') || !context.storeIncludesNumber(password) || !context.storeSymbolAndSpaceCheck.test(password) ) ) 
        
        let ph =  context.storeCheckReturn(setPhoneNumberText,'Phone Number',setPhoneNumberCheck , true , null , (!context.storePhoneCheck.test(phoneNumber)) ) 

        let bd =  context.storeCheckReturn(setBirthDateText,'Birth Date',setBirthDateCheck , false , '' , (birthDate === '') ) 

        let gd =  context.storeCheckReturn(setGenderText,'Gender',()=>{} , false , gender , (gender === '') ) 
        // let gd =  context.storeCheckReturn(setGenderText,'Gender',setGenderCheck , false , gender , (gender === '') ) 


        let adm =  context.storeCheckReturn(setSiteAdminText,'Role',()=>{} , false , siteAdmin , (siteAdmin === '') ) 

        let img =  context.storeCheckReturn(setImageText,'User Image',setImageCheck , true, null  ,  (image === '') )

        let condition = false ;
        props.action === 'add' ||  props.action === 'edit'  ? (condition = (n && em && us && ps && ph && bd && gd && adm && img)) :  props.action === 'reg' &&  (condition = ( n && em && us && ps && ph && bd && gd))

        // console.log(n ,em ,us , ps , ph , bd , gd);          
       
        if (condition ) {

            axios({
                url: 'http://localhost:9000/users',
                method : 'get',
            }).then((info)=>{
            //    console.log(info.data);


               let emailCheckExist = []

                if (props.action === 'add' || props.action === 'reg') {
                    
                     emailCheckExist =  info.data.map((user)=>{
                  
                        return  email === user.email
        
                       })   

                    //    console.log('a');

                }

                else if ( props.action === 'edit' ) {
                    
                    // console.log(typeof ID);
                     emailCheckExist =  info.data.map((user)=>{
                        // console.log(typeof user.id);

                        return  user.email === email  && user.id !== parseInt(ID)  
                        // return  user.email === email  && user.id != ID

                       })   

                    //    console.log('b');

               }


            //    console.log(emailCheckExist);

               if (emailCheckExist.includes(true)) {
                    
                    setEmailExist(true)

               }

               else{

                setLoading(true)


                    if ( props.action === 'edit' && ID == context.storeLoggedUser.id && siteAdmin === false ) {

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
                                    url: axiosUrl,
                                    method : axiosMethod,
                                    data : {
                                        Name,
                                        email,
                                        userName,
                                        password,
                                        phoneNumber,
                                        birthDate,
                                        gender,
                                        siteAdmin,
                                        image                
                                    }
                    
                                }).then((info)=>{
                                                              

                                    localStorage.removeItem("user")
                                    localStorage.user = JSON.stringify(info.data)
                                    context.storeLogIn()  
                        
                                    setTimeout(()=>{
                                        setLoading(false)
                                    },4000)
                
                                    setTimeout(()=>{
                                        navigate(props.navigateUrl,{state :{sucessMessage : props.sucessMessage }})
                                    },4200)

                                    Swal.fire({
                                        icon : 'warning',
                                        iconColor : 'danger',
                                        title : 'You no longer be an Admin.',
                                        text : "You can't access the dashboard , go to homepage." ,
                                        confirmButtonColor : '#db4646',
                                        color : '#db4646',
                                    })


                                })
                    
                    
                            }
                    
                        })


                    }
                                
                    else{
                        
                        axios({
                            url: axiosUrl,
                            method : axiosMethod,
                            data : {
                                Name,
                                email,
                                userName,
                                password,
                                phoneNumber,
                                birthDate,
                                gender,
                                siteAdmin,
                                image                
                            }
                        })
                        .then((info)=>{
                            // console.log(info.data);
        
        
                            if ( props.action === 'edit' && ID == context.storeLoggedUser.id ) {
                                localStorage.removeItem("user")
                                localStorage.user = JSON.stringify(info.data)
                                context.storeLogIn()  
                            }
        
                            setTimeout(()=>{
                                setLoading(false)
                            },4000)
        
                            setTimeout(()=>{
                                navigate(props.navigateUrl,{state :{sucessMessage : props.sucessMessage }})
                            },4200)
                        })
        
                        
                    }



             
                }
              

            })


        }
    }

  

    const formRegister = (fr)=>{
        fr.preventDefault()

        setEmailExist(false)

        checks()




    }


    const genderChange = (e)=>{
        setGender(e.currentTarget.value)

        setGenderCheck(!genderCheck)
    }
    

    const roleChange = (e)=>{
        setSiteAdminRole(e.currentTarget.value )
        setSiteAdmin(!siteAdmin)
        
        setSiteAdminCheck(!siteAdminCheck)


    }

  return (
    <div className={props.action === 'reg' ? 'bg-light register-div d-flex flex-column justify-content-between align-items-center '  
                                              : 'bg-light edit-new-maindiv d-flex flex-column justify-content-between align-items-center '  }>

    <ReactTooltip type='' className='fw-bold ' backgroundColor='#0dcaf0' textColor='' event='click' globalEventOff='click' place='left' effect="solid" padding="8px"  />

    <div className={props.action === 'reg' ?  'bg-white sign-up-div d-flex flex-column justify-content-between align-items-center border border-2 reg-div mt-4 ' 
       
     :  'bg-white sign-up-div d-flex flex-column justify-content-between align-items-center border border-2 edit-new-div mt-4 ' } >


        <h1 className={props.action === 'reg' ? 'text-success my-3': 'text-success my-3 head-new-edit' } >{props.headText}</h1>
        <Form onSubmit={formRegister} onReset={registerFormReset}  
        className={props.action === 'reg' ? 'd-flex flex-column justify-content-around align-items-start reg-form' 
        : 'd-flex flex-column justify-content-around edit-new-form'  }>


    { (props.action === 'add' ||  props.action === 'edit') &&
    <div> 
        <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' } >
                    <Label for="imageIn" className={imageCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  imageCheck === false && (props.action === 'add'  || props.action === 'edit') ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'} >{imageText}</Label>
                    <Input type='text' id='imageIn'  valid={imageCheck && true }  invalid={imageCheck === false ? true : undefined}   value={image} onChange={(e)=>{ setImage(e.currentTarget.value) }} data-tip="Ex : https://i.ibb.co/TKNG65J/default-profile-image.jpg"  placeholder='Enter Image Url' />                   
                    <FormText className={props.action === 'add'  || props.action === 'edit' ? 'image-txt-new-edit' : ''} >Ex: https://i.ibb.co/TKNG65J/default-profile-image.jpg</FormText>
        </FormGroup>

        <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                <Label for="AdminIn" className='text-info fw-bold lab-s'>{siteAdminText}</Label>
                <Input type="select" id="AdminIn" name="siteAdmin" value={siteAdminRole} onChange={ roleChange } >
                    <option>Member</option>
                    <option>Admin</option>
                </Input>
        </FormGroup>
    </div>}


            <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                    <Label for="NameIn" className={NameCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  NameCheck === false && (props.action === 'add'  || props.action === 'edit' ) ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'}  >{NameText}</Label>
                    <Input type='text' id='NameIn'  valid={NameCheck && true }  invalid={NameCheck === false ? true : undefined}   value={Name} onChange={(e)=>{ setName(e.currentTarget.value) }} data-tip="name without any Symbols or numbers"  placeholder='Enter Your Name' />                   
            </FormGroup>


            <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                <Label for="emailIn" className={emailCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  emailCheck === false && (props.action === 'add'  || props.action === 'edit') ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'}  >{emailText}</Label>
                <Input type='text' id='emailIn'  valid={emailCheck && true }  invalid={emailCheck === false ? true : undefined}   value={email} onChange={(e)=>{ setEmail(e.currentTarget.value) }} data-tip="EX : name@domain.com" placeholder='Enter Your Email' />  
            </FormGroup>

            <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                <Label for="userNameIn" className={userNameCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  userNameCheck === false && (props.action === 'add'  || props.action === 'edit') ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'} >{userNameText}</Label>
                <Input type='text' id='userNameIn'  valid={userNameCheck && true }  invalid={userNameCheck === false ? true : undefined}   value={userName} onChange={(e)=>{ setUserName(e.currentTarget.value) }} data-tip="at least 6 characters contain Letters and numbers and can contain only - and/or _" placeholder='Enter Your User Name' />
              </FormGroup>

            <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                <Label for="passwordIn" className={passwordCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  passwordCheck === false && (props.action === 'add'  || props.action === 'edit') ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'}>{passwordText}</Label>
                <div className='position-relative'>
                    <Input type={showPassword ? 'text' : 'password'} id='passwordIn' valid={passwordCheck && true }  invalid={passwordCheck === false ? true : undefined}   value={password} onChange={(e)=>{ setPassword(e.currentTarget.value) }}  data-tip="at least 8 characters containing Letters and Symbols and numbers"  placeholder='Your Password' />
                    <AiFillEyeInvisible className={showPassword ?  'd-none' : 'text-info fs-4 position-absolute top-50 mg-r translate-middle' } onClick={()=>setShowPassword(true)} />
                    <AiFillEye className={!showPassword ?  'd-none' : 'text-info fs-4 position-absolute top-50 mg-r translate-middle' } onClick={()=>setShowPassword(false)} />
                </div>
            </FormGroup>


            <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                <Label for="phoneNumberIn" className={phoneNumberCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  phoneNumberCheck === false && (props.action === 'add'  || props.action === 'edit') ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'} >{phoneNumberText}</Label>
                <Input type='text' id='phoneNumberIn'  valid={phoneNumberCheck && true }  invalid={phoneNumberCheck === false ? true : undefined}   value={phoneNumber} onChange={(e)=>{ setPhoneNumber(e.currentTarget.value) }} data-tip="start with a plus sign, followed by the country code and national number" placeholder='Enter Your Phone Number' />
            </FormGroup>

                <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                        <Label for="birthDateIn" className={birthDateCheck === false && props.action === 'reg' ? 'text-danger fw-bold lab-s' :  birthDateCheck === false && (props.action === 'add'  || props.action === 'edit') ? 'text-danger fw-bold lab-new-edit' : 'text-info fw-bold lab'} >{birthDateText}</Label>
                        <Input type="date" id="birthDateIn" name="birthDate" placeholder="birthDate" valid={birthDateCheck && true }  invalid={birthDateCheck === false ? true : undefined}  value={birthDate} onChange={(e)=>{ setBirthDate(e.currentTarget.value) }} />
                </FormGroup>

            <FormGroup className={props.action === 'reg' ? " groups" : 'edit-new-groups' }>
                <Label for="genderIn" className='text-info fw-bold lab-s'>{genderText}</Label>
                <Input type="select" id="genderIn" name="gender" value={gender} onChange={ genderChange } >
                    <option>Male</option>
                    <option>Female</option>
                </Input>
            </FormGroup>

            <div className={!emailExist ? 'd-none' : 'd-flex flex-column  justify-content-center align-items-center w-100 mb-2'} >
                <h2 className='text-danger reg-tx1'>Email already Exists</h2>
                <h5><Link to='/signin' className='text-info reg-link1' >Go To Sign In Page</Link></h5>
            </div>

            
            <FormGroup className={props.action === 'reg' ? 'reg-btns d-flex' :'edit-new-btns d-flex'  }>

                <Button  type='submit' color='success' className={props.action === 'reg' ? 'btn-reg d-flex  justify-content-center align-items-center me-3' : 'btn-edit-new d-flex  justify-content-center align-items-center me-3'}>
                    <ClipLoader size={20} color="#ffffff" className={loading ? 'me-3' : 'd-none'}/>
                {props.submitBtnText}</Button>

                <Button  type='reset' color='danger'>Reset</Button>

            </FormGroup>

        </Form>



</div>



</div>
  )
}


export default EditORNewUser