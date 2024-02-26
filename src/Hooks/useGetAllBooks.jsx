import { useEffect, useState } from "react";

const useGetAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [bookCatagory,setBookCategory] = useState('allbooks')
  const [searchedBook, setSearchedBook] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [loading, setLoading] = useState({
    state: false,
  });
  const [error, setError] = useState(null);




  // fetching books depends on userinteraction
  const getAllBooks = (e) => {
 //  setSearchButtonClicked(false);
    const query = e?.target?.name;
    setBookCategory(query)
  
  };

  // findBook based on serach if here only this booked are showing which books quantity more then 0 or available
  const findBook = (e) => {
    e.preventDefault()
 // fetching available books
    fetch(`https://library-management-2lyp.onrender.com/availablebooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };





  useEffect(() => {
    try {
      setLoading({
        ...loading,
        state: true,
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

  return { loading, error, books , getAllBooks , setBooks , findBook };
};

export default useGetAllBooks;
