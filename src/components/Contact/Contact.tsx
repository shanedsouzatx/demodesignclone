"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Left Section - Contact Info */}
      <div className="text-b0">
        <h2 className="text-2xl text-blue-500 md:text-4xl font-bold">Get in touch</h2>
        <hr className="border-blue-500 w-36  -space-x-9 h-[3px] mt-2 mb-4" />
        <div className="mt-4">
  <div className="flex items-center">
    <Image 
      src="/images/con7.jpg" 
      alt="Phone" 
      width={104} 
      height={104} 
      className="w-11 h-11 contrast-100"
    />
    <div className="ml-4"> {/* Added margin-left to create space */}
      <p className="font-semibold">Phone</p>
      <p>610-664-6200</p>
    </div>
  {/* </div> */}


          </div>
          <div className="flex items-center gap-3 mt-4">
            <Image src="/images/con8.jpg" alt="Email" width={104} height={104}  className="-ml-3 w-16 h-16"/>
            <div>
              <p className="font-semibold">Email</p>
              <p>BATPaa@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section - Contact Form */}
      <div>
        <h2 className="text-2xl md:text-3xl text-blue-500 font-bold">Contact us</h2>
        <hr className="border-blue-500 w-16 mt-2 mb-4" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-400 px-3 py-2 w-full rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-400 px-3 py-2 w-full rounded"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-400 px-3 py-2 w-full rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-400 px-3 py-2 w-full rounded"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="border border-gray-400 px-3 py-2 w-full rounded h-28"
            required
          ></textarea>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <p className="text-sm text-gray-700">
              I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Section - Let's Talk */}
      <div>
        <h2 className="text-2xl md:text-3xl text-blue-500 font-bold">Let's Talk!</h2>
        <hr className="border-blue-500 w-16 mt-2 mb-4" />
        <p className="text-gray-700">
          Have questions? Interested in working with us? Send us an{" "}
          <Link href="mailto:BATPaa@gmail.com" className="text-red-600 underline">
            Email
          </Link>{" "}
          to schedule a talk with us.
        </p>
        <p className="mt-4 text-gray-700">
          At Behavior Analysis & Therapy Partners, we value your inquiries and feedback. Please reach out to us using the information below or fill out the contact form. A member of our team will get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default Contact;
