import React from 'react'
import Banner from '../../Component/Banner/Banner'
import BookesCategory from '../../Component/BookesCategory/BookesCategory'
import Footers from '../../Component/Footers/Footers'

export default function Home() {
  return (
    <div>
      
       <section>
       <Banner/>
       </section>
      <section>
         <BookesCategory/>
      </section>
      <footer>
         <Footers/>
      </footer>
      </div>
  )
}
