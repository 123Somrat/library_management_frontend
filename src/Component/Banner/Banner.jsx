import React from "react";

export default function Banner() {
  return (
    <div >
      <div className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="duration-700 ease-in-out">
            <img
              src="https://img.freepik.com/free-photo/large-collection-old-books-wooden-shelves-generated-by-ai_188544-29739.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
