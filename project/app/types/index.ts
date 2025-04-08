export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  seatingCapacity: number;
  mileage: number;
  transmission: 'Manual' | 'Automatic';
  image: string;
  description: string;
}

export interface FilterState {
  brand: string;
  minPrice: number;
  maxPrice: number;
  fuelType: string;
  seatingCapacity: number;
  sortBy: 'price-asc' | 'price-desc' | '';
}