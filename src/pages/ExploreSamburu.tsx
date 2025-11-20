import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { setupPageSEO } from "@/utils/seo";
import { Phone, Mail, MessageCircle, Wifi, Car, UtensilsCrossed, Shield, Calendar, Users, Bed, MapPin, Clock, CheckCircle } from "lucide-react";

// Import images
import heroImage from "@/assets/samburu/hero-samburu.jpg";
import samburu1 from "@/assets/samburu/_MG_0419 (1).jpg";
import samburu2 from "@/assets/samburu/_MG_0425.jpg";
import samburu3 from "@/assets/samburu/_MG_0915 (3).jpg";
import samburu4 from "@/assets/samburu/_MG_1000.jpg";
import samburu5 from "@/assets/samburu/_MG_5084 (1).jpg";
import samburu6 from "@/assets/samburu/_MG_5122 (2).jpg";
import samburu7 from "@/assets/samburu/_MG_5128 (2).jpg";
import samburu8 from "@/assets/samburu/_MG_5477 (1).jpg";
import room1 from "@/assets/rooms/_MG_0004.jpg";
import room2 from "@/assets/rooms/_MG_0014.jpg";
import dining1 from "@/assets/dining/_MG_0119.jpg";
import dining2 from "@/assets/dining/_MG_0143.jpg";

const ExploreSamburu = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/explore-samburu",
      title: "Affordable Isiolo Hotel - Gateway to Samburu National Reserve | Isiolo Landmark Hotel",
      description: "Budget-friendly accommodation in Isiolo, the gateway to Samburu National Reserve. Starting from KES 5000. Perfect for travelers, NGOs, and events. Book your stay before your Samburu adventure.",
      keywords: "Isiolo hotels, affordable hotel in Isiolo, gateway to Samburu, Samburu National Reserve accommodation, budget stay near Samburu, Isiolo event venues, NGO accommodation Isiolo, Samburu travel, hotels near Samburu, Northern Kenya hotels"
    });
  }, []);

  const contactNumber = "0788138426";
  const contactEmail = "info@isiololandmarkhotel.co.ke";

  const handleCall = () => {
    window.location.href = `tel:${contactNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/254${contactNumber.substring(1)}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const amenities = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Car, label: "Secure Parking" },
    { icon: UtensilsCrossed, label: "Restaurant & Catering" },
    { icon: Shield, label: "24/7 Security" },
  ];

  const galleryImages = [
    samburu1, samburu2, samburu3, samburu4,
    samburu5, samburu6, samburu7, samburu8,
    room1, room2, dining1, dining2
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        image={heroImage}
        title="Your Gateway to Samburu and Northern Kenya"
        subtitle="Affordable luxury stays in Isiolo from KES 5,000 per night"
        showCTA={true}
        height="h-[85vh]"
      />

      {/* Fixed CTA Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button
          onClick={handleCall}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 flex items-center justify-center"
          size="icon"
        >
          <Phone className="h-6 w-6" />
        </Button>
        <Button
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 flex items-center justify-center"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Button
          onClick={handleEmail}
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 flex items-center justify-center"
          size="icon"
        >
          <Mail className="h-6 w-6" />
        </Button>
      </div>

      {/* Why Isiolo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Stay in Isiolo Before Your Samburu Adventure?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Isiolo is the perfect base for exploring Samburu National Reserve. Located just 70km away, 
              our hotel offers budget-friendly comfort with easy access to one of Kenya's most stunning wildlife destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Only 70km from Samburu National Reserve. Start your game drive in the morning and return to comfort in the evening.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bed className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Pocket-Friendly Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From KES 5,000 per night. Save significantly compared to lodges inside the reserve while enjoying quality accommodation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <UtensilsCrossed className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Full Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Restaurant, WiFi, secure parking, and comfortable rooms. Everything you need for a restful stay between adventures.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sample Itinerary */}
          <div className="bg-secondary rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Sample 2-Day Itinerary</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Day 1: Arrival & Overnight in Isiolo</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Check in at Isiolo Landmark Hotel by 2:00 PM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <UtensilsCrossed className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Enjoy dinner at our restaurant featuring local cuisine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Bed className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Rest in comfortable rooms with WiFi and modern amenities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Day 2: Full Day Safari in Samburu</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Early breakfast at 6:00 AM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Car className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Drive to Samburu National Reserve (1.5 hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Full day game drive - spot elephants, lions, leopards, and unique Samburu species</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Bed className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Return to Isiolo Landmark Hotel for dinner and overnight</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Main Offers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Your Perfect Stay Awaits
          </h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Offer 1: Travelers to Northern Kenya */}
            <Card className="border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={room1} 
                    alt="Comfortable room at Isiolo Landmark Hotel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Bed className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">Budget-Friendly Gateway to Samburu</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Perfect for travelers exploring Northern Kenya and Samburu National Reserve
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Rooms starting from KES 5,000 per night</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Only 70km from Samburu National Reserve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Save up to 60% compared to lodges inside the reserve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Transport coordination available</span>
                      </li>
                    </ul>
                    <Button onClick={scrollToBooking} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Check Availability
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Offer 2: Events & Conferences */}
            <Card className="border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="p-8 order-2 md:order-1">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">Events & Corporate Meetings</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Host your conferences, workshops, and celebrations in Isiolo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Spacious halls accommodating 150-500 guests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Full catering services with local cuisine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Guest accommodation packages available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Central location in Isiolo town</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Modern AV equipment and WiFi</span>
                      </li>
                    </ul>
                    <Button onClick={scrollToBooking} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Plan Your Event
                    </Button>
                  </CardContent>
                </div>
                <div className="h-64 md:h-auto order-1 md:order-2">
                  <img 
                    src={dining1} 
                    alt="Event space at Isiolo Landmark Hotel" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Offer 3: NGOs & Research Teams */}
            <Card className="border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={room2} 
                    alt="Long-stay accommodation at Isiolo Landmark Hotel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">NGO & Research Team Accommodation</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Ideal for organizations working in Samburu, Isiolo, and Northern Kenya
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Safe and secure environment with 24/7 security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Long-stay discounts for extended projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Reliable amenities: WiFi, parking, laundry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Meeting rooms for team briefings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Comfortable base for Northern Kenya fieldwork</span>
                      </li>
                    </ul>
                    <Button onClick={scrollToBooking} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Request Group Rates
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Your Comfort is Our Priority</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <amenity.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium text-foreground">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Experience Samburu & Isiolo Landmark
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators / Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Guests Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border text-center p-6">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <CardTitle className="text-xl">Happy Guests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Travelers from around the world trust us for their Samburu adventures</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center p-6">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <CardTitle className="text-xl">Guest Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Consistently high ratings for comfort, service, and value</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center p-6">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <CardTitle className="text-xl">Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Serving travelers and businesses in Isiolo since 2013</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="booking" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to reserve your room or plan your event. Our team is ready to make your stay memorable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call {contactNumber}
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button
              onClick={handleEmail}
              size="lg"
              className="bg-background hover:bg-background/90 text-foreground"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
          <p className="mt-8 text-lg opacity-90">
            Starting from <span className="font-bold text-2xl">KES 5,000</span> per night
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreSamburu;
