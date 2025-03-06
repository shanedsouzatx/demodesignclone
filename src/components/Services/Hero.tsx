"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <>
  <h2 className="text-3xl text-center pt-[240px] md:text-5xl font-bold text-black">Our Services For You</h2>
        <p className="text-gray-600 text-center mt-4">
          We offer a range of services to help children, teens, and young adults thrive.
        </p>
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">
   
      {/* Left: Image */}
      <div className="md:w-1/2 w-full max-w-[500px] mx-auto">
        <Image
          src="/images/ser1.png" // Replace with your image path
          alt="Hero Image"
          width={500}
          height={500}
          className="object-cover rounded p-16"
          />
      </div>
      {/* Right: Heading and Paragraph */}
      <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
        <h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Applied Behavior Analysis (ABA)</h2>
        <p className="text-gray-600 mt-4">
        ABA is a proven approach to help children with behavioral challenges and skill-building. ABA is a core part of working with autism.

        </p>   <p className="text-gray-600 mt-2">
        ⦁	We start with interviews, observations, and assessments to create a Functional Behavior Assessment (FBA) and a personalized Treatment Plan.
      
        </p><p className="text-gray-600 mt-2">
        ⦁	Your child’s care team may include a Behavior Consultant, a trained one-on-one specialist called a Behavior Health Technician, and a Mobile Therapist. 

        </p>   <p className="text-gray-600 mt-2">
        ⦁	All our interventions are evidence-based and tailored to your child’s needs.

        </p>
      </div>
    </div>
    {/* 2md */}
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">
   
   {/* Left: Image */}
   <div className="md:w-1/2 w-full max-w-[700px] mx-auto">
   <h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Intensive Behavioral Health Services (IBHS) (Ages 5–21)
   </h2>
     <p className="text-gray-600 mt-4">
     Our IBHS program helps those aged 5–21 who face challenges like trauma, ADHD, depression, and anger--or other thinking, social-emotional or behavioral issues.


     </p>   <p className="text-gray-600 mt-2">
     ⦁	Services include group therapy, summer work programs, and ABA.

   
     </p><p className="text-gray-600 mt-2">
     ⦁	We collaborate with psychiatrists, schools, and social services to provide comprehensive care.

     </p>   <p className="text-gray-600 mt-2">
     ⦁	Each child’s plan is guideds
      by a Functional Behavior Analysis (FBA), 504 Plan, or Individualized Education Program.

     </p>
     <p className="text-gray-600 mt-2">
     ⦁	IBHS works with youth, families, caregivers, and teachers to create and carry out personalized goals and interventions through an Individualized Treatment Plan (ITP). The program focuses on teaching skills that help youth and caregivers improve functioning in everyday settings. Parents and caregivers play a central role, learning to better manage their child’s needs so they can eventually do so without professional help.


     </p>  <p className="text-gray-600 mt-2">
     ⦁	Services are provided weekly, as detailed in the treatment plan, and are delivered in the home, school, or community.


     </p>
   </div>
   {/* Right: Heading and Paragraph */}
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
    
     <Image
        src="/images/ser2.png" // Replace with your image path
        alt="Hero Image"
        width={500}
        height={500}
        className="object-cover rounded p-16"
        />
   </div>
 </div>




 {/*3rd*/}
 <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">
   
   {/* Left: Image */}
   <div className="md:w-1/2 w-full max-w-[500px] mx-auto">
     <Image
       src="/images/ser3.png" // Replace with your image path
       alt="Hero Image"
       width={500}
       height={500}
       className="object-cover rounded p-16"
       />
   </div>
   {/* Right: Heading and Paragraph */}
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
     <h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Early Intervention (Ages Birth–5)
     </h2>
     <p className="text-gray-600 mt-4">
     Our Early Intervention program supports children aged birth to 5 with developmental needs.

     </p>   <p className="text-gray-600 mt-2">
     ⦁	We use ABA techniques in daycare settings to help children grow and learn.

     </p><p className="text-gray-600 mt-2">
     ⦁	Care is guided by an Individualized Education Program (IEP) or Functional Behavior Assessment (FBA).

     </p>   <p className="text-gray-600 mt-2">
     ⦁	We work with Occupational Therapists, Speech Therapists, and other professionals to provide well-rounded support.

     
     </p>
   </div>
 </div>
 {/* 4th */}
 <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">

{/* Left: Image */}
<div className="md:w-1/2 w-full max-w-[700px] mx-auto">
<h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Parent-Child Interaction Therapy (PCIT) (Ages 2–7)

</h2>
  <p className="text-gray-600 mt-4">
  PCIT is a short-term, evidence-based program that strengthens the bond between parents and children.


  </p>   <p className="text-gray-600 mt-2">
  ⦁	We help parents improve their child’s behavior and reduce stress.

  </p><p className="text-gray-600 mt-2">
  ⦁	The program focuses on increasing compliance and building positive interactions.

  </p>   <p className="text-gray-600 mt-2">
  ⦁	Parents leave with stronger skills and a healthier relationship with their child.

  </p>
</div>
{/* Right: Heading and Paragraph */}
<div className="md:w-1/2 w-full text-left mt-8 md:mt-0 m">
 
  <Image
     src="/images/ser4.png" // Replace with your image path
     alt="Hero Image"
     width={500}
     height={500}
     className="object-cover rounded p-16"
     />
</div>
</div>

 {/*5th*/}
 <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">
   
   {/* Left: Image */}
   <div className="md:w-1/2 w-full max-w-[500px] mx-auto">
     <Image
       src="/images/ser5.png" // Replace with your image path
       alt="Hero Image"
       width={500}
       height={500}
       className="object-cover rounded p-16"
       />
   </div>
   {/* Right: Heading and Paragraph */}
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
     <h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Insurance Information

     </h2>
     <p className="text-gray-600 mt-4">
     All our services are fully covered for nearly every individual under 21 through PA Medicaid.

     </p>   <p className="text-gray-600 mt-2">
     Contact BATP directly for assistance. <br />
267-507-2719 – Philadelphia <br />
610-664-6200 - Delaware, Montgomery, Bucks counties.

     </p><p className="text-gray-600 py-9">
     Or here are the Medicaid insurance company phone numbers for your location.

     </p>   <p className="text-gray-600 mt-2">
   <span className="font-bold"> Philadelphia: </span> Community Behavioral Health (CBH) 888.545-2600 <br />
   <span className="font-bold"> Montgomery & Bucks Counties: </span> Magellan Behavioral Health (MBH) 877.769-9782 <br />
   <span className="font-bold"> Delaware County: </span> Community Care Behavioral Health (CCBH) 833.577-2682


     
     </p>
   </div>
 </div>
 {/* 4th */}
 {/* <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4">

<div className="md:w-1/2 w-full max-w-[700px] mx-auto">
<h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Local Insurance Information

</h2>
  <p className="text-gray-600 mt-4">
  PCIT is a short-term, evidence-based program that strengthens the bond between parents and children.


  </p>   <p className="text-gray-600 mt-1">
  Or you can contact your local insurance company directly: 

  </p><p className="text-gray-600 mt-2">
  Community Behavioural Health (CBH) in Philadelphia at 888-545-2600

  </p>   <p className="text-gray-600 mt-2">
  Magellan Behaviour Health (MBH) Bucks and Montgomery counties at (877) 769-9782

  </p>  <p className="text-gray-600 mt-2">
  Community Care Behavioural Health (CCBH) in Delaware county at 1-833-577-2682



  </p>
</div>
<div className="md:w-1/2 w-full text-left mt-8 md:mt-0 m">
 
  <Image
     src="/images/ser6.jpg"
     alt="Hero Image"
     width={500}
     height={500}
     className="object-cover rounded p-16"
     />
</div>
</div> */}
          </>
  );
}
