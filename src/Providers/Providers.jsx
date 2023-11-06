import { createContext } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import auth from '../FirebaseConfige/FirebaseConfig'
// creating contect
export const AuthContext= createContext()

export default function Providers({children}) {


const CreateUser = (email,password) => {
       return createUserWithEmailAndPassword(auth, email, password)
}

const LoginUser = (email,password) =>{
     return signInWithEmailAndPassword(auth, email, password)
}

const data = {
  CreateUser,
  LoginUser
}
 
return(
<AuthContext.Provider value={data}>
  {children}
</AuthContext.Provider>  
)
   
}
