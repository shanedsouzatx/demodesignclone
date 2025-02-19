"use client";
import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Behavior Consultant (BC)",
    image: "/images/hiring2.jpg",
    para:"The Behavior Consultant (BC) provides comprehensive behavioral health services, working closely with clients to assess needs and develop individualized treatment plans.  ",
    description:"The Behavior Consultant (BC) provides comprehensive behavioral health services, working closely with clients to assess needs and develop individualized treatment plans.  ",
    responsibilities: `- Conduct comprehensive multi-systemic assessments.  
- Develop and implement individualized treatment plans.  
- Provide individual, group, and family therapy sessions.  
- Ensure BHT team is effectively implementing treatment plans`,
  },
  {
    title: "Mobile Therapist (MT)",
    image: "/images/hiring3.jpg",
    para:"The Mobile Therapist (MT) provides Intensive Behavioral Health Services (IBHS) to children, youth, and young adults in their homes, schools, or communities. As part of a collaborative team with Behavior Consultants (BCs) and Behavioral Health Technicians (BHTs), the MT develops and implements individualized treatment plans.   ",
    description:"The Mobile Therapist (MT) provides Intensive Behavioral Health Services (IBHS) to children, youth, and young adults in their homes, schools, or communities. As part of a collaborative team with Behavior Consultants (BCs) and Behavioral Health Technicians (BHTs), the MT develops and implements individualized treatment plans.  ",
    responsibilities: `- Conduct comprehensive assessments and develop treatment plans. `,
  },
  {
    title: "Behavioral Health Technician ",
    image: "/images/hiring4.jpg",
    para:"The Behavioral Health Technician (BHT) implements behavioral health services under the close supervision of a Behavior Consultant (BC). The BHT works one-on-one or in group settings with clients aged 5-21, their families, and other involved professionals.  ",
    description:"The Behavioral Health Technician (BHT) implements behavioral health services under the close supervision of a Behavior Consultant (BC). The BHT works one-on-one or in group settings with clients aged 5-21, their families, and other involved professionals.  .",
    responsibilities: `- Implement evidence-based strategies from the treatment plan.  
- Keep the child engaged and motivated.  
- Create a therapeutic environment`,

  },
];

const Hiring: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Main Heading & Intro Paragraph */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">We are Hiring</h1>
        <p className="text-lg text-gray-700 mb-12 ">
          Join our dynamic team and help us make a difference in behavioral health.
          Explore our open positions below and apply today!
        </p>
      </div>

      {/* Positions Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-8">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Position Image */}
            <div className="relative h-48">
              <Image
                src={position.image}
                alt={position.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Position Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{position.title}</h2>
              <p className="text-gray-700 mb-4 line-clamp-3 ">{position.para}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4 bg-blue-500 text-white">
                    See Full Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{position.title}</DialogTitle>
                    <DialogDescription>
                      <p className="mt-4 text-base text-black/90 font-semibold">Job Description:</p>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {position.description}
                      </p>
                    </DialogDescription>
                    <DialogDescription>
                      <p className="mt-4 text-base text-black/90 font-semibold">Key Responsibilities:</p>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {position.responsibilities}
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 flex justify-end">
                    <Button variant="default">Apply to this position</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hiring;
