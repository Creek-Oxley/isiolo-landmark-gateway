import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Isiolo Landmark Hotel" className="h-24 mb-4" />
            <p className="text-sm text-primary-foreground/80">
              Where comfort meets culture and every stay tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/accommodation" className="text-sm hover:text-accent transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-sm hover:text-accent transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-sm hover:text-accent transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/offers" className="text-sm hover:text-accent transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/festive" className="text-sm hover:text-accent transition-colors">
                  Festive Celebrations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>Isiolo Town, Kenya</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>info@isiololandmark.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Isiolo Landmark Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
