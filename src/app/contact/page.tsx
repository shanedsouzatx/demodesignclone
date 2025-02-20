import Contact from "@/components/Contact/Contact";
import FullWidthBanner from "@/components/Contact/FullWidthBanner";
import Location1 from "@/components/Home/Location/Location1";

export default function ContactPage() {
  return (
    <div className="pt-[100px] sm:pt-[200px] md:pt-[220px]">
        <FullWidthBanner imageUrl="/images/contact1.jpg" text="Contact Us" />
      <Contact/>
      <Location1/>
    </div>
  );
}
