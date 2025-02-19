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
    <footer className="footer pt-11">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <Image
            src="/images/logo3.png"
            alt="Logo"
            className="footer-logo"
            height={500}
            width={500}
          />
          <p className="max-w-[550px]">
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
              className="text-blue-500 underline underline-offset-4 ml-3"
            >
              Contact Us.
            </Link>
          </p>
          <p>
            If you want to join our team{" "}
            <Link
              href="/join-our-team"
              className="text-blue-500 underline underline-offset-4 ml-3"
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
        <div className="footer-right pt-28 pl-11">
          <h3 className="text-2xl font-bold mb-1">Explore</h3>
          <div className="border-t w- border-gray-300 w-[100px] mb-5" />
          {/* First group: 4 links */}
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">► Home</Link>
            </li>
            <li>
              <Link href="/about">► About Us</Link>
            </li>
            <li>
              <Link href="/services">► Services</Link>
            </li>
            <li>
              <Link href="/join-our-team">► Join Our Team</Link>
            </li>
          </ul>
          {/* Second group: 3 links on a new line, aligned to the right */}
          <ul className="flex flex-col gap-2  mt-4">
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPrivacyModal(true);
                }}
              >
                ► Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact">► Contact Us</Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowTermsModal(true);
                }}
              >
                ► Terms &amp; Conditions
              </Link>
            </li>
          </ul>
          <div className="cta-container mt-8">
            <Link href="/" className="cta-btn">
              Contact Us Now!
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Tech Craft, All Rights Reserved</p>
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

      {/* Terms & Conditions Modal */}
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
    </footer>
  );
};

export default Footer;
