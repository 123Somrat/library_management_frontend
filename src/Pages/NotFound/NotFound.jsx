import React from "react";
import Lottie from "lottie-react";
import notFound from "../../../public/Animation - 1699306479268.json";
import { Helmet } from "react-helmet";
export default function NotFound() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Lottie animationData={notFound} loop={true} className="mx-12 h-[555px] " />
    </div>
  );
}
