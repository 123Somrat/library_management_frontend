import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import ComeingSoon from "../../../public/Animation - 1699535547055.json";
import Swal from "sweetalert2";

export default function RequestBook() {


  // import useForm hook from react hook form
  const {register,watch, handleSubmit,formState: { errors },reset} = useForm();



  //console.log(watch("bookCategory"))
  //<Lottie animationData={ComeingSoon} loop={true} className="h-[555px]" />
  return (
    <div className="my-[103px] md:mt-12 md:mb-[202px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Request Book</title>
      </Helmet>
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookName" value="Book Name" />
          </div>
          <TextInput
            className="border-amber-700"
            id="bookName"
            type="text"
            placeholder="book Name"
            {...register("bookName",{required:true,maxLength:25})}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookAuthorName" value="Book Author Name" />
          </div>
          <TextInput id="bookAuthorName" type="text" {...register("bookAuthorName",{required:true,maxLength:30})}/>
        </div>
        <div className="mb-2 block">
          <Label htmlFor="bookCategory" value="Select Book Category" />
          <Select id="countries" {...register("bookCategory",{required:true})}>
            <option>Programming</option>
            <option>Testing</option>
            <option>Time Management</option>
            <option>Science Fiction</option>
          </Select>
        </div>
        <Button type="submit" className=" border-amber-700 bg-amber-600">
          Submit
        </Button>
      </form>
    </div>
  );
}
