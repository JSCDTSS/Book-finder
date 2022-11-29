
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function CheckPermission({ permission, redirect = '/', children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const permissions = location?.state?.permissions
    if (permissions && permissions.includes(permission)) {
      setLoaded(true)
    } else {
      navigate(redirect, { state: location.state })
    }
  }, [permission, location, redirect, navigate])

  return <>
    {loaded ? <>{children}</> : <></>}
  </>
}