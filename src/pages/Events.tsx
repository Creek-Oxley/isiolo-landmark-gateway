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
              <h2 className="text-4xl md:text-5xl mb-6">World-Class Event Facilities</h2>
              <p className="text-lg text-muted-foreground">
                Our versatile conference halls and meeting spaces are designed to accommodate
                corporate events, conferences, training sessions, and private functions with
                professional excellence.
              </p>
            </div>

            {/* Main Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl text-primary mb-4">Conference Facilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Capacity for 500 Guests</p>
                      <p className="text-sm text-muted-foreground">
                        Flexible seating arrangements for various event types
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wifi className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">High-Speed Internet</p>
                      <p className="text-sm text-muted-foreground">
                        Reliable connectivity throughout the venue
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Monitor className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">AV Equipment</p>
                      <p className="text-sm text-muted-foreground">
                        Professional sound system and projection facilities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coffee className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Catering Services</p>
                      <p className="text-sm text-muted-foreground">
                        Coffee breaks, lunch, and refreshments
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl text-primary mb-4">Additional Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-1"
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
                      <p className="font-semibold">Private Meeting Rooms</p>
                      <p className="text-sm text-muted-foreground">
                        For breakout sessions and board meetings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-1"
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
                      <p className="font-semibold">Business Lounge</p>
                      <p className="text-sm text-muted-foreground">
                        Comfortable space for networking and informal meetings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-1"
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
                      <p className="font-semibold">Secretarial Services</p>
                      <p className="text-sm text-muted-foreground">
                        Printing, copying, and document support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-1"
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
                      <p className="font-semibold">Dedicated Event Coordinator</p>
                      <p className="text-sm text-muted-foreground">
                        Professional support throughout your event
                      </p>
                    </div>
                  </li>
                </ul>
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
