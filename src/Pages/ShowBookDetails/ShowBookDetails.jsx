import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ShowBookDetails() {
  const book = useLoaderData();
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
  console.log(typeof quantity)
  return (
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
        {Number(quantity)<=0 ?<button type="button" className=" text-white bg-amber-500 hover:bg-amber-700  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 disabled">Borrow</button> : <button type="button" class="focus:outline-none text-white bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Borrow</button>}
        <button type="button" className="focus:outline-none text-white bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Read</button>
        </div>
      </div>
    </div>
  );
}
