import React from "react";
import Book from "./Book";
import { SkeletonTheme } from "react-loading-skeleton";
import OwnSkeleton from "./OwnSkeleton";

export default function Books({ books, loading }) {
  return (
    <div className="grid justify-center md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {books?.map((book) => (
        <Book key={book._id} book={book} loading={loading} />
      ))}
    </div>
  );
}
