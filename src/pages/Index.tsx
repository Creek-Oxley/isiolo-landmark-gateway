import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import diningImage from "@/assets/dining/_MG_0119.jpg";
import experiencesImage from "@/assets/experiences.jpg";
import RoomCarousel from "@/components/RoomCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { setupPageSEO } from "@/utils/seo";

// Import room images for carousel
import room1 from "@/assets/rooms/_MG_0014.jpg";
import room2 from "@/assets/rooms/_MG_0006.jpg";
import room3 from "@/assets/rooms/_MG_0008.jpg";
import room4 from "@/assets/rooms/_MG_0017.jpg";

const Index = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/",
      title: "Isiolo Landmark Hotel - Premier Business & Leisure Destination",
      description: "Experience luxury at Isiolo Landmark Hotel - Gateway to Northern Kenya's spectacular wildlife reserves. Offering premium accommodation, conference facilities, and safari experiences.",
      keywords: "Isiolo hotel, Northern Kenya accommodation, Samburu safari, business hotel Isiolo, conference facilities Kenya, luxury hotel Isiolo"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={heroImage}
        title="Isiolo Landmark Hotel"
        subtitle="Where comfort meets culture and every stay tells a story"
        showCTA={true}
      />

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6">Welcome to Landmark</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Strategically located in the heart of Isiolo town, Landmark Hotel is the preferred
              choice for discerning travelers. Whether you're on safari, conducting business, or
              exploring Kenya's Northern Circuit, we offer the perfect blend of luxury and comfort.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">20 min</p>
                <p className="text-sm text-muted-foreground">to Airport</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Conference Capacity</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl mb-6">Exceptional Accommodation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From cozy Standard Rooms to luxurious Executive Suites, each space is thoughtfully
                designed with modern amenities and elegant African-inspired decor. Experience
                comfort that exceeds expectations.
              </p>
              <Link to="/accommodation">
                <Button variant="hero" size="lg">
                  View Rooms
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <RoomCarousel 
                images={[room1, room2, room3, room4]} 
                roomType="Hotel Rooms" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={diningImage}
                alt="Restaurant"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Culinary Excellence</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Savor authentic Kenyan flavors and international cuisine at our restaurant. Our
                expert chefs craft memorable dining experiences using the finest local and imported
                ingredients.
              </p>
              <Link to="/dining">
                <Button variant="hero" size="lg">
                  Explore Dining
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl mb-6">Safari Adventures</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gateway to Kenya's most spectacular wildlife reserves. From Samburu to Buffalo
                Springs, experience the magic of African safaris with our curated excursions and
                expert guides.
              </p>
              <Link to="/experiences">
                <Button variant="hero" size="lg">
                  Discover More
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={experiencesImage}
                alt="Safari Experience"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Begin Your Journey</h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the perfect blend of African hospitality and modern luxury. Book your stay
            today and create memories that last a lifetime.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 h-auto"
            asChild
          >
            <Link to="/reservation">
              BOOK NOW
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
