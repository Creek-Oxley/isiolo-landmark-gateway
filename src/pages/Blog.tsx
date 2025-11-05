import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Exploring Samburu National Reserve",
      excerpt: "Discover the unique wildlife and stunning landscapes of Samburu, just a short drive from our hotel.",
      date: "November 1, 2025",
      category: "Travel Guide",
      image: "/placeholder.svg",
    },
    {
      title: "Top 10 Things to Do in Isiolo",
      excerpt: "From cultural experiences to adventure activities, explore the best of what Isiolo has to offer.",
      date: "October 28, 2025",
      category: "Local Tips",
      image: "/placeholder.svg",
    },
    {
      title: "Our New Restaurant Menu",
      excerpt: "Exciting new dishes combining traditional Kenyan flavors with international cuisine.",
      date: "October 25, 2025",
      category: "Dining",
      image: "/placeholder.svg",
    },
    {
      title: "Conference Facilities Guide",
      excerpt: "Everything you need to know about hosting your next business event at Landmark Hotel.",
      date: "October 20, 2025",
      category: "Business",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={heroImage}
        title="Hotel Blog"
        subtitle="Stories, tips, and updates from Isiolo Landmark Hotel"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Latest Articles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with our latest news, travel tips, and hotel updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">More articles coming soon!</p>
            <Button variant="outline" size="lg">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
