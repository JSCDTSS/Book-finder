
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CheckLogin() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => { 
    if (!location.state){
      navigate('/')
    }
  },[])

  return <></>
}
