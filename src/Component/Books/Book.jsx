import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import OwnSkeleton from "./OwnSkeleton";

export default function Book({ book, loading }) {
  // console.log(Object.keys(book).join(","))

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

  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[670px]">
        <img
          className="p-8 rounded-t-lg h-[500px]"
          src={imageUrl}
          alt="product image"
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {bookName}
          </h5>
          <p className="text-gray-400 text-md">by {authorName} (author)</p>
          <p className="text-gray-400 text-md">catagory : {category}</p>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
            ratings : {rating}
          </span>

          <div className="flex flex-row-reverse">
            <Link
              to={`/bookdetails/${_id}`}
              className="text-white bg-amber-600  hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
