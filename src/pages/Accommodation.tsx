import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import RoomCarousel from "@/components/RoomCarousel";
import roomImage from "@/assets/rooms/_MG_0004.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wifi, Coffee, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { setupPageSEO } from "@/utils/seo";

// Import all room images for carousels
import standard1 from "@/assets/rooms/_MG_0050.jpg";
import standard2 from "@/assets/rooms/_MG_0055.jpg";
import standard3 from "@/assets/rooms/_MG_0056.jpg";

import deluxe1 from "@/assets/rooms/_MG_0008.jpg";
import deluxe2 from "@/assets/rooms/_MG_0014.jpg";
import deluxe3 from "@/assets/rooms/_MG_0017.jpg";

import superior1 from "@/assets/rooms/_MG_9945.jpg";
import superior2 from "@/assets/rooms/_MG_9948.jpg";
import superior3 from "@/assets/rooms/_MG_9957.jpg";

import executive1 from "@/assets/rooms/_MG_0021.jpg";
import executive2 from "@/assets/rooms/_MG_0023.jpg";
import executive3 from "@/assets/rooms/_MG_0035.jpg";

const Accommodation = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/accommodation",
      title: "Luxury Accommodation - Rooms & Suites | Isiolo Landmark Hotel",
      description: "Choose from Standard, Deluxe, Superior Deluxe rooms and Executive Suites at Isiolo Landmark Hotel. Modern amenities, comfortable beds, and exceptional service.",
      keywords: "Isiolo hotel rooms, luxury accommodation Isiolo, hotel suites Northern Kenya, executive rooms Isiolo, deluxe hotel rooms Kenya"
    });
  }, []);

  const rooms = [
    {
      type: "Standard Room",
      price: "KES 5,000 - 8,500",
      description: "Perfect for solo travelers and short-term stays",
      capacity: "1-2 Guests",
      amenities: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "En-suite Bathroom"],
      images: [standard1, standard2, standard3],
      pricing: "Single: B&B 5,000 | HB 7,000 | FB 8,500"
    },
    {
      type: "Deluxe Room",
      price: "KES 6,500 - 11,000",
      description: "Spacious and ideal for couples or guests seeking extra comfort",
      capacity: "2 Guests",
      amenities: ["King Size Bed", "Work Desk", "Mini Bar", "Premium Toiletries"],
      images: [deluxe1, deluxe2, deluxe3],
      pricing: "Single: B&B 6,500 | HB 8,000 | FB 10,000 • Double: B&B 8,000 | HB 9,500 | FB 11,000"
    },
    {
      type: "Superior Deluxe",
      price: "KES 7,500 - 12,000",
      description: "Enhanced comfort with modern amenities",
      capacity: "2-3 Guests",
      amenities: ["Balcony", "Coffee Maker", "Seating Area", "Room Service"],
      images: [superior1, superior2, superior3],
      pricing: "Single: B&B 7,500 | HB 9,000 | FB 10,500 • Double: B&B 9,000 | HB 10,500 | FB 12,000"
    },
    {
      type: "Executive Suite",
      price: "KES 8,500 - 16,000",
      description: "Luxurious suites with separate living areas",
      capacity: "2-4 Guests",
      amenities: ["Separate Living Room", "Kitchenette", "Premium Bedding", "Butler Service"],
      images: [executive1, executive2, executive3],
      pricing: "Single: B&B 8,500 | HB 10,000 | FB 11,500 • Double: B&B 10,000 | HB 13,000 | FB 16,000"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={roomImage}
        title="Accommodation"
        subtitle="Experience comfort and elegance in every room"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Rooms & Suites</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each room is thoughtfully designed to provide maximum comfort and a memorable stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <RoomCarousel images={room.images} roomType={room.type} />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-primary">{room.type}</CardTitle>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent">{room.price}</p>
                      <p className="text-xs text-muted-foreground">per night</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{room.description}</CardDescription>
                  <p className="text-xs text-muted-foreground mt-2">{room.pricing}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-4 h-4 text-accent flex-shrink-0"
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
                        {amenity}
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/reservation">
                      Reserve Room
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center mb-12">All Rooms Include</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Wifi className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">High-Speed WiFi</h3>
              <p className="text-sm text-muted-foreground">Complimentary internet access</p>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Daily Breakfast</h3>
              <p className="text-sm text-muted-foreground">Start your day right</p>
            </div>
            <div className="text-center">
              <Wind className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Climate Control</h3>
              <p className="text-sm text-muted-foreground">Perfect temperature always</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-muted-foreground">We're here to help anytime</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;
