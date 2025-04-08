'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Car } from '@/app/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface CarGridProps {
  cars: Car[];
  currentPage: number;
  itemsPerPage: number;
}

export function CarGrid({ cars, currentPage, itemsPerPage }: CarGridProps) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('carWishlist');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const { toast } = useToast();

  const toggleWishlist = (carId: string) => {
    const newWishlist = wishlist.includes(carId)
      ? wishlist.filter((id) => id !== carId)
      : [...wishlist, carId];

    setWishlist(newWishlist);
    localStorage.setItem('carWishlist', JSON.stringify(newWishlist));

    toast({
      title: wishlist.includes(carId)
        ? 'Removed from wishlist'
        : 'Added to wishlist',
      description: 'Your wishlist has been updated.',
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCars = cars.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedCars.map((car) => (
        <Card key={car.id} className="group hover:shadow-lg transition-shadow">
          <CardHeader className="relative p-0">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black"
              onClick={() => toggleWishlist(car.id)}
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlist.includes(car.id)
                    ? 'fill-red-500 stroke-red-500'
                    : 'stroke-gray-500'
                }`}
              />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <CardTitle className="text-xl">
                  {car.brand} {car.model}
                </CardTitle>
                <CardDescription>{car.year}</CardDescription>
              </div>
              <Badge variant="secondary">{car.fuelType}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Seats:</span>
                <span>{car.seatingCapacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Transmission:</span>
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Mileage:</span>
                <span>
                  {car.mileage}
                  {car.fuelType === 'Electric' ? ' mi range' : ' mpg'}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <span className="text-2xl font-bold">
              ${car.price.toLocaleString()}
            </span>
            <Button variant="default">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}