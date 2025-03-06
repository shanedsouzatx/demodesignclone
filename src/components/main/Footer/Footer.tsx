"use client";
import React, { useState } from "react";
import "./Footer.css"; // Ensure you import the CSS file
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if click is outside the modal content
    if (e.currentTarget === e.target) {
      setShowPrivacyModal(false);
      setShowTermsModal(false);
    }
  };

  return (
   <>
    <footer className="footer  !mb-0 !pb-0 !bottom-0 !pt-6 ">
      <div className="footer-container max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="footer-left">
          <Image
            src="/images/logo3.png"
            alt="Logo"
            className="footer-logo"
            height={500}
            width={500}
          />
          <div className="h-[2px] w-full bg-white mt-4 "/>
          <p className="w-[450px] pt-11">
            Behavior Analysis &amp; Therapy Partners (BAPT) is devoted to
            providing behavioral health care to those under 21 years of age.
            Starting in 2006, we are now a large company with 3 offices serving
            families in Philadelphia and the 3 surrounding counties: Montgomery,
            Bucks and Delaware.
          </p>
          <p>
            If you want help for your family{" "}
            <Link
              href="/contact"
              className="text-white contrast-150 underline underline-offset-4 ml-3"
            >
              Contact Us.
            </Link>
          </p>
          <p>
            If you want to join our team{" "}
            <Link
              href="/join-our-team"
              className="text-white contrast-150 underline underline-offset-8  ml-3"
            >
              Click Here.
            </Link>
          </p>
          <div className="social-icons">
            <Link href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right pt-28 pl-11 md:pl-[450px]">
          <h3 className="text-2xl font-bold mb-1 underline underline-offset-4">Explore</h3>
          {/* <d/iv className="border-t w- border-gray-300 pt-4 w-[100px] mb-5" /> */}
          {/* First group: 4 links */}
          <ul className="flex flex-col gap-2 pt-9 pl- gap-5">
            <li>
              <Link href="/">► Home</Link>
            </li>
            <li>
              <Link href="/about-us">► About Us</Link>
            </li>
            <li>
              <Link href="/services">► Services</Link>
            </li>
            <li>
              <Link href="/join-our-team" className="!w-full p-0 flex">► Join Our Team</Link>
            </li>
          </ul>
          {/* Second group: 3 links on a new line, aligned to the right */}
          {/* <div className="cta-container mt-8">
            <Link href="/" className="cta-btn">
            Contact Us Now!
            </Link>
            </div> */}
        </div>
            <ul className="flex flex-col gap-2 pr-11 md:pt-48 mt-4 gap-5">
  
              <li>
                <Link
                  href="/legal-notice"
                 
                >
                  ► Legal Notice
                </Link>
              </li>
             
              <li>
                <Link
                  href="/privacy-policy"
                 
                >
                  ► Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact">► Contact Us</Link>
              </li>
            </ul>
      </div>

      <div className=" sm:pl-11 md:pl-5  max-w-7xl mx-auto !pb-2  ">
        <p>&copy;  2024 WEBSITE ALGORITHMS,  All Rights Reserved</p>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowPrivacyModal(false)}>
              &times;
            </span>
            <h2>Privacy Policy</h2>
            <p>
              BATP full contact details;
              <br />
              the types of personal data you collect;
              <br />
              where you got people’s data from, if it wasn’t from them;
              <br />
              why you have people’s information and what you’re doing with it;
              <br />
              your lawful basis and your legitimate interests where relevant;
              <br />
              who you share people’s information with;
              <br />
              how long you hold people’s information for before getting rid of it
              securely.
            </p>
          </div>
        </div>
      )}
<div className="sm:pl-11 md:pl-0">
{showTermsModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowTermsModal(false)}>
              &times;
            </span>
            <h2>Terms &amp; Conditions</h2>
            <p>[Insert full terms and conditions details here...]</p>
          </div>
        </div>
      )}
</div>
      {/* Terms & Conditions Modal */}

      <ul className="flex flex-col gap-2 sm:pl-[400px] md:pl-[700px] lg:pl-[1050px] 2xl:pl-[1200px]  mt-4 gap-5">
  <li>
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setShowTermsModal(true);
      }}
    >
     Terms &amp; Conditions
    </Link>
    {" | "}
    <Link
      href="/privacy-policy"
     
    >
     Privacy Policy
    </Link>
  </li>
  </ul>
    </footer>
   </>
  );
};

export default Footer;
