 import Image from "next/image";
import Link from "next/link";
const Biofeedback: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto overflow-x-auto pt-[210px] lg:pt-[240px] p-6 px-11  ">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
        Neurofeedback Program Overview
      </h1>

      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 mb-">
        <div className="md:w-2/5 -mb-11 ">
          <h2 className="text-2xl font-bold text-black">
            Brainwave Biofeedback
          </h2>
          <p className="text-gray-800 mt-2">
            Behavior Analysis & Therapy Partners (BATP) is proud to have
            supported a Neurofeedback program implemented in two schools in
            South Philadelphia. This innovative approach enhanced
            self-regulation and behavioral outcomes for children. But BATP does
            not offer neurofeedback due to insurance.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 lg:-mt-16 md:pr-16 ">
          <Image
            src="/images/bio1.jpg"
            alt="Kids playing outside"
            width={350}
            height={290}
            className="sm:pb-7"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 -mt-16 md:mt-11 xl:-mt-5 lg-110:mt-[-10px] lg-125:mt-[45px] ">
        <div className="md:w-2/5">
          <h2 className="text-2xl pt-5 font-bold text-black">
            ABAI Poster Presentation
          </h2>
          <p className="text-gray-800 mt-3">
            In May 2024, BATP co-founder Gary Ames presented a poster at the
            50th Applied Behavior Analysis International Convention,
            highlighting the outcomes of our Neurofeedback program.
          </p>
          <a
            href="https://demodesignz.com/projects/grey/wp-content/uploads/2025/01/ABAI_Presentation_GA-1.pdf"
            className="text-[#CF337A]  mt-5 mb-4 "
          >
            View the poster presentation here
          </a>
          <p className="text-gray-800 mt-3 ">
            At BATP, we transform lives by providing the gold standard of
            behavioral health care for children: Applied Behavior Analysis (ABA)
            and Intensive Behavioral Health Services (IBHS). Our approach is
            rooted in comprehensive assessments of each child’s behavior and
            environment, allowing us to develop precise intervention plans aimed
            at achieving tangible goals.
          </p>
        </div>
        <div className="md:w-1/3 mt-11">
          <Image
            src="/images/bio2.jpg"
            alt="Baby sitting on a bench"
            width={350}
            height={250}
            className="pb-7"
          />
        </div>
      </div>
      {/* 3rd Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 lg-110:mt-[-100px]  lg-125:-mt-[32px] xl:-mt-[90px] ">
        <div className="md:w-2/5 -mb-20 ">
          <h2 className="text-2xl pt-5 font-bold text-black">
            Understanding Biofeedback
          </h2>
          <p className="text-gray-800 mt-2">
            During the convention, Gary posed a thought-provoking question to
            attendees: Is biofeedback a form of Applied Behavior Analysis (ABA)?
            After some discussion, everyone agreed that it is. To illustrate
            this, he invited them to try standing on one foot with their eyes
            open and then closed. This exercise demonstrated how non-verbal
            increased self-awareness can lead to better self-control and
            improved self-regulation.
          </p>
        </div>
        <div className="md:w-1/3 mt-32 sm:mt-36 sm:pr-16 ">
          <Image
            src="/images/bio3.jpg"
            alt="Kids playing outside"
            width={350}
            height={290}
            className="pb-7 pl-2"
          />
        </div>
      </div>

      {/* 4th Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 px-2 pt-28 -mb-8 sm:pt-0 md:mt-11 lg-110:mt-[-250px] lg-125:-mt-[175px] xl:-mt-[295px] ">
        <div className="md:w-2/5">
          <h2 className="text-2xl pt-9 font-bold text-black">Expert Article</h2>
          <p className="text-gray-800 mt-2">
            Gary Ames and Joe Cautilli co-authored an article discussing how
            neurofeedback aligns with ABA principles. Read the article:{" "}
            <a href="https://n1536252.websitebuilder.online/wp-content/uploads/go-x/u/a2df9afe-4204-43ab-ade9-fe8c97109f59/Neurofeedback-is-a-form-of-Applied-Behavior-Analysis.pdf"      className="text-[#CF337A] hover:text-gray-900">
              “Neurofeedback is a Form of Applied Behavior Analysis” 
            </a>
             <a href="https://n1536252.websitebuilder.online/wp-content/uploads/go-x/u/a2df9afe-4204-43ab-ade9-fe8c97109f59/Neurofeedback-is-a-form-of-Applied-Behavior-Analysis.pdf"      className="text-[#CF337A] hover:text-gray-900">
              (PDF)
              </a> 
          </p>
          {/* <a href='https://demodesignz.com/projects/grey/wp-content/uploads/2025/01/ABAI_Presentation_GA-1.pdf' className="text-red-600 font-bold py-9 " target="_blank">View the poster presentation here</a> */}
        </div>
        <div className="md:w-1/3 mt-16 md:mt-72">
          <Image
            src="/images/bio4.png"
            alt="Baby sitting on a bench"
            width={350}
            height={250}
            className="sm:pb-7 pt-11 mt-11 sm:mt-0 sm:p-0"
          />
        </div>
      </div>
      {/* NEXT */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 md:-mt-80 -mt-[46px] lg-110:mt-[-550px] lg-125:-mt-[500px] xl:-mt-[525px] pt-0 ">
        <div className="md:w-2/5">
          <h2 className="text-3xl pt-9 font-bold text-black">
            Program Proposal
          </h2>
          <p className="text-gray-800 mt-3 ">
            Gary also wrote a proposal to CBH outlining an ideal funded project
            for the neurofeedback program. This proposal discusses
          </p>
        </div>
        <div className="md:w-1/3 md:mt-72 "></div>
      </div>
      {/* NEXT */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 pt-[416px] sm:pt-0 mt- md:-mt-36 lg-110:mt-[-150px] lg-125:mt-[-122px] xl:-mt-[313px ] ">
        <div className="md:w-2/5 py-6">
          <h2 className="text-3xl pt-1 font-bold text-black">
            Previous Program Outcomes
          </h2>
          <p className="text-gray-800 py-4">
            <span className="text-black font-bold pb-3 ">Increased : </span>Attention,  
            sleep quality, attendance, relaxation, memory, grades, social
            skills, and tolerance.
            <br />
            <br />
            <span className="text-black font-bold pt-3 ">Decreased : </span> Stress,
            impulsivity, disruptive behavior, violence, outbursts, suspensions,
            negativity, tardiness, learning disabilities, and medication
            reliance.{" "}
          </p>
        </div>
        <div className="md:w-1/3 md:mt-72"></div>
      </div>
      {/* NEXT */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 -mt-[86px] md:-mt-[50px] lg-110:mt-[-100px] lg-125:mt-[-57px] xl:-mt-[93px] py-3">
        <div className="md:w-2/5 py-5">
          <h2 className="text-3xl font-bold pt-5 text-black">
            BrainPaint System Benefits
          </h2>
          <p className="text-gray-800 mt-2 mb-2 ">
            The proposal highlights the benefits of the BrainPaint system,
            including low cost, ease of use, AI technology, and strong research
            support.
            <br />
<span className="pt-3 mt-4 py-6 z-[999] ">
View the proposal: 
</span>
            <a
              href="https://n1536252.websitebuilder.online/wp-content/uploads/go-x/u/0624b328-33fd-4d2b-a99c-df74c56d4cae/Neurofeedback-in-Schools.pdf"
              className="text-[#CF337A] hover:text-gray-900 z-[999] py-3"
            >
              “Neurofeedback in Schools Program” (PDF)
            </a>
          </p>
        </div>
        <div className="md:w-1/3 md:mt-72"></div>
      </div>
      {/* NEXT */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9 -mt-[86px] md:-mt-16 lg-110:mt-[-150px] lg-125:mt-[-130px] xl:-mt-[170px] py-5 ">
        <div className="md:w-2/5 py-5">
          <h2 className="text-3xl pt-5 font-bold text-black">
            Program Outcomes
          </h2>
          <p className="text-gray-800 mt-2 ">
            We tracked the results of students who completed the neurofeedback
            training sessions, and the findings are promising. See the results:
            <a
              href="https://demodesignz.com/projects/grey/wp-content/uploads/2025/01/Neurofeedback_Training_Outcomes_in_Children.pdf"
              className="text-[#CF337A] hover:text-gray-800 "
           
           >
              {" "}
              “Neurofeedback Training Outcomes in Children” (PDF)
            </a>{" "}
          </p>
        </div>
        <div className="md:w-1/3 md:mt-72"></div>
      </div>
      {/* NEXT */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-9  -mt-[86px] md:-mt-16 lg:-mt-[120px] xl:-mt-[152px]  ">
        <div className="md:w-2/5 py-5">
          <h2 className="text-3xl pt-5 font-bold text-black">Conclusion</h2>
          <p className="text-gray-800 mt-2 pb-2">
            The findings from our neurofeedback training program confirms that
            this intervention is broadly effective, yielding significant durable
            results for participants.
            <br />
            For more information about neurofeedback please contact{" "}
            <Link
              href="mailto:GaryAmes@comcast.net"
              className="text-[#CF337A] underline"
            >
              {" "}
              GaryAmes@comcast.net{" "}
            </Link>{" "}
            or call <span className="text-black font-bold"> 610-668-3223 </span>
          </p>
        </div>
        <div className="md:w-1/3 md:mt-72"></div>
      </div>
    </div>
  );
};

export default Biofeedback;
