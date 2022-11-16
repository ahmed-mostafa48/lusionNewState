


import React from 'react'
import EditORNewUser from '../../Components/SiteComponents/EditORNewUser'

const Register = () => {
  return (
    <div>
        
        <EditORNewUser navigateUrl={'/signin'}  headText={'Sign Up'} submitBtnText={'Sign Up'}  sucessMessage={'Your account has been registered successfully'} action={'reg'}  />

    </div>
  )
}

export default Register