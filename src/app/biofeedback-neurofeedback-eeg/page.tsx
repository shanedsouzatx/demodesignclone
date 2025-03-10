import Image from "next/image";
import Link from "next/link";

const Biofeedback: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto overflow-x-auto pt-[390px] lg:pt-[240px] p-6 px-11">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
        Neurofeedback Program Overview
      </h1>

      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mb-6">
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold text-black">Brainwave Biofeedback</h2>
          <p className="text-gray-800 mt-2">
            Behavior Analysis & Therapy Partners (BATP) is proud to have supported a 
            Neurofeedback program implemented in two schools in South Philadelphia. 
            This innovative approach enhanced self-regulation and behavioral outcomes 
            for children. But BATP does not offer neurofeedback due to insurance.
          </p>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/images/bio1.jpg"
            alt="Kids playing outside"
            width={350}
            height={290}
            className="pb-7"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mt-6">
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold text-black">ABAI Poster Presentation</h2>
          <p className="text-gray-800 mt-3">
            In May 2024, BATP co-founder Gary Ames presented a poster at the 50th 
            Applied Behavior Analysis International Convention, highlighting the 
            outcomes of our Neurofeedback program.
          </p>
          <a href='https://demodesignz.com/projects/grey/wp-content/uploads/2025/01/ABAI_Presentation_GA-1.pdf' className="text-red-600 font-bold mt-2" target="_blank">View the poster presentation here</a>
          <p className="text-gray-800 mt-3">
            At BATP, we transform lives by providing the gold standard of behavioral 
            health care for children: Applied Behavior Analysis (ABA) and Intensive 
            Behavioral Health Services (IBHS).
          </p>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/images/bio2.jpg"
            alt="Baby sitting on a bench"
            width={350}
            height={250}
            className="pb-7"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mt-12">
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold text-black">Understanding Biofeedback</h2>
          <p className="text-gray-800 mt-2">
            During the convention, Gary posed a thought-provoking question to attendees: Is biofeedback a form of Applied Behavior Analysis (ABA)? After some discussion, everyone agreed that it is.
          </p>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/images/bio3.jpg"
            alt="Kids playing outside"
            width={350}
            height={290}
            className="pb-7"
          />
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mt-12">
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold text-black">Expert Article</h2>
          <p className="text-gray-800 mt-2">
            Gary Ames and Joe Cautilli co-authored an article discussing how neurofeedback aligns with ABA principles.
          </p>
          <a href="https://n1536252.websitebuilder.online/wp-content/uploads/go-x/u/a2df9afe-4204-43ab-ade9-fe8c97109f59/Neurofeedback-is-a-form-of-Applied-Behavior-Analysis.pdf" className="text-red-600 font-bold">Read the article here</a>
        </div>
      </div>

      {/* Final Sections */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mt-12">
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold text-black">Program Outcomes</h2>
          <p className="text-gray-800 mt-2">
            We tracked the results of students who completed the neurofeedback training sessions, and the findings are promising.
          </p>
          <a href="https://demodesignz.com/projects/grey/wp-content/uploads/2025/01/Neurofeedback_Training_Outcomes_in_Children.pdf" className="text-red-600 font-bold">View results here</a>
        </div>
      </div>

      {/* Conclusion */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mt-12">
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold text-black">Conclusion</h2>
          <p className="text-gray-800 mt-2">
            The findings from our neurofeedback training program confirm that this intervention is broadly effective.
          </p>
          <p className="text-gray-800 mt-2">
            For more information, please contact <Link href="mailto:BATPaa@gmail.com" className="text-red-600 underline">GaryAmes@comcast.net</Link> or call <span className="text-black font-bold">610-668-3223</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biofeedback;
