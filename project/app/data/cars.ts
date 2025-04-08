export const carsData = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 35000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    mileage: 28,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
    description: 'The Toyota Camry Hybrid combines comfort, efficiency, and reliability in a stylish package.'
  },
  {
    id: '2',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 45000,
    fuelType: 'Electric',
    seatingCapacity: 5,
    mileage: 0,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
    description: 'The Tesla Model 3 offers cutting-edge technology and impressive range in a sleek design.'
  },
  // Add more cars here...
] as const;