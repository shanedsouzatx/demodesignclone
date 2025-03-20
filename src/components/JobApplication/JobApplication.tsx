"use client";
import React, { useState } from "react";

const JobApplication: React.FC = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    jobRole: string;
    experience: string;
    location: string;
    consent: boolean;
    cvFile: File | null;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobRole: "",
    experience: "",
    location: "",
    consent: false,
    cvFile: null,
  });

  // Define the locations with associated emails.
  const jobLocations = [
    { name: "Bala Cynwyd Office", email: "location1@example.com" },
    { name: "Philadelphia Office", email: "location2@example.com" },
    { name: "South Philadelphia Satellite Office", email: "location3@example.com" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;  // Type assertion for checkbox
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      cvFile: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.location) {
      alert("Please select a location.");
      return;
    }
    // Note: If cvFile is not null, you'll need to convert it (e.g., to Base64) or use FormData.
    const res = await fetch("/api/send-emails2", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Error sending email.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-9 lg:-mt-20 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl md:text-5xl text-blue-500 font-bold">Apply Here</h2>
        <hr className="border-blue-500 w-16 mt-2 mb-4" />
        <p className="text-gray-800 py-5">
          Thank you for wanting to join our team. Complete the initial requirements, and our HR team will start your onboarding process.
        </p>
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
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-gray-400 px-3 py-2 w-full rounded"
            required
          ></textarea>
          <select
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className="border border-gray-400 px-3 py-2 w-full rounded"
          >
            <option value="">Select Job Role</option>
            <option value="Behavior Consultant (BC)">Behavior Consultant (BC)</option>
            <option value="Mobile Therapist (MT)">Mobile Therapist (MT)</option>
            <option value="Registered Behavior Technician (RBT)">Registered Behavior Technician (RBT)</option>
            <option value="Behavior Technician (BT)">Behavior Technician (BT)</option>
            <option value="Administration">Administration</option>
          </select>
          {/* Location Selection */}
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-semibold">Select a location:</p>
            {jobLocations.map((loc, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="location"
                  value={loc.name}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span>{loc.name}</span>
              </label>
            ))}
          </div>
          {/* File Upload Section for CV */}
          <div>
            <label htmlFor="cvFile" className="block text-sm font-semibold mb-1">
              Upload CV:
            </label>
            <input
              type="file"
              id="cvFile"
              name="cvFile"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="border border-gray-400 px-3 py-2 w-full rounded"
            />
          </div>
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
            
            Data will be stored and processed for the purpose of establishing contact. You may revoke your consent to store your information at any time.
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

export default JobApplication;
