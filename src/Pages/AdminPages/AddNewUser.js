
import React from 'react'
import EditORNewUser from '../../Components/SiteComponents/EditORNewUser'

const AddNewUser = () => {
  return (
    <div>
        
        <EditORNewUser navigateUrl={'/dashboard/users'}  headText={'New User'} submitBtnText={'Add User'}   sucessMessage={'User added successfully'} action={'add'} />
    </div>
  )
}

export default AddNewUser