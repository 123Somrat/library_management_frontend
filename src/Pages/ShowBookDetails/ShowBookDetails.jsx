import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import booklogo from "../../assets/book-4986.svg"
export default function ShowBookDetails() {
  // get bbok data 
  const book = useLoaderData();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  // destructure the book object
  const {
    _id,
    bookName,
    authorName,
    description,
    rating,
    imageUrl,
    quantity,
    category,
  } = book;

  const onCloseModal = () =>{
    setOpenModal(false)
  }



const openModel = () =>{

  setOpenModal(true)

}
 



  //console.log(typeof quantity)
  return (
<div>
  <div className="bg-red-600">
    <Modal show={openModal} className=" w-[450px] md:w-[650px] h-[450px] mx-auto"  onClose={onCloseModal} popup>
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-4 mx-4">
        <img src={booklogo} className="w-12 h-12 mx-auto"/>
        <h3 className="text-xl  text-gray-900 dark:text-red text-center">Book borrow form</h3>
        <div>
          <div className="mb-[6px] block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
         
            id="email"
            
          />
        </div>
        <div>
          <div className="mb-[4px] block ">
            <Label htmlFor="password" value="Return date" />
          </div>
          <TextInput id="password" type="date" required />
        </div>
        <Button className="bg-amber-600 block mx-auto">Submit</Button>
        <p></p>
      </div>
    </Modal.Body>
  </Modal>

  </div>





    <div className="my-12 mx-8 flex flex-col md:flex-row h-[550px]">
      <img
        className="object-cover w-full rounded-t-lg h-[250px] md:h-auto  md:rounded-none md:rounded-l-lg"
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col  p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {bookName}
        </h5>
        <p className="text-gray-400 mb-2">Author : {authorName}</p>
        <p className="text-gray-400 mb-2">Tag : {category}</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
          Description : {description}
        </p>
        <p className="text-gray-400 mb-2">Available  : {Number(quantity)}</p>
        <span className="bg-blue-100 w-[100px] text-blue-800 text-xs font-semibold  px-2 py-2 rounded dark:bg-blue-200 dark:text-blue-800 ">
          ratings : {rating}
        </span>
        <div className="my-8">
        {Number(quantity)<=0 ?<button type="button" className=" text-white bg-amber-500 hover:bg-amber-700  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 disabled">Borrow</button> :<button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="focus:outline-none text-white bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={openModel}>Borrow</button>}
         <Link to={"/readbook"}><button type="button" className="focus:outline-none text-white bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Read</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
}
