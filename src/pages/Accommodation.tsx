import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import roomImage from "@/assets/rooms/_MG_0004.jpg";
import room1 from "@/assets/rooms/_MG_9920.jpg";
import room2 from "@/assets/rooms/_MG_0008.jpg";
import room3 from "@/assets/rooms/_MG_9945.jpg";
import room4 from "@/assets/rooms/_MG_0021.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wifi, Coffee, Wind } from "lucide-react";

const Accommodation = () => {
  const rooms = [
    {
      type: "Standard Room",
      price: "$50",
      description: "Perfect for solo travelers and short-term stays",
      capacity: "1-2 Guests",
      amenities: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "En-suite Bathroom"],
      image: room1,
    },
    {
      type: "Deluxe Room",
      price: "$65 - $80",
      description: "Spacious and ideal for couples or guests seeking extra comfort",
      capacity: "2 Guests",
      amenities: ["King Size Bed", "Work Desk", "Mini Bar", "Premium Toiletries"],
      image: room2,
    },
    {
      type: "Superior Deluxe",
      price: "$75 - $90",
      description: "Enhanced comfort with modern amenities",
      capacity: "2-3 Guests",
      amenities: ["Balcony", "Coffee Maker", "Seating Area", "Room Service"],
      image: room3,
    },
    {
      type: "Executive Suite",
      price: "$85 - $100",
      description: "Luxurious suites with separate living areas",
      capacity: "2-4 Guests",
      amenities: ["Separate Living Room", "Kitchenette", "Premium Bedding", "Butler Service"],
      image: room4,
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
                <div className="h-64 bg-muted relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-primary">{room.type}</CardTitle>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent">{room.price}</p>
                      <p className="text-xs text-muted-foreground">per night</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{room.description}</CardDescription>
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
                    <a href="https://bookings.isiololandmarkhotel.co.ke" target="_blank" rel="noopener noreferrer">
                      Reserve Room
                    </a>
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
