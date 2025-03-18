"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="flex p-3 md:p-7 hidden md:flex">
   <div className="w-1/2 hidden md:block">
        <div className="sticky h-[500px] top-0 ">
          <Image
            src="/images/privacy1.jpg"  // Ensure this image exists in /public/images/
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Left Content: Scrollable text */}
      <div className="flex-1 p-8 overflow-y-auto sm:pl-16 md:pl-20 lg:pl-16 xl:pl-28  pt-[390px] lg:pt-[190px] space-y-8">
       <div className="container">

        <h1 className="text-xl md:text-4xl text-blue-500 font-semibold mb-4">
        Privacy Policy

        </h1>
        <div className="h-[3px] bg-blue-500 w-[66%] my-4 pl-9" />
       </div>
       
      <ul className="list-disc pl-5 text-gray-700 px-7">
      {/* <li> BATP full contact details;</li>
      <li> the types of personal data you collect;</li>
      <li> where you got people’s data from, if it wasn’t from them;</li>
      <li> why you have people’s information and what you’re doing with it;</li>
      <li> your lawful basis and your legitimate interests where relevant;</li>
      <li> who you share people’s information with; and</li>
       */}
       <li>Data will be stored and processed for the purpose of establishing contact. You may revoke my consent to store at any time.</li>
      {/* <li> how long you hold people’s information for before
        <Link href="https://ico.org.uk/for-organisations/advice-for-small-organisations/whats-new/blogs/practical-methods-for-destroying-documents-that-are-no-longer-needed/" className="text-blue-500 hover:text-gray-600"> getting rid of it securely.</Link></li> */}
      </ul>
      </div>

      {/* Right Image: Stays fixed as you scroll */}
     
    </section>
  );
};

export default PrivacyPolicy;
