import React from 'react'
import { useState , useContext } from 'react'
import { Container, Form, FormGroup, Input, Label ,Button } from 'reactstrap'
import '../Style/CheckOutForm.css'
import Store from '../Context/Store'
import ReactTooltip from 'react-tooltip';

const CheckOutForm = () => {

    const context = useContext(Store)

    const [cardNumber , setCardNumber] = useState(0)
    const [cardNumberCheck , setCardNumberCheck] = useState(null)
    const [cardNumberText , setCardNumberText] = useState('Card Number')

    
    const [expire , setExpire] = useState('')
    const [expireCheck , setExpireCheck] = useState(null)
    const [expireText , setExpireText] = useState('Expires')

     
    const [cvc , setCvc] = useState('')
    const [cvcCheck , setCvcCheck] = useState(null)
    const [cvcText , setCvcText] = useState('CVC/CVV')


    const [postCode , setPostCode] = useState('')
    const [postCodeCheck , setPostCodeCheck] = useState(null)
    const [postCodeText , setPostCodeText] = useState('Post/Zip Code')

     
    const [address , setAddress] = useState('')
    const [addressCheck , setAddressCheck] = useState(null)
    const [addressText , setAddressText] = useState('Address')


    const [visa , setVisa] = useState(true)
    const [deliver , setDeliver] = useState(false)


    const [payMessage , setPayMessage] = useState('')
    const [payMessageCheck , setPayMessageCheck] = useState(null)



    const changePayType =(setTrue , setFalse)=>{

        setTrue(true)

        setFalse(false)



        if (visa === true) {
            setCardNumberCheck(null)
            setCardNumberText('Card Number')
            setCardNumber('')

            setExpireCheck(null)
            setExpireText('Expires')
            setExpire('')

            setCvcCheck(null)
            setCvcText('CVC/CVV')
            setCvc('')

            setPostCodeCheck(null)
            setPostCodeText('Post/Zip Code')
            setPostCode('')

           

        }

        setPayMessage('')
        setPayMessageCheck(null)

    }



    const checkoutFormSubmit =(e)=>{
        e.preventDefault()

        let adr =  context.storeCheckReturn(setAddressText,'Address',setAddressCheck , true, null  ,  (address.length < 8 ) )

        if (visa === true) {
            let num =  context.storeCheckReturn(setCardNumberText,'Card Number',setCardNumberCheck , true, null  ,  ( !(cardNumber.length >= 13 && cardNumber.length <= 16)) )
            let c =  context.storeCheckReturn(setCvcText,'CVC/CVV',setCvcCheck , true, null  ,  (cvc.length !== 3 ) )
            let p =  context.storeCheckReturn(setPostCodeText,'Post Code',setPostCodeCheck , true, null  ,  (postCode.length !== 5 ) )
            let exp =  context.storeCheckReturn(setExpireText,'Expires',setExpireCheck , true, null  ,  (expire === '' ) )
           
            if (num && c && p && exp && adr) {
                // console.log('ok by visa');
                setPayMessage('Data Ok By Visa')
                setPayMessageCheck(true)
            }

            else{
                setPayMessage('Visa Data Wrong')
                setPayMessageCheck(false)
    
            }
        }

        else if (visa === false) {
            if (adr) {
                // console.log('ok on deliver');
                setPayMessage('Data Ok On Deliver')
                setPayMessageCheck(true)

            }

            else{
                setPayMessage('Deliver Data Wrong')
                setPayMessageCheck(false)
    
            }
        }


        



    }

    const checkoutFormReset =(e)=>{
        e.preventDefault()
    }



  return (
    <Container className='mt-2 d-flex flex-column justify-content-around align-items-center'>
    <ReactTooltip className='fw-bold ' backgroundColor='#0d6efd' textColor='' event='click' globalEventOff='click' place='left' effect="solid" padding="8px"  />

        <h1 className='text-center text-muted mb-4'>CheckOut</h1>


        <Form onSubmit={checkoutFormSubmit} onReset={checkoutFormReset}  className='checkout-form d-flex flex-column justify-content-around ' >
            
            <Label className="fw-bold paytype-head" data-tip="Choose to Pay by visa or when reciving the order " data-event="mouseover" data-event-off="mouseleave" >Payment Type</Label>
            <div className='d-flex mb-3 paytype-div'>
                <FormGroup check className="visa-group">
                        <Input type='radio'  name="pay" id='visaIn'  checked={visa} onChange={()=>changePayType(setVisa , setDeliver) }  />                   
                        <Label check for='visaIn' className=' text-muted fw-bold paytype-label'  >By Visa</Label>                    
                </FormGroup>

                <FormGroup check className="ms-3  ">
                        <Input type='radio'  name="pay"  id='deliverIn' checked={deliver} onChange={()=>changePayType(setDeliver,setVisa) }  />                   
                        <Label check for='deliverIn'  className=' text-muted fw-bold paytype-label ' >Upon Delivery</Label>                    
                </FormGroup>
            </div>

            <FormGroup className="border border-1 p-4 border-muted "  >
            <Label className="fw-bolder cardnumber-head " >Credit Card Details</Label>

                <FormGroup  className=" cardnumber-label" >
                    <Label for="cNumIn" className={cardNumberCheck === false ? 'text-danger fw-bold ' : ' text-muted fw-bold '} >{cardNumberText}</Label>
                    <Input disabled={visa === false ? true : false} type='number' id='cNumIn'  valid={cardNumberCheck && true }  invalid={cardNumberCheck === false ? true : undefined}   value={cardNumber} onChange={(e)=>setCardNumber(e.currentTarget.value) } 
                            data-tip="Card Number between 13 and 16 digits "   placeholder='Credit Card Number' />                   
                </FormGroup>

                <div className='d-flex justify-content-between align-items-center credit-items-div'>
                    <FormGroup className="credit-items ">
                        <Label for="expireIn" className={expireCheck === false ? 'text-danger fw-bold card-items-labels-w' : 'text-muted fw-bold card-items-labels'} >{expireText}</Label>
                        <Input  disabled={visa === false ? true : false}  type='month' id='expireIn'  valid={expireCheck && true }  invalid={expireCheck === false ? true : undefined}   value={expire} onChange={(e)=>setExpire(e.currentTarget.value) }
                        data-tip="Card Expire Date " />                   
                    </FormGroup>
                    <FormGroup className="credit-items ">
                        <Label for="cvcIn" className={cvcCheck === false ? 'text-danger fw-bold card-items-labels-w ' : 'text-muted fw-bold card-items-labels'} >{cvcText}</Label>
                        <Input  disabled={visa === false ? true : false} type='number' id='cvcIn'  valid={cvcCheck && true }  invalid={cvcCheck === false ? true : undefined}   value={cvc} onChange={(e)=>setCvc(e.currentTarget.value) } 
                         data-tip="CVC/CVV is 3 digits "  placeholder='CVC/CVV' />                   
                    </FormGroup>     
                    <FormGroup className=" credit-items">
                        <Label for="postCodeIn" className={postCodeCheck === false ? 'text-danger fw-bold card-items-labels-w' : 'text-muted fw-bold card-items-labels'} >{postCodeText}</Label>
                        <Input  disabled={visa === false ? true : false} type='number' id='postCodeIn'  valid={postCodeCheck && true }  invalid={postCodeCheck === false ? true : undefined}   value={postCode} onChange={(e)=>setPostCode(e.currentTarget.value) }
                         data-tip="Post/Zip Code is 5 digits "    placeholder='Post Code' />                   
                    </FormGroup>
                </div>
            </FormGroup>



            <FormGroup className="mt-4  ">
                    <Label for="addressIn" className={addressCheck === false ? 'text-danger fw-bold address-label ' : 'fw-bold '} >{addressText}</Label>
                    <Input type='text' id='addressIn'  valid={addressCheck && true }  invalid={addressCheck === false ? true : undefined}   value={address} onChange={(e)=>setAddress(e.currentTarget.value) }  
                        data-tip="Your shipping address "  placeholder='Address' />                   
             </FormGroup>


            <Label className={payMessageCheck === true ? 'text-center text-success mt-2 fw-bolder pay-message' : payMessageCheck === false ?'text-center text-danger mt-2 fw-bolder  pay-message' : 'd-none pay-message' } >{payMessage}</Label>

            <FormGroup className=" ">
                <Button  type='submit' color='success' className='mt-5 w-50 bay-btn-form'>Pay ${context.storeGetTotalPrice()}</Button>
            </FormGroup>


        </Form>


    </Container>
  )
}

export default CheckOutForm