import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Offers", path: "/offers" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Dining", path: "/dining" },
  ];

  const navLinksRight = [
    { name: "Experiences", path: "/experiences" },
    { name: "Festive", path: "/festive" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path)
                    ? "text-accent"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Isiolo Landmark Hotel"
              className={`transition-all duration-300 ${
                isScrolled ? "h-16" : "h-20"
              }`}
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinksRight.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path)
                    ? "text-accent"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="lg">
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
