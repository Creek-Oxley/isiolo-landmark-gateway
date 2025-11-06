import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, MapPin, Phone, Mail } from "lucide-react";

const ExploreSamburu = () => {
  useEffect(() => {
    document.title = "Explore Samburu from Isiolo – The Ultimate Northern Kenya Getaway | Landmark Hotel Isiolo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experience the perfect fusion of Isiolo's urban comfort and Samburu's wilderness charm. 2 nights full board package from Ksh 20,000 per person. Book your Samburu safari from Isiolo Landmark Hotel today."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Experience the perfect fusion of Isiolo's urban comfort and Samburu's wilderness charm. 2 nights full board package from Ksh 20,000 per person. Book your Samburu safari from Isiolo Landmark Hotel today.";
      document.head.appendChild(meta);
    }

    // SEO Keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "Isiolo hotels, Samburu lodges, Isiolo to Samburu tour, Isiolo accommodation, Samburu game drive, northern Kenya safari, Samburu Elephant Lodge, Landmark Hotel Isiolo, explore Samburu from Isiolo, weekend getaway Kenya";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywordsContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packageHighlights = [
    "2 Nights Full Board Accommodation",
    "Karaoke Night at Landmark Hotel",
    "Early Morning Game Drive at Samburu",
    "Sunrise Bush Breakfast in the Wild",
    "Lunch by the Ewaso Nyiro River",
    "Swimming Pool Access",
    "Indoor & Outdoor Games",
    "Kids' Paint & Brushes Corner",
    "Discounted Spa Treatments",
    "Transport Included"
  ];

  const rates = [
    { 
      category: "Standard Room", 
      occupancy: "Single", 
      bb: "5,000", 
      hb: "7,000", 
      fb: "8,500" 
    },
    { 
      category: "Deluxe Room", 
      occupancy: "Single", 
      bb: "6,500", 
      hb: "8,000", 
      fb: "10,000" 
    },
    { 
      category: "Deluxe Room", 
      occupancy: "Double", 
      bb: "8,000", 
      hb: "9,500", 
      fb: "11,000" 
    },
    { 
      category: "Superior Deluxe", 
      occupancy: "Single", 
      bb: "7,500", 
      hb: "9,000", 
      fb: "10,500" 
    },
    { 
      category: "Superior Deluxe", 
      occupancy: "Double", 
      bb: "9,000", 
      hb: "10,500", 
      fb: "12,000" 
    },
    { 
      category: "Executive Suite", 
      occupancy: "Single", 
      bb: "8,500", 
      hb: "10,000", 
      fb: "11,500" 
    },
    { 
      category: "Executive Suite", 
      occupancy: "Double", 
      bb: "10,000", 
      hb: "13,000", 
      fb: "16,000" 
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            From Urban Comfort to Wild Serenity
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Your gateway to Samburu begins at Isiolo Landmark Hotel
          </p>
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToBooking}
            className="text-lg px-8 py-6"
          >
            Book Your Samburu Escape
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Landmark–Samburu Escape Package</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the perfect fusion of Isiolo's urban comfort and Samburu's wilderness charm. 
              Begin your journey at Landmark Hotel, Isiolo, and venture into the untamed beauty of 
              Samburu National Reserve, where wildlife, tranquility, and culture blend seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Stay Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Package Overview</CardTitle>
                  <CardDescription>2 Nights | Full Board</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">
                    Ksh 20,000 <span className="text-base font-normal text-muted-foreground">per person</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Transport inclusive</p>
                </CardContent>
              </Card>

              {/* Why You'll Love It Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Why You'll Love It</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A perfect balance of music, nature, and relaxation — from karaoke nights to sunrise safaris. 
                    Experience the best of both worlds in Northern Kenya.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Package Highlights */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Package Highlights</CardTitle>
                <CardDescription>Everything included in your escape</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {packageHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    At Landmark Hotel, Isiolo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>2 nights' stay on full board basis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Karaoke Night on the first evening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Early morning departure for the Samburu adventure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    At Samburu Elephant Lodge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Early Morning Game Drive at Samburu National Reserve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Sunrise Bush Breakfast in the wild</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Lunch by the Riverbank overlooking the Ewaso Nyiro River</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Swimming in the lodge's tranquil pool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Access to Indoor & Outdoor Games</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Kids' Paint & Brushes Corner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Discounted Spa Treats at the Grateful Glow Spa</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Landmark Hotel Rates Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Landmark Hotel Accommodation Rates</h2>
            <p className="text-center text-muted-foreground mb-12">
              All rates in Kenyan Shillings (Ksh)
            </p>
            
            <Card>
              <CardContent className="p-6 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Room Category</TableHead>
                      <TableHead className="font-semibold">Occupancy</TableHead>
                      <TableHead className="font-semibold">Bed & Breakfast</TableHead>
                      <TableHead className="font-semibold">Half Board</TableHead>
                      <TableHead className="font-semibold">Full Board</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{rate.category}</TableCell>
                        <TableCell>{rate.occupancy}</TableCell>
                        <TableCell>Ksh {rate.bb}</TableCell>
                        <TableCell>Ksh {rate.hb}</TableCell>
                        <TableCell>Ksh {rate.fb}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking & Contact Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Book Your Escape Today</h2>
            <p className="text-xl text-muted-foreground mb-12">
              "From Karaoke Nights to Sunrise Safaris — Your Perfect Getaway Awaits!"
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call / WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+254724515808" 
                    className="text-lg text-primary hover:underline"
                  >
                    +254 724 515 808
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:reservations@isiololandmarkhotel.co.ke" 
                    className="text-lg text-primary hover:underline break-all"
                  >
                    reservations@isiololandmarkhotel.co.ke
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">Follow us on social media</p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="#" className="text-primary hover:underline">@LandmarkHotelIsiolo</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline">@SamburuElephantLodge</a>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                size="lg" 
                variant="hero"
                asChild
              >
                <a href="/reservation">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreSamburu;
