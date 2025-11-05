import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Offers from "./pages/Offers";
import Accommodation from "./pages/Accommodation";
import Dining from "./pages/Dining";
import Experiences from "./pages/Experiences";
import Festive from "./pages/Festive";
import Events from "./pages/Events";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/festive" element={<Festive />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reservation" element={<Reservation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
