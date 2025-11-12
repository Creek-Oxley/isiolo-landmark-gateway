import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import eventsImage from "@/assets/events.jpg";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, Monitor } from "lucide-react";
import { setupPageSEO } from "@/utils/seo";

const Events = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/events",
      title: "Conference & Business Events - Isiolo Landmark Hotel",
      description: "Host successful corporate events at Isiolo Landmark Hotel. Conference facilities, meeting rooms, business lounge, and professional event coordination services.",
      keywords: "Isiolo conference facilities, business meetings Kenya, corporate events Isiolo, meeting rooms Northern Kenya, event venue Isiolo"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={eventsImage}
        title="Conference & Events"
        subtitle="Professional venues equipped for your success"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">Meetings, Conferences & Corporate Events</h2>
              <p className="text-lg text-muted-foreground">
                At the Landmark Hotel, Isiolo, we redefine the art of business gatherings with modern facilities, 
                seamless service, and an inspiring atmosphere. Whether it's a high-level board meeting, a large 
                corporate seminar, or a private workshop, our spaces are designed to meet your every need with 
                elegance and efficiency.
              </p>
            </div>

            {/* Main Features */}
            <div className="space-y-8 mb-16">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl text-primary mb-6">Conference Facilities</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Boardrooms</h4>
                    <p className="text-muted-foreground">
                      Ideal for executive meetings and private discussions, our boardrooms provide a professional 
                      setting with comfortable seating, natural lighting, and a serene environment that encourages 
                      focus and collaboration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Spacious Conference Halls</h4>
                    <p className="text-muted-foreground">
                      Designed to host between 150 to 500 guests, our conference halls are versatile and can be 
                      customized for various setups — from theatre and classroom arrangements to banquets and exhibitions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Modern Technology</h4>
                    <p className="text-muted-foreground">
                      Each space is equipped with high-speed Wi-Fi, audio-visual systems, projectors, public address 
                      systems, and smart screens to ensure every presentation and meeting runs smoothly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Support Services</h4>
                    <p className="text-muted-foreground">
                      Our experienced event and technical teams are always on hand to assist with setup, coordination, 
                      and guest support, ensuring a stress-free experience from start to finish.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Ambiance & Comfort</h4>
                    <p className="text-muted-foreground">
                      Elegant interiors and climate-controlled rooms provide the perfect balance of comfort, privacy, 
                      and professionalism.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Catering & Refreshments</h4>
                    <p className="text-muted-foreground">
                      Our restaurant provides tailor-made menus — from tea breaks and working lunches to gala dinners — 
                      all crafted with fresh, locally sourced ingredients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="text-2xl text-primary mb-4">Ample Parking & Security</h3>
                  <p className="text-muted-foreground">
                    Landmark Hotel offers ample and secure parking facilities for all our guests, ensuring peace 
                    of mind throughout your stay. Our 24-hour security team and surveillance systems guarantee a 
                    safe environment for both guests and their vehicles.
                  </p>
                </div>

                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="text-2xl text-primary mb-4">Concierge Services</h3>
                  <p className="text-muted-foreground">
                    Our professional concierge team is always on hand to assist with travel arrangements, local 
                    excursions, transport coordination, and any special requests, making every guest experience 
                    seamless and memorable.
                  </p>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="mb-16">
              <h3 className="text-3xl text-center mb-10">Perfect for Every Occasion</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Corporate Events</h4>
                  <p className="text-sm text-muted-foreground">
                    Conferences, seminars, and business meetings
                  </p>
                </div>
                <div className="text-center p-6 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Training Sessions</h4>
                  <p className="text-sm text-muted-foreground">
                    Workshops and professional development programs
                  </p>
                </div>
                <div className="text-center p-6 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Private Functions</h4>
                  <p className="text-sm text-muted-foreground">
                    Weddings, celebrations, and social gatherings
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground p-12 rounded-lg text-center">
              <h3 className="text-3xl mb-4">Ready to Plan Your Event?</h3>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Our experienced events team is here to ensure your conference or function is
                executed flawlessly. Contact us today to discuss your requirements and receive a
                customized proposal.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="mailto:info@isiololandmarkhotel.co.ke?subject=Event%20Proposal%20Request">
                  Request a Proposal
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
