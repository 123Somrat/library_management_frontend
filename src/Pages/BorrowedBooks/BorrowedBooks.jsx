import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Providers/Providers'
import BorrowedBook from './BorrowedBook'

export default function BorrowedBooks() {
 const {User} = useContext(AuthContext)
 const [books,setBooks] = useState([])
 const email = User?.email;

    useEffect(()=>{
        fetch(`http://localhost:5000/borrowedbook?email=${email}`)
        .then(res=>res.json())
        .then(data=>setBooks(data))

    },[books])
   console.log(books)
  return (
    <div>
       <div className='grid justify-center md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
       {
        books?.map(book=><BorrowedBook 
         key = {book._id}
         book = {book}
         data = {books}
         setData = {setBooks}
        />)
       }
       </div>
      


    </div>
  )
}
