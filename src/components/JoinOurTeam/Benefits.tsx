import Image from "next/image";
import Link from "next/link";

export default function Benefits() {
  return (
    <div>
     <div className="flex flex-col md:flex-row items-center justify-between py-11 pl-16">
   
   {/* Left: Image */}
   <div className="md:w-1/2 w-full max-w-[700px]  mx-auto">
   <h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Benefits of Working with Us
   </h2>
     <p className="text-gray-600 mt-4">
     Opportunities for professional development and ongoing training. Expert supervision to advance your career.

     </p>   <p className="text-gray-600 mt-2">
     Supportive team environment. 

   
     </p><p className="text-gray-600 mt-2">
     Health insurance is available for employees working 35+ hours per week. 

     </p>   <p className="text-gray-600 mt-2">
     If you are passionate about helping children and young adults achieve their goals and thrive in their communities, we encourage you to apply! 

     </p>
     <h1 className="text-blue-500 text-xl sm:text-2xl md:text-4xl  font-bold pt-16">Join Our Team </h1>
  <button className="text-black  px-4 py-2 mt-3 rounded-md">
    <Link href="/job-application" className="texh-black">    Click Here </Link>
   </button>
  <p className="text-gray-600 mt-5 mb-11">Behavior Analysis & Therapy Partners (BAPT) is devoted to providing behavioral health care to those under 21 years of age.  Founded in 2006, we are now a multi-site company with 3 offices serving families in Philadelphia and the 3 surrounding counties: Montgomery, Bucks and Delaware.
  </p>
  <p className="text-gray-600 mt-2">If you want to get BATP’s help for your family
    
     <Link href="/contact" className="text-blue-500 font-bold hover:text-gray-600"> Contact Us. </Link>

</p>
<p className="text-gray-600 mt-2">To see how we protect your privacy
    
    <Link href="/ Legal/Privacy" className="text-blue-500  hover:text-gray-600"> click here </Link>
    {/* <Link href="/privacy-policy" className="underline hober hover:text-gray-600">We will protect your information. Link to Privacy Policy. </Link> */}
</p>

{/* <h1 className="text-gray-700 text-md  font-bold pt-11">Employment Portal</h1>
<p className="text-gray-600 mt-2">Here we are envisioning a portal for potential employees.   Initially they upload their resume. After initial approval we can then invite them securely to upload the dozen or so documents needed for a complete HR file. </p> */}
   </div>
   {/* Right: Heading and Paragraph */}
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
    
     <Image
        src="/images/j4.jpg" // Replace with your image path
        alt="Hero Image"
        width={800}
        height={900}
        className="object-cover rounded p-6"
        />
   </div>
 </div>
    </div>
  );
}

