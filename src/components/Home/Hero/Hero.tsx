"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex p-3 md:p-7">
      {/* Left Content: Scrollable text */}
      <div className="flex-1 p-8 overflow-y-auto pt-[290px] space-y-8">
       <div className="container">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Behavior Analysis & <br /> Therapy Partners (BATP)
        </h1>
        <div className="h-[3px] bg-blue-500 w-[86%] my-4 pl-9" />
       </div>
        <p className="text-xl text-gray-700">
          We help children, teens, and young adults overcome behavioral challenges and thrive.
        </p><p className="text-xl text-gray-700">
          At BATP, we use Applied Behavior Analysis (ABA) and other proven methods to provide personalized care. Our services are designed to improve the quality of life for the child and family.
        </p>
        {/*  */}
        <h2 className="text-3xl font-semibold">Who We Serve
        </h2>
        <p className="text-lg text-gray-600">
          We work with children and young adults aged birth to 21 in:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>	Philadelphia</li>
          <li>
            <Link href="/schools" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">	A cluster of South Philadelphia Schools </Link>
          </li>
          <li>	Bucks, Montgomery, and Delaware Counties</li>
        </ul>
        {/*  */}
        <h2 className="text-3xl font-semibold">Our Services
        </h2>
        <p className="text-lg text-gray-600">
          We offer:

        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Applied Behavior Analysis (ABA): Individual and group sessions for ages 3–21.
          </li>
          <li>Intensive Behavioral Health Services: Individual and group support for ages 5–21.
          </li>
          <li>Early Intervention Services: Specialized care for children from birth to age 5.
          </li>
        </ul>
        <span className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
          Learn more about our services</span>
        {/*  */}
        <h2 className="text-3xl font-semibold">What is Applied Behavior Analysis (ABA)?
        </h2>
        <p className="text-lg text-gray-600">
          ABA is a leading, evidence-based approach to helping children with autism and other behavioral challenges. It focuses on teaching positive behaviors and reducing harmful ones through personalized learning techniques.

        </p>
        <h2 className="text-3xl font-semibold">How We Work

        </h2>

        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>
            <span className="font-semibold">Assessment:</span> We start by understanding your child’s needs through interviews, assessments, and observation.<ul className="list-disc list-inside text-lg text-gray-600 "><li><span className="font-semibold">Plan:</span> A licensed Behavior Consultant creates a Functional Behavior Analysis with a detailed treatment plan.
            </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Team:</span> Your child’s care team may include a Behavior Consultant and/or a Mobile Therapist. There may also be a one-on-one trained specialist called a Behavior Health Technician.
          </li>
          <li>
            <span className="font-semibold">Support:</span> We provide care in your child’s natural environment—home, school, or community—to ensure comfort and success.
          </li>
        </ul>

        {/*  */}

        <h2 className="text-3xl font-semibold">Payment Options</h2>

        <p className="text-lg text-gray-600">
          Most individuals under 21 are eligible for our services at no cost to you through PA Medicaid.
          <br />
          If you don’t have coverage yet, call us to learn more or to get authorization for services.


        </p>
        <p className="text-lg text-gray-600">At BATP, we’re here to help your child grow, learn, and thrive. Let’s take the first step together.
        </p>
        <p>Call  <span className="font-semibold">BATP</span>  <br />
          267-507-2719 – Philadelphia <br />
          610-664-6200 - Delaware, Montgomery, Bucks counties. <br />
          or
          <Link href="/contact" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
            <span className="font-semibold ml-2">Contact Us </span> </Link>
        </p>

      </div>

      {/* Right Image: Stays fixed as you scroll */}
      <div className="w-1/2 hidden md:block">
        <div className="sticky top-0 h-screen">
          <Image
            src="/images/hero.jpg"  // Ensure this image exists in /public/images/
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
