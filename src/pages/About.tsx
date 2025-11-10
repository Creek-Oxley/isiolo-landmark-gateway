import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { setupPageSEO } from "@/utils/seo";

const About = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/about",
      title: "About Us - Isiolo Landmark Hotel | Premier Northern Kenya Hotel",
      description: "Learn about Isiolo Landmark Hotel, your gateway to Northern Kenya. Strategic location, modern facilities, and exceptional hospitality since our establishment.",
      keywords: "about Isiolo Landmark Hotel, hotel history Isiolo, Northern Kenya hospitality, business hotel Isiolo, contact Isiolo hotel"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={heroImage}
        title="About Us"
        subtitle="Isiolo's Premier Business & Leisure Destination"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-center">Discover the Landmark Experience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strategically located in the heart of Isiolo town, Landmark Hotel is the preferred
                choice for discerning travelers, offering a seamless blend of comfort, convenience,
                and professional service. Whether you're a transit guest en route to the Samburu
                local market, a corporate client seeking a top-tier venue, or a leisure traveler,
                our hotel is your gateway to Isiolo's vibrant culture and breathtaking natural
                wonders.
              </p>
            </div>

            {/* Location Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-semibold mb-1">20 minutes</p>
                <p className="text-sm text-muted-foreground">to Isiolo International Airport</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-semibold mb-1">45 minutes</p>
                <p className="text-sm text-muted-foreground">drive to Nanyuki town</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-semibold mb-1">4 hours</p>
                <p className="text-sm text-muted-foreground">drive to Nairobi</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-3xl mb-8 text-center">Why Choose Landmark Hotel?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-2">Strategic Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Gateway to the Northern tourism circuit and major reserves
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-2">Exceptional Facilities</h4>
                    <p className="text-sm text-muted-foreground">
                      Top-tier conference halls, comfortable rooms, and enhanced amenities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-2">Diverse Clientele</h4>
                    <p className="text-sm text-muted-foreground">
                      Serving tour groups, transit guests, and local businesses
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-2">Full Accessibility</h4>
                    <p className="text-sm text-muted-foreground">
                      PWD-friendly facilities with thoughtfully designed amenities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Essence */}
            <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground p-12 rounded-lg text-center mb-16">
              <h3 className="text-3xl md:text-4xl mb-4">Our Brand Essence</h3>
              <p className="text-xl text-primary-foreground/90 italic">
                "Where comfort meets culture and every stay tells a story"
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-3xl mb-8 text-center">Get in Touch</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Isiolo Town, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+254 110 463 062</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@isiololandmarkhotel.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Reception</h4>
                      <p className="text-muted-foreground">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
