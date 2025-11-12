import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import diningHero from "@/assets/landmark-building.png";
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
        title="Restaurant"
        subtitle="A taste of comfort and culture"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6 text-center">Landmark Hotel Restaurant</h2>
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

            <div className="mb-20">
              <h3 className="text-3xl mb-8 text-center">Our Dining Style</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl text-primary mb-3">Farm-to-Table Freshness</h4>
                  <p className="text-muted-foreground">
                    We celebrate the bounty of our region with ingredients sourced directly from local farms, 
                    ensuring every plate is fresh, flavorful, and wholesome.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl text-primary mb-3">Contemporary African Dining</h4>
                  <p className="text-muted-foreground">
                    Our menu features a blend of African-inspired dishes and international favorites — 
                    beautifully presented and full of authentic taste.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl text-primary mb-3">Casual Elegance</h4>
                  <p className="text-muted-foreground">
                    Whether you're here for a business lunch, a family dinner, or a quiet evening, 
                    our relaxed yet elegant atmosphere makes every dining moment special.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl text-primary mb-3">Buffet and Live Cooking Stations</h4>
                  <p className="text-muted-foreground">
                    Enjoy themed buffet nights and interactive live stations where our chefs bring 
                    culinary art to life before your eyes.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl text-primary mb-3">Signature Drinks</h4>
                  <p className="text-muted-foreground">
                    Sip on handcrafted signature mocktails, shakes, Detox Smoothies or freshly brewed 
                    coffee at our restaurants — the perfect spot to unwind, meet, and connect.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl text-primary mb-3">Professional, Heartfelt Service</h4>
                  <p className="text-muted-foreground">
                    Our team blends professionalism with genuine Kenyan hospitality, ensuring every 
                    guest feels seen, valued, and cared for.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-12 rounded-lg mb-20">
              <h3 className="text-3xl mb-6 text-center">Meetings, Conferences & Corporate Events</h3>
              <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                At the Landmark Hotel, Isiolo, we redefine the art of business gatherings with modern facilities, 
                seamless service, and an inspiring atmosphere. Whether it's a high-level board meeting, a large 
                corporate seminar, or a private workshop, our spaces are designed to meet your every need with 
                elegance and efficiency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl text-primary mb-3">Conference Facilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <div>
                        <strong>Boardrooms:</strong> Ideal for executive meetings and private discussions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <div>
                        <strong>Spacious Conference Halls:</strong> Host 150 to 500 guests with flexible setups
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <div>
                        <strong>Modern Technology:</strong> High-speed Wi-Fi, audio-visual systems, projectors, and smart screens
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl text-primary mb-3">Additional Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <div>
                        <strong>Support Services:</strong> Experienced event and technical teams
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <div>
                        <strong>Ambiance & Comfort:</strong> Elegant interiors and climate-controlled rooms
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <div>
                        <strong>Catering & Refreshments:</strong> Tailor-made menus from tea breaks to gala dinners
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl mb-4 text-center">Ample Parking & Security</h3>
                <p className="text-muted-foreground text-center">
                  Landmark Hotel offers ample and secure parking facilities for all our guests, ensuring peace of 
                  mind throughout your stay. Our 24-hour security team and surveillance systems guarantee a safe 
                  environment for both guests and their vehicles.
                </p>
              </div>
              
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl mb-4 text-center">Concierge Services</h3>
                <p className="text-muted-foreground text-center">
                  Our professional concierge team is always on hand to assist with travel arrangements, local 
                  excursions, transport coordination, and any special requests, making every guest experience 
                  seamless and memorable.
                </p>
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
