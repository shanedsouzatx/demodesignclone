import Image from "next/image";
import Link from "next/link";

export default function Hero3() {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">
   
   {/* Left: Image */}
   <div className="md:w-1/2 w-full max-w-[600px] pl-11 mx-auto">
   <h2 className="text-xl md:text-2xl font-bold text-black  ">Our Team
   </h2>
     <p className="text-black/90 mt-4">
     In addition to our leadership, Behavior Analysis & Therapy Partners employs about 100 dedicated professionals with various roles, functions, and credentials–all committed to delivering the highest standard of care.
     </p>
      <p className="text-bold text-black text-lg pt-4">For inquiries, you can reach our Administrator at:</p>
      <Link href="mailto:ChantelleBosier@batp.org" className="text-blue-500 hover:text-blue-600">ChantelleBosier@batp.org</Link>
   </div>
   {/* Right: Heading and Paragraph */}
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
    
     <Image
        src="/images/ab3.jpg" 
        alt="Hero Image"
        width={500}
        height={500}
        className="object-cover rounded p-16"
        />
   </div>
 </div>
    </div>
  );
}
