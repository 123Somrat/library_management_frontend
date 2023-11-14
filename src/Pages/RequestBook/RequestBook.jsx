import Lottie from "lottie-react"
import { Helmet } from "react-helmet";
import { Button, Checkbox, Label, TextInput,Select} from 'flowbite-react';
import { useForm } from "react-hook-form";
import ComeingSoon from "../../../public/Animation - 1699535547055.json";
import Swal from "sweetalert2";

export default function RequestBook() {
 
   //console.log(watch("bookCategory"))
  //<Lottie animationData={ComeingSoon} loop={true} className="h-[555px]" />
  return (
    <div className="my-[103px] md:mt-12 md:mb-[202px]">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Request Book</title>
        </Helmet>
        <Lottie animationData={ComeingSoon} loop={true} className="h-[555px]" />
    </div>
  );
}
