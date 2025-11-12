import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import diningHero from "@/assets/dining/_MG_0119.jpg";
import dining1 from "@/assets/dining/_MG_0139.jpg";
import dining2 from "@/assets/dining/_MG_0143.jpg";
import dining3 from "@/assets/dining/_MG_0189.jpg";
import dining4 from "@/assets/dining/_MG_9996.jpg";
import { setupPageSEO } from "@/utils/seo";

const Dining = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/dining",
      title: "Restaurant & Dining - Isiolo Landmark Hotel",
      description: "Experience exceptional dining at Isiolo Landmark Hotel. Enjoy local Kenyan cuisine and international dishes, private dining, room service, and event catering.",
      keywords: "Isiolo restaurant, hotel dining Kenya, local cuisine Isiolo, international food Northern Kenya, private dining Isiolo"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={diningHero}
        title="Dining"
        subtitle="A culinary journey celebrating local and international flavors"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6 text-center">Landmark Hotel Restaurant</h2>
            <p className="text-xl text-center mb-4 font-semibold">A Taste of Comfort and Culture</p>
            <p className="text-lg text-muted-foreground text-center mb-16">
              Step into the Landmark Hotel Restaurant and discover a delightful fusion of African warmth, 
              culinary creativity, and exceptional service. Every meal is thoughtfully crafted to reflect 
              freshness, flavor, and the vibrant spirit of Isiolo.
            </p>

            {/* Gallery Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <img
                src={dining1}
                alt="Restaurant Interior"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={dining2}
                alt="Dining Experience"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={dining3}
                alt="Culinary Delights"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={dining4}
                alt="Fine Dining"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 mb-20">
              <div>
                <h3 className="text-2xl text-primary mb-4">Our Dining Style</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Farm-to-Table Freshness</h4>
                    <p className="text-muted-foreground">
                      We celebrate the bounty of our region with ingredients sourced directly from local farms, 
                      ensuring every plate is fresh, flavorful, and wholesome.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Contemporary African Dining</h4>
                    <p className="text-muted-foreground">
                      Our menu features a blend of African-inspired dishes and international favorites — 
                      beautifully presented and full of authentic taste.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Casual Elegance</h4>
                    <p className="text-muted-foreground">
                      Whether you're here for a business lunch, a family dinner, or a quiet evening, 
                      our relaxed yet elegant atmosphere makes every dining moment special.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Buffet and Live Cooking Stations</h4>
                    <p className="text-muted-foreground">
                      Enjoy themed buffet nights and interactive live stations where our chefs bring 
                      culinary art to life before your eyes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Signature Drinks</h4>
                    <p className="text-muted-foreground">
                      Sip on handcrafted signature mocktails, shakes, Detox Smoothies or freshly brewed 
                      coffee at our restaurant — the perfect spot to unwind, meet, and connect.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Professional, Heartfelt Service</h4>
                    <p className="text-muted-foreground">
                      Our team blends professionalism with genuine Kenyan hospitality, ensuring every 
                      guest feels seen, valued, and cared for.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-12 rounded-lg text-center">
              <h3 className="text-3xl mb-4">Dining Hours</h3>
              <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto text-left">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">Breakfast</h4>
                  <p className="text-muted-foreground mb-2">6:00 AM - 10:30 AM</p>
                  <p className="text-sm">
                    Start your day with our extensive breakfast buffet featuring fresh fruits, pastries, 
                    hot dishes, and made-to-order items.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">Lunch & Dinner</h4>
                  <p className="text-muted-foreground mb-2">12:00 PM - 10:00 PM</p>
                  <p className="text-sm">
                    Experience our diverse buffet selection and live cooking stations featuring traditional 
                    Kenyan cuisine and international favorites.
                  </p>
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

export default Dining;
