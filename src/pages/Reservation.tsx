import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import heroImage from "@/assets/hero-home.jpg";
import { setupPageSEO } from "@/utils/seo";

const Reservation = () => {
  useEffect(() => {
    setupPageSEO({
      path: "/reservation",
      title: "Book Your Stay - Isiolo Landmark Hotel Reservations",
      description: "Book your room at Isiolo Landmark Hotel. Easy online reservation system for Standard, Deluxe, Superior Deluxe rooms and Executive Suites.",
      keywords: "book Isiolo hotel, hotel reservation Kenya, Isiolo Landmark booking, room reservation Northern Kenya, hotel booking Isiolo"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        image={heroImage}
        title="Make a Reservation"
        subtitle="Book your perfect stay at Isiolo Landmark Hotel"
        height="h-[70vh]"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ReservationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;
