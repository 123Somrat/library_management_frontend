import { useEffect, useState } from "react";

const useGetAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [bookCatagory,setBookCategory] = useState('allbooks')
  const [loading, setLoading] = useState({
    state: false,
    messege: "",
  });
  const [error, setError] = useState(null);




  // fetching books depends on userinteraction
  const getAllBooks = (e) => {
   // setSearchButtonClicked(false);
    const query = e?.target?.name;
    setBookCategory(query)
  
  };



  useEffect(() => {
    try {
      setLoading({
        ...loading,
        state: true,
        messege: "Fetching all Books....",
      });

      const fetchAllBooks = async () => {
        const response = await fetch(
          `https://library-management-2lyp.onrender.com/books/${bookCatagory}`
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
  }, [bookCatagory]);

  return { loading, error, books , getAllBooks };
};

export default useGetAllBooks;
