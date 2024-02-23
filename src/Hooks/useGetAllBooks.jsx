import { useEffect, useState } from "react";

const useGetAllBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://library-management-2lyp.onrender.com/books/allbooks`)
          .then((res) => res.json())
          .then((data) => setBooks(data));
      }, []);

  return books
}

export default useGetAllBooks;