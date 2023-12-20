import Swal from "sweetalert2";

export default function BorrowedBook({ book, datas, setData }) {
  const {
    _id,
    bookName,
    imageUrl,
    category,
    quantity,
    borrowedDate,
    returnDate,
  } = book;

  const BookReturn = (id) => {
    console.log(quantity);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`https://library-management-2lyp.onrender.com/bookreturn/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedcount > 0) {
              return Swal.fire(
                "Returned!",
                "Your book has been return Successfully.",
                "success"
              );
            }

            // fetch call for update the book quantity

            fetch(`https://library-management-2lyp.onrender.com/${_id}`, {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ quantity, bookName }),
            });

            const remainingBooks = datas?.filter((data) => data._id !== id);

            setData(remainingBooks);
          });
      }
    });
  };

  // fetch(`http://localhost:5000/bookreturn/${id}`,{
  // method:"delete",
  // })
  // .then(res=>console.log(res))
  // .then(data=>console.log(data))
  // .catch(err=>console.log(err))

  return (
    <div>
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
            <p className="text-gray-400 text-md">catagory : {category}</p>
            <p className="text-gray-400 text-md">
              borrowedDate : {borrowedDate}
            </p>
            <p className="text-gray-400 text-md">returnDate : {returnDate}</p>

            <div className="flex flex-row-reverse">
              <button
                onClick={() => BookReturn(_id)}
                className="text-white bg-amber-600  hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
