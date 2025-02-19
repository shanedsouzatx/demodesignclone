import Image from "next/image";
import { FaLightbulb, FaBullseye } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen bg-blue-50 pt-11 text-white">
      <div className="max-w-[1200px] mx-auto p-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Work for Us 
            </h1>
            <p className="text-gray-600 text-lg">
            Join our team and unlock your full potential:
            <br /> • At Behavior Analysis & Therapy Partners (BATP), we are dedicated to making a positive impact in the lives of children, youth, and young adults.
            <br /> •  We’re looking for compassionate and skilled individuals to join our team in providing high-quality behavioral health services. 
            <br /> • Enjoy abundant opportunities for professional growth and career advancement 
            <br /> • Benefit from competitive compensation, comprehensive benefits, and rewarding recognition 
            <br /> • Access continuous training, mentorship, and innovative projects that make a real impact 
          
           
            </p>

            {/* Vision Box */}
            <div className="bg-blue-100 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-blue-900 w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Our Vision</h2>
              </div>
              <p className="text-gray-800">
                To revolutionize healthcare accessibility and create a world where quality medical care  is available to everyone, anywhere, anytime , feel free to join our team  .
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative space-y-6">
            {/* Main Image */}
            <div className="relative mb-[33px] h-[400px] w-full">
              <Image
                src="/images/h5.jpg"
                alt="Our Team"  
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* Mission Box */}
            <div className="bg-blue-100  p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4 ">
                <FaBullseye className="text-blue-900 w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Our Mission</h2>
              </div>
              <p className="text-gray-800">
                To build and nurture a team of dedicated professionals who share our commitment to 
                innovation, excellence, and compassionate healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}