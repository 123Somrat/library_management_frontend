import Lottie from "lottie-react"
import { Helmet } from "react-helmet";
import ComeingSoon from "../../../public/Animation - 1699535547055.json";
export default function RequestBook() {
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Request Book</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <Lottie animationData={ComeingSoon} loop={true} className="h-[555px]" />
    </div>
  );
}
