import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RoomCarouselProps {
  images: string[];
  roomType: string;
}

const RoomCarousel = ({ images, roomType }: RoomCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-0">
              <div className="h-64 bg-muted relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${roomType} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default RoomCarousel;
