import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
import BorrowedBook from "./BorrowedBook";
import { Helmet } from "react-helmet";
import emptyBookCard from "../../../public/Animation - 1699483558734.json"
import Lottie from "lottie-react";
export default function BorrowedBooks() {
  const { User } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const email = User?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/borrowedbook?email=${email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Borrowed Book</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {books?.length === 0 ? (
        <Lottie animationData={emptyBookCard} loop={true} className="h-[550px]"/>
      ) : (
        <div className="grid justify-center md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {books?.map((book) => (
            <BorrowedBook
              key={book._id}
              book={book}
              data={books}
              setData={setBooks}
            />
          ))}
        </div>
      )}
    </div>
  );
}
