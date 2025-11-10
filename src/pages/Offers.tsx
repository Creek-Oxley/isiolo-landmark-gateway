import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { setupPageSEO } from "@/utils/seo";

const Offers = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/offers",
      title: "Special Offers & Packages - Isiolo Landmark Hotel",
      description: "Discover exclusive deals and packages at Isiolo Landmark Hotel. Safari packages, business traveler specials, and romantic getaways at unbeatable prices.",
      keywords: "Isiolo hotel offers, safari packages Kenya, hotel deals Isiolo, weekend getaway Kenya, business hotel specials"
    });
  }, []);
  const offers = [
    {
      title: "Safari Adventure Package",
      description: "3 nights accommodation + guided safari tour to Samburu National Reserve",
      price: "$450",
      features: ["Deluxe Room", "Daily Breakfast", "Safari Tour", "Airport Transfer"],
    },
    {
      title: "Business Traveler Special",
      description: "Extended stay rates for corporate guests with premium amenities",
      price: "From $60/night",
      features: ["Free WiFi", "Meeting Room Access", "Business Lounge", "Laundry Service"],
    },
    {
      title: "Weekend Getaway",
      description: "Relax and unwind with our special weekend package",
      price: "$200",
      features: ["2 Nights Stay", "Spa Treatment", "Dinner for Two", "Late Checkout"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={heroImage}
        title="Special Offers"
        subtitle="Discover exclusive deals and packages for your perfect stay"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Exclusive Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take advantage of our carefully curated offers designed to enhance your experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{offer.title}</CardTitle>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-accent">{offer.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/reservation">
                      Book Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
