import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/Providers";
export default function AddBook() {
  const { User } = useContext(AuthContext);
  // Getting form Data
  const handleSubmit = (e) => {
    e.preventDefault();

    // selcte the form
    const form = e.target;

    const bookName = form.bookName.value;
    const description = form.description.value;
    const authorName = form.authorName.value;
    const rating = form.rating.value;
    const imageUrl = form.image.value;
    const quantity = form.quantity.value;
    const category = form.category.value;

    // book object
    const book = {
      bookName,
      authorName,
      description,
      rating,
      imageUrl,
      quantity,
      category,
      User,
    };

    /*
    
    fetch("http://localhost:5000/createbook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
    .then((res) => res.json())
    .then((data) => Swal.fire({
      title: 'succes!',
      text: 'book added successfully',
      icon: 'success',
      confirmButtonText: 'ok'
    }).catch(err=>console.log(err)));
    
*/
    // backend api

    const url = "http://localhost:5000/createbook";

    // useing axios interceptor for manage network related issue
    axios.interceptors.response.use(
      (response) => {
        // Do something with successful response
        return response;
      },
      (error) => {
        // Do something with response error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Response error:",
            error.response.status,
            error.response.data
          );
        }

        return Promise.reject(error);
      }
    );
    // send book info in backend
    axios
      .post(url, book)
      .then((data) =>
        Swal.fire({
          title: "succes!",
          text: "book added successfully",
          icon: "success",
          confirmButtonText: "ok",
        })
      )

      .catch((err) =>
        Swal.fire({
          title: "error!",
          text: "Opps Can Not Add Book",
          icon: "error",
          confirmButtonText: "ok",
        })
      );

    // reset the form after adding book
    form.reset();
  };

  return (
    <div className="my-8 mx-4 md:mb-28">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Book</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-center my-4 text-xl text-transparent  bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">
        Add Book
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="bookName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="Book Name"
              required
            />
            <label
              htmlFor="author name"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="author_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="Book writer Name"
              required
            />
            <label
              htmlFor="image"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="https://picsum.photos/200/300"
              required
            />
            <label
              htmlFor="book_category"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="book_category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="Type of book"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="Give sort description about the book"
              required
            />

            <div>
              <label
                htmlFor="rating"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                placeholder="Rating"
                required
              />
            </div>
            <label
              htmlFor="quantity"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="text-white  bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800 block mx-auto lg:w-[250px]"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
