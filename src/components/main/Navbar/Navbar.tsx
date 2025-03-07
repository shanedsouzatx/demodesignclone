"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Join Our Team",
    "Legal Notice",
    "Privacy Policy",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md border-b-4 border-blue-600 transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col sm:py-5 lg:py-3 px-6 gap-11 sm:gap-20 md:px-16 lg:px-13 md:flex-row items-center justify-between max-w-[1900px] mx-auto ">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-right md:flex-row md:text-center">
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={120}
              height={90}
              className="md:w-[75px] contrast-200"
            />
          </Link>
          <Link
            href="/"
            className="font-semibold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"
          >
            <span className="block md:inline">Behavior Analysis &</span>
            <span className="block">Therapy Partners</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap text-[17px] text-right justify-end xl:justify-center gap-x-0 xl:gap-x-0 xl:-space-x-2">
          {navItems.map((item) => {
            const linkPath = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
            const isActive = pathname === linkPath;
            return (
              <Link key={item} href={linkPath}>
                <Button
                  variant="ghost"
                  className={`relative py-3 text-lg text-right transition-colors duration-300 ${
                    isActive ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {item}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          {isOpen && (
            <div className="absolute left-0 top-full w-full bg-white shadow-lg p-2 flex flex-col gap-4 border-r border-gray-200">
              {navItems.map((item) => {
                const linkPath = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
                const isActive = pathname === linkPath;
                return (
                  <Link key={item} href={linkPath}>
                    <Button
                      variant="ghost"
                      className={`w-full text-right px-5 py-3 ${
                        isActive ? "bg-blue-600 text-white" : "hover:bg-blue-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
