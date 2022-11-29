import { useState } from "react"
import { useLocation } from "react-router-dom"
import { updateOtherUser } from "../utils/backendRequest"

export default function BanUserButton({ selectedUser }) {
  const location = useLocation()
  const [isSuspended,setIsSuspended] = useState(selectedUser.isSuspended)

  function changeSuspension() {
    console.log('ok')
    updateOtherUser(location.state.token, {
      uniqueId: selectedUser.username,
      fields: {
        isSuspended: !isSuspended
      }
    }).then(res => {
      if (res.data.ok){
        setIsSuspended(prev => !prev)
      }
    })
  }

  return selectedUser && <>
    <button onClick={changeSuspension}>
      {isSuspended ? 'Unsuspend' : 'Suspend'}
    </button>
  </>
}