'use client';

import { useState, useEffect } from 'react';
import { Car, FilterState } from './types';
import { carsData } from './data/cars';
import { CarFilters } from '@/components/car-filters';
import { CarGrid } from '@/components/car-grid';
import { Pagination } from '@/components/pagination';
import { ThemeToggle } from '@/components/theme-toggle';

const ITEMS_PER_PAGE = 9;

export default function Home() {
  const [cars, setCars] = useState<Car[]>(carsData as unknown as Car[]);
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const brands = Array.from(new Set(cars.map((car) => car.brand)));

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...cars];

    if (filters.brand) {
      filtered = filtered.filter((car) => car.brand === filters.brand);
    }

    filtered = filtered.filter(
      (car) =>
        car.price >= filters.minPrice && car.price <= filters.maxPrice
    );

    if (filters.fuelType) {
      filtered = filtered.filter((car) => car.fuelType === filters.fuelType);
    }

    if (filters.seatingCapacity > 0) {
      filtered = filtered.filter(
        (car) => car.seatingCapacity === filters.seatingCapacity
      );
    }

    if (filters.sortBy) {
      filtered.sort((a, b) => {
        if (filters.sortBy === 'price-asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Car Finder</h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside>
            <CarFilters onFilterChange={handleFilterChange} brands={brands} />
          </aside>

          <div className="lg:col-span-3 space-y-8">
            <CarGrid
              cars={filteredCars}
              currentPage={currentPage}
              itemsPerPage={ITEMS_PER_PAGE}
            />
            
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}