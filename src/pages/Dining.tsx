import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import diningImage from "@/assets/dining.jpg";

const Dining = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={diningImage}
        title="Dining"
        subtitle="A culinary journey celebrating local and international flavors"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6 text-center">Our Restaurant</h2>
            <p className="text-lg text-muted-foreground text-center mb-16">
              Enjoy a culinary journey at our on-site restaurant, featuring both local Kenyan
              specialties and international cuisines prepared by our expert chefs.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-2xl text-primary mb-4">Breakfast</h3>
                <p className="text-muted-foreground mb-4">6:00 AM - 10:30 AM</p>
                <p className="mb-4">
                  Start your day with our extensive breakfast buffet featuring fresh fruits, pastries,
                  hot dishes, and made-to-order omelets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Continental & Full English Breakfast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Fresh Tropical Fruits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Kenyan Tea & Premium Coffee</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl text-primary mb-4">Lunch & Dinner</h3>
                <p className="text-muted-foreground mb-4">12:00 PM - 10:00 PM</p>
                <p className="mb-4">
                  Our à la carte menu offers a diverse selection of dishes, from traditional Kenyan
                  cuisine to international favorites.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Authentic Kenyan Dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>International Cuisine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Vegetarian & Special Dietary Options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary p-12 rounded-lg text-center">
              <h3 className="text-3xl mb-4">Signature Experiences</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Elevate your dining experience with our special offerings including private dining
                arrangements, outdoor terrace seating, and custom menu options for events.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">Private Dining</h4>
                  <p className="text-sm">Intimate settings for special occasions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">Room Service</h4>
                  <p className="text-sm">Enjoy meals in the comfort of your room</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">Event Catering</h4>
                  <p className="text-sm">Customized menus for your events</p>
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
