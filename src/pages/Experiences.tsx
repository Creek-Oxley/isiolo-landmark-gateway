import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import experiencesImage from "@/assets/experiences.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experiences = () => {
  const attractions = [
    {
      name: "Buffalo Springs National Reserve",
      description:
        "A renowned wildlife sanctuary offering game drives, guided nature walks, and birdwatching. Home to elephants, lions, giraffes, and over 200 bird species.",
      highlights: ["Game Drives", "Bird Watching", "Nature Walks"],
    },
    {
      name: "Samburu National Reserve",
      description:
        "Famous for the 'Special Five' including Grevy's zebra, reticulated giraffe, Somali ostrich, Beisa oryx, and gerenuk. Unforgettable safari experiences await.",
      highlights: ["Special Five Wildlife", "Safari Tours", "Cultural Visits"],
    },
    {
      name: "Shaba National Reserve",
      description:
        "Made famous by Joy Adamson's Born Free, featuring rare wildlife, waterfalls, hot springs, and lush riverine landscapes.",
      highlights: ["Waterfalls", "Hot Springs", "Rare Wildlife"],
    },
    {
      name: "Lewa Wildlife Conservancy",
      description:
        "One of Kenya's top conservation areas spanning 62,000 acres with high wildlife densities and spectacular views.",
      highlights: ["Rhino Conservation", "Scenic Views", "Eco-Tourism"],
    },
    {
      name: "Ngare Ndare Forest Reserve",
      description:
        "A lush forest with crystal-clear pools, waterfalls, and a canopy walkway, perfect for hiking and birdwatching.",
      highlights: ["Canopy Walk", "Waterfall", "Forest Trails"],
    },
    {
      name: "Mount Ololokwe",
      description:
        "A sacred mountain offering challenging hikes and panoramic views. The area features the scenic Milgis River and stunning waterfalls.",
      highlights: ["Mountain Hiking", "Scenic Views", "Cultural Significance"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={experiencesImage}
        title="Experiences"
        subtitle="Discover the natural wonders and cultural treasures of Isiolo"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Explore Isiolo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Staying at Landmark Hotel puts you at the heart of Kenya's most celebrated attractions.
              Our team can arrange exclusive guided tours and safaris tailored to your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{attraction.name}</CardTitle>
                  <CardDescription className="text-base">{attraction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {attraction.highlights.map((highlight, idx) => (
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
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
            <h3 className="text-3xl md:text-4xl mb-4">Exclusive Excursions & Safaris</h3>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-primary-foreground/90">
              We create memorable experiences beyond exceptional hospitality. Our team arranges
              special visits to nearby attractions including Lewa Conservancy, Mount Kenya Wildlife
              Conservancy, Meru National Park, and Ol Pejeta Conservancy. Every detail is tailored
              for your comfort and discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary-foreground text-primary px-6 py-3 rounded-lg">
                <p className="text-sm font-medium">Distance to Airport</p>
                <p className="text-2xl font-bold text-accent">20 minutes</p>
              </div>
              <div className="bg-primary-foreground text-primary px-6 py-3 rounded-lg">
                <p className="text-sm font-medium">Distance to Nanyuki</p>
                <p className="text-2xl font-bold text-accent">45 minutes</p>
              </div>
              <div className="bg-primary-foreground text-primary px-6 py-3 rounded-lg">
                <p className="text-sm font-medium">Distance to Nairobi</p>
                <p className="text-2xl font-bold text-accent">4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
