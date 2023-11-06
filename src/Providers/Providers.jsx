import React, { createContext } from 'react'

// creating contect
export const AuthContext= createContext()

export default function Providers({children}) {

const data = {
  name:"somrat"

}
 
return(
<AuthContext.Provider value={data}>
  {children}
</AuthContext.Provider>  
)
   
}
