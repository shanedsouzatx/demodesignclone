"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobRole: "",
    experience: "",
    location: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl md:text-5xl text-blue-500 font-bold">Apply Here</h2>
        <hr className="border-blue-500 w-16 mt-2 mb-4 " />
        <p className="text-gray-800 py-5">
          Thank you for wanting to join our team. Complete the initial requirements, and our HR team will start your onboarding process.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border border-gray-400 px-3 py-2 w-full rounded" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border border-gray-400 px-3 py-2 w-full rounded" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border border-gray-400 px-3 py-2 w-full rounded" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-400 px-3 py-2 w-full rounded" />
          </div>
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border border-gray-400 px-3 py-2 w-full rounded" required></textarea>

          {/* Dropdown 1: Job Role */}
          <select name="jobRole" value={formData.jobRole} onChange={handleChange} className="border border-gray-400 px-3 py-2 w-full rounded">
            <option value="">Select Job Role</option>
            <option value="Behavior Consultant (BC)">Behavior Consultant (BC)</option>
            <option value="Behavior Technician (BT)">Behavior Technician (BT)</option>
            <option value="Registered Behavior Technician (RBT)">Registered Behavior Technician (RBT)</option>

          </select>

          {/* Dropdown 2: Experience Level */}
       

          <div className="flex items-start gap-2">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1" required />
            <p className="text-sm text-gray-700">
              I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.
            </p>
          </div>

          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
