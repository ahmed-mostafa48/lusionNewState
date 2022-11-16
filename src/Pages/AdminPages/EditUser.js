import React from 'react'
import EditORNewUser from '../../Components/SiteComponents/EditORNewUser'

const EditUser = () => {

  
    
  return (
    <div>
        <EditORNewUser navigateUrl={'/dashboard/users'}  headText={'Edit User'} submitBtnText={'Edit User'}  
         sucessMessage={'account updated successfully'} action={'edit'} />
    </div>
  )
}

export default EditUser