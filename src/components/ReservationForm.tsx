import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const rooms = [
    {
      value: "standard",
      label: "Standard Room",
      description: "Single: B&B KES 5,000 | Half Board KES 7,000 | Full Board KES 8,500"
    },
    {
      value: "deluxe",
      label: "Deluxe Room",
      description: "Single: B&B KES 6,500 | HB KES 8,000 | FB KES 10,000 • Double: B&B KES 8,000 | HB KES 9,500 | FB KES 11,000"
    },
    {
      value: "superior",
      label: "Superior Deluxe",
      description: "Single: B&B KES 7,500 | HB KES 9,000 | FB KES 10,500 • Double: B&B KES 9,000 | HB KES 10,500 | FB KES 12,000"
    },
    {
      value: "executive",
      label: "Executive Suite",
      description: "Single: B&B KES 8,500 | HB KES 10,000 | FB KES 11,500 • Double: B&B KES 10,000 | HB KES 13,000 | FB KES 16,000"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mdkpqand", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Reservation Request Sent!",
          description: "We'll contact you shortly to confirm your booking.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reservation request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Reserve Your Room</CardTitle>
        <CardDescription>
          Fill out the form below and we'll contact you to confirm your reservation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests *</Label>
              <Input id="guests" name="guests" type="number" min="1" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkin">Check-in Date *</Label>
              <Input id="checkin" name="checkin" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkout">Check-out Date *</Label>
              <Input id="checkout" name="checkout" type="date" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="room">Select Room Type *</Label>
            <Select name="room" required>
              <SelectTrigger>
                <SelectValue placeholder="Choose your room" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((room) => (
                  <SelectItem key={room.value} value={room.value}>
                    <div>
                      <div className="font-medium">{room.label}</div>
                      <div className="text-xs text-muted-foreground">{room.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Requests (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any special requirements or requests..."
              rows={4}
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Reservation Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;
