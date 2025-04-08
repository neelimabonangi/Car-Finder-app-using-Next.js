'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { FilterState } from '@/app/types';

interface CarFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  brands: string[];
}

export function CarFilters({ onFilterChange, brands }: CarFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    minPrice: 0,
    maxPrice: 100000,
    fuelType: '',
    seatingCapacity: 0,
    sortBy: '',
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div className="space-y-2">
        <Label>Brand</Label>
        <Select
          value={filters.brand}
          onValueChange={(value) => setFilters({ ...filters, brand: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Price Range</Label>
        <div className="pt-2">
          <Slider
            defaultValue={[filters.minPrice, filters.maxPrice]}
            max={100000}
            step={1000}
            onValueChange={([min, max]) =>
              setFilters({ ...filters, minPrice: min, maxPrice: max })
            }
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>${filters.minPrice.toLocaleString()}</span>
            <span>${filters.maxPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Fuel Type</Label>
        <Select
          value={filters.fuelType}
          onValueChange={(value) => setFilters({ ...filters, fuelType: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select fuel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Petrol">Petrol</SelectItem>
            <SelectItem value="Diesel">Diesel</SelectItem>
            <SelectItem value="Electric">Electric</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Seating Capacity</Label>
        <Select
          value={filters.seatingCapacity.toString()}
          onValueChange={(value) =>
            setFilters({ ...filters, seatingCapacity: parseInt(value) })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select seating capacity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any</SelectItem>
            <SelectItem value="2">2 Seats</SelectItem>
            <SelectItem value="4">4 Seats</SelectItem>
            <SelectItem value="5">5 Seats</SelectItem>
            <SelectItem value="7">7 Seats</SelectItem>
            <SelectItem value="8">8+ Seats</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select
          value={filters.sortBy}
          onValueChange={(value: 'price-asc' | 'price-desc' | '') =>
            setFilters({ ...filters, sortBy: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}