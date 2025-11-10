import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { setupPageSEO } from "@/utils/seo";

const Festive = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/festive",
      title: "Festive Celebrations & Private Events - Isiolo Landmark Hotel",
      description: "Celebrate special occasions at Isiolo Landmark Hotel. Holiday celebrations, weddings, birthdays, anniversaries, and private parties with exceptional service.",
      keywords: "Isiolo wedding venue, holiday celebrations Kenya, private parties Isiolo, birthday celebrations, anniversary events Northern Kenya"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={heroImage}
        title="Festive Celebrations"
        subtitle="Celebrate special moments in style at Isiolo Landmark Hotel"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">Create Unforgettable Memories</h2>
              <p className="text-lg text-muted-foreground">
                Whether it's the holiday season, a milestone celebration, or a special gathering,
                Isiolo Landmark Hotel provides the perfect backdrop for your festive occasions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl text-primary mb-4">Holiday Celebrations</h3>
                <p className="text-muted-foreground mb-6">
                  Join us for special holiday events throughout the year, featuring festive
                  decorations, traditional meals, and cultural entertainment.
                </p>
                <ul className="space-y-3">
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
                    <span>New Year's Eve Gala Dinners</span>
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
                    <span>Christmas Celebrations & Themed Dinners</span>
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
                    <span>Cultural Festival Events</span>
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
                    <span>Live Entertainment & Music</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl text-primary mb-4">Private Celebrations</h3>
                <p className="text-muted-foreground mb-6">
                  Host your special occasions in our elegant spaces, with personalized service and
                  attention to every detail.
                </p>
                <ul className="space-y-3">
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
                    <span>Birthday Parties & Anniversaries</span>
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
                    <span>Family Reunions & Gatherings</span>
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
                    <span>Customized Menu Options</span>
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
                    <span>Decoration & Setup Services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground p-12 rounded-lg text-center">
              <h3 className="text-3xl mb-4">Plan Your Celebration</h3>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Our events team is ready to help you create a memorable celebration. Contact us to
                discuss your requirements and let us bring your vision to life.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="mailto:info@isiololandmarkhotel.co.ke?subject=Festive%20Celebration%20Inquiry">
                  Contact Events Team
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

export default Festive;
