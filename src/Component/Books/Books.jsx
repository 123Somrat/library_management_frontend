import React from 'react'
import Book from './Book'

export default function Books({books}) {
    
  return (
    <div className='grid justify-center md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
      {
         books?.map(book=><Book
         key={book._id}
         book={book}
         />)
      }

    </div>
  )
}
