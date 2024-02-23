import { useEffect, useState } from "react";

const useGetAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    messege: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading({
        ...loading,
        state: true,
        messege: "Fetching all Books....",
      });

      const fetchAllBooks = async () => {
        const response = await fetch(
          `https://library-management-2lyp.onrender.com/books/allbooks`
        );
        if (!response.ok) {
          const errorMessege = `Fetching books failed ${res.status}`;
          throw new Error(errorMessege);
        } else {
          const allBooks = await response.json();
         
          setBooks(allBooks);
          setLoading({
            ...loading,
            state: false,
            messege: "",
          });
        }
      };
      fetchAllBooks();
    } catch (err) {
      setError(err);
    } 
    
  }, []);

  return { loading, error, books };
};

export default useGetAllBooks;
