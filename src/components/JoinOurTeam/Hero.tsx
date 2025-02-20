import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
   <>
   <div className="container px-1  mx-auto">

    <h2 className="text-2xl text-center pt-[290px] md:text-4xl font-bold text-black">Work for Us</h2>
    <p className="text-gray-600  mt-4">At Behaviour Analysis & Therapy Partners (BATP), we are dedicated to making a positive impact in the lives of children, youth, and young adults. We’re looking for compassionate and skilled individuals to join our team in providing high-quality behavioural health services.

</p>  <p className="text-gray-600  mt-4">We have positions in South Philadelphia, as well as throughout Montgomery, Bucks, and Delaware counties. We are an Equal Opportunity Employer.



</p>  <p className="text-gray-600  mt-4">We will review your qualifications when you send us your information. Link to portal
</p>
   <Link href="" className="text-blue-500 underline underline-offset-4 ">We are hiring now!</Link>
   </div>
   </>
  );
}