import React, { useState,useEffect} from 'react'
import { Outlet} from 'react-router-dom'
import Nav from '../Component/Nav/Nav'

export default function MainLayout() {
    
    


  return (
    <div className='max-w-6xl mx-auto'>
         <Nav/>
         <div>
            <Outlet/>
         </div>
    </div>
  )
}
