//import programmingSvg from "../../assets/programming-web-code-black-out"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Books from "../Books/Books";
import { Button, TextInput } from "flowbite-react";
import useGetAllBooks from "../../Hooks/useGetAllBooks";
import "react-loading-skeleton/dist/skeleton.css";
import OwnSkeleton from "../Books/OwnSkeleton";
export default function BookesCategory() {
  // const [booksCategory, setBooksCategory] = useState([]);
  const [searchedBook, setSearchedBook] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const { loading, error, books } = useGetAllBooks();

  const getAllBooks = (e) => {
    setSearchButtonClicked(false);
    const query = e?.target?.name;

    // get all books
    fetch(`https://library-management-2lyp.onrender.com/books/${query}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  // findBook based on serach if here only this booked are showing which books quantity more then 0 or available

  const findBook = (e) => {
    e.preventDefault();

    setSearchButtonClicked(true);

    // fetching available books
    fetch(`https://library-management-2lyp.onrender.com/availablebooks`)
      .then((res) => res.json())
      .then((data) => setSearchedBook(data));
  };

  if (loading.state) {
    //  return <h1 className="text-center  w-[250px] d-block mx-auto p-8 bg-amber-600 text-white m-4 outline-none rounded-xl">{loading.messege}</h1>

    return (
      <div className="grid justify-center md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <OwnSkeleton key={n} />
        ))}
      </div>
    );
  }

  return (
    <div id="booksCategory">
      <div className="border-b  border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <Link
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              onClick={getAllBooks}
              name="allbooks"
            >
              All Bookes
            </Link>
          </li>
          <li className="mr-2">
            <NavLink
              className="inline-flex items-center justify-center p-4  hover:border-b-2 rounded-t-lg  dark:text-blue-500 hover:border-gray-300 dark:border-blue-500  group"
              aria-current="page"
              name="programming"
              onClick={getAllBooks}
            >
              <svg
                className="w-4 h-4 mr-2  dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Programming
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              name="testing"
              onClick={getAllBooks}
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
              </svg>
              Testing
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              name="science_fiction"
              onClick={getAllBooks}
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
              Science Fiction
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block p-4 text-gray-400 rounded-t-lg hover:border-b-2  dark:text-gray-500"
              name="time_management"
              onClick={getAllBooks}
            >
              Time Management
            </NavLink>
          </li>
          <form onSubmit={findBook}>
            <TextInput
              placeholder="filter for available books"
              type="text"
              className="my-2 inline-block  lg:ml-40 mr-2"
              disabled
            />
            <Button type="submit" className="bg-amber-500 inline-block">
              Filter
            </Button>
          </form>
        </ul>
      </div>
      {searchButtonClicked ? (
        <Books books={searchedBook} />
      ) : (
        <Books books={books} loading={loading} />
      )}
    </div>
  );
}
