import {useContext} from 'react'
import { AuthContext } from '../../Providers/Providers'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const location = useLocation()
    const {User} = useContext(AuthContext)
   
if(!User){
   return  <Navigate to="/auth/login" state={location.pathname}/>
}
if(User){
     return children
}

}
