import React from 'react'
import { useState } from 'react'
import CheckOutForm from '../../Components/CheckOutForm'
import Summary from '../../Components/SiteComponents/Summary'

const CheckOut = () => {



    const [continueCheck , setContinueCheck] = useState(false)


    const changeContinue = ()=>{
        setContinueCheck(!continueCheck)
    }

    
  return (
    <div>
       

        {
            continueCheck === false ? 
            <Summary continueCheck={continueCheck} changeContinue={changeContinue} />
            :
            continueCheck === true &&
            <CheckOutForm />
        }




    </div>
    
  )
}

export default CheckOut