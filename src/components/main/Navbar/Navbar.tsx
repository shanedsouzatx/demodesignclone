"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      // Hide navbar after scrolling down 100px
      if (window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav fixed !font-[merriweather] top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md border-b-4 border-blue-600 transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col py-5 px-6 md:px-16 md:flex-row items-center justify-between px-2 max-w-[1900px] mx-auto">
        {/* Left - Logo and Text */}
        <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-">
  <Link href="/">
    <Image
      src="/images/logo2.png"
      alt="Logo"
      width={120}
      height={90}
      className="md:w-[75px] contrast-200 transition-transform duration-200"
    />
  </Link>
  <Link
    href="/"
    className="font-semibold !font-[Merriweather] text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 text-center lg:text-left"
  >
    <span>Behavior Analysis &amp;</span> <br />
    <span className="flex lg:inline">Therapy Partners</span>
  </Link>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap text-base space-x-2 lg:-space-x-1 p">
          {navItems.map((item) => {
            const linkPath =
              item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
            const isActive = pathname === linkPath;
            return (
              <Link key={item} href={linkPath}>
                <Button
                  variant="ghost"
                  className={`relative group  py-3 text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "hover:bg-blue-600 text-white"
                  }`}
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    }`}
                  >
                    {item}
                  </span>
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex flex-col items-center mt-2 w-full">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            {/* Mobile dropdown fixed at bottom */}
            <SheetContent side="bottom" className="fixed bottom-0 h-[80vh] left-0 w-full">
              <div className="flex flex-col gap-4 p-4">
                {navItems.map((item) => {
                  const linkPath =
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`;
                  const isActive = pathname === linkPath;
                  return (
                    <Link key={item} href={linkPath}>
                      <Button
                        variant="ghost"
                        className={`w-full text-left px-5 py-3 transition-colors duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "hover:bg-blue-600 text-black"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
