import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import heroImage from "@/assets/hero-home.jpg";

const Reservation = () => {
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
