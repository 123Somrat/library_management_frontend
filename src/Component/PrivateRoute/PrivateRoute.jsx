import {useContext} from 'react'
import { AuthContext } from '../../Providers/Providers'
import { Navigate, useLocation } from 'react-router-dom'
import Lottie from "lottie-react";
import loadingBook from "../../../public/Animation - 1699404409825.json"
export default function PrivateRoute({children}) {
    const location = useLocation()
    const {User,loading} = useContext(AuthContext)

    if(loading){
        return <Lottie animationData={loadingBook} loop={true} className="mx-12 w-22 h-22"/>
    }

if(!User?.email){
   return  <Navigate to="/auth/login" state={location.pathname}/>
}
if(User?.email){
     return children
}




}
