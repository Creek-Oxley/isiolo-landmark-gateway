import { Button } from "./ui/button";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  height?: string;
}

const Hero = ({ image, title, subtitle, showCTA = false, height = "h-screen" }: HeroProps) => {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" /> */}

      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6 h-auto" asChild>
              <a href="https://bookings.isiololandmarkhotel.co.ke" target="_blank" rel="noopener noreferrer">
                BOOK YOUR STAY
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a href="/accommodation">
                EXPLORE ROOMS
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showCTA && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Hero;
