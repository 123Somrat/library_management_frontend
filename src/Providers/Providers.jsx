import { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth"
import auth from '../FirebaseConfige/FirebaseConfig'
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from 'react-router-dom'

// creating contect
export const AuthContext= createContext()

export default function Providers({children}) {
const [User,setUser] = useState(null);
const [loading,setLoading]=useState(true)

const CreateUser = (email,password) => {
  
       return createUserWithEmailAndPassword(auth, email, password)
}

const LoginUser = (email,password) =>{
     return signInWithEmailAndPassword(auth, email, password)
}


// obserbing user status
useEffect(()=>{
   const sideEffect = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          setUser(user)
          setLoading(false)
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
 return () =>{
   sideEffect()
 }

},[])


// signOut user

const userSignOut = () =>{
    signOut(auth)
    .then(() => { Swal.fire({
                title: 'succes!',
                text: "user signOut successfully",
                icon: 'success',
                confirmButtonText: 'ok'
              })
               setUser(null),
                <Navigate to="/" />
            })
      .catch((error) => {
        Swal.fire({
            title: 'error!',
            text: "some thing wrong",
            icon: 'error',
            confirmButtonText: 'ok'
          })
      });
}



const data = {
  CreateUser,
  LoginUser,
  userSignOut,
  User,
  loading
}
 
return(
<AuthContext.Provider value={data}>
  {children}
</AuthContext.Provider>  
)
   
}
