import React from "react";
import Banner from "../../Component/Banner/Banner";
import BookesCategory from "../../Component/BookesCategory/BookesCategory";
import Footers from "../../Component/Footers/Footers";
import NewsLetter from "../../Component/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <BookesCategory />
      </section>
      <section>
        <NewsLetter />
      </section>

    </div>
  );
}
