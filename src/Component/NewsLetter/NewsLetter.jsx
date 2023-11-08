import { Banner, Button, Label, TextInput } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import Swal from 'sweetalert2';
export default function NewsLetter() {

 
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
    Swal.fire({
      title: 'success',
      text: "Successfully Subscribed in our Newsletter",
      icon: 'success',
      confirmButtonText: 'ok'
    })
     
    // reset the form 
    form.reset()
  }


  return (
    <div>
    <Banner>
      <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
          <form onSubmit={handleSubmit}className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
            <Label
              htmlFor="email"
              className="block mx-auto mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
            >
              Sign up for our newsletter
            </Label>
            <TextInput id="email" placeholder="Enter your email" required type="email" />
            <Button type="submit" className='bg-amber-500 my-4 hover:bg-amber-700'>Subscribe</Button>
          </form>
        </div>
       
      </div>
    </Banner>

    </div>
  )
}
