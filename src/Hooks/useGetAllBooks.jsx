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

      fetch(`https://library-management-2lyp.onrender.com/books/allbooks`)
        .then((res) => {
          if (!res.oke) {
            const errorMessege = `Fetching books failed ${res.status}`;
            throw new Error(errorMessege);
          }

          return res.json();
        })

        .then((books) => setBooks(books));
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        messege: "",
      });
    }
  }, []);


  return { loading, error, books };
};

export default useGetAllBooks;
