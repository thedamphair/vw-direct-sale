/**
 * Cars API service
 *
 * Fetches vehicle inventory from the API Gateway endpoint.
 *
 * Required env variable (set in .env):
 *   VITE_CARS_API_URL=https://your-api-gateway-url/cars
 *
 * Expected response shape matches knowledge-base/products.json
 * (array of Car objects, category === 'Car')
 */

import type { Car } from '../types/car'

const API_URL = import.meta.env.VITE_CARS_API_URL as string | undefined

// ── Fallback data from knowledge-base/products.json (cars only) ──────────────
// Used while the API is not yet available
const FALLBACK_CARS: Car[] = [
  { product_id: 1,  category: 'Car', name: 'VW Golf 2024 - White',       brand: 'Volkswagen', model: 'Golf',   year: 2024, body_type: 'hatchback', fuel_type: 'petrol',   color: 'Pearl White',    mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 489900,  vin: 'WVWZZZ1KZAW000001', inventory_status: 'available', description: 'Golf hatchback petrol, pearl white' },
  { product_id: 2,  category: 'Car', name: 'VW Golf 2024 - Black',       brand: 'Volkswagen', model: 'Golf',   year: 2024, body_type: 'hatchback', fuel_type: 'petrol',   color: 'Deep Black',     mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 489900,  vin: 'WVWZZZ1KZAW000002', inventory_status: 'available', description: 'Golf hatchback petrol, deep black' },
  { product_id: 3,  category: 'Car', name: 'VW Tiguan 2024 - Silver',    brand: 'Volkswagen', model: 'Tiguan', year: 2024, body_type: 'suv',       fuel_type: 'diesel',   color: 'Reflex Silver',  mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 689900,  vin: 'WVWZZZ5NZAW000003', inventory_status: 'available', description: 'Tiguan SUV diesel, reflex silver' },
  { product_id: 4,  category: 'Car', name: 'VW Tiguan 2024 - Blue',      brand: 'Volkswagen', model: 'Tiguan', year: 2024, body_type: 'suv',       fuel_type: 'diesel',   color: 'Atlantic Blue',  mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 689900,  vin: 'WVWZZZ5NZAW000004', inventory_status: 'available', description: 'Tiguan SUV diesel, atlantic blue' },
  { product_id: 5,  category: 'Car', name: 'VW Passat 2024 - Grey',      brand: 'Volkswagen', model: 'Passat', year: 2024, body_type: 'sedan',     fuel_type: 'hybrid',   color: 'Moonstone Grey', mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 779900,  vin: 'WVWZZZ3CZAW000005', inventory_status: 'sold',      description: 'Passat hybrid sedan, moonstone grey' },
  { product_id: 6,  category: 'Car', name: 'VW ID.4 2024 - White',       brand: 'Volkswagen', model: 'ID.4',   year: 2024, body_type: 'suv',       fuel_type: 'electric', color: 'Glacier White',  mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 899900,  vin: 'WVWZZZ1EZAW000006', inventory_status: 'available', description: 'ID.4 electric SUV, glacier white' },
  { product_id: 7,  category: 'Car', name: 'Audi A3 2024 - Black',       brand: 'Audi',       model: 'A3',     year: 2024, body_type: 'hatchback', fuel_type: 'petrol',   color: 'Mythos Black',   mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 629900,  vin: 'WAUZZZ8V5NA000007', inventory_status: 'available', description: 'A3 hatchback petrol, mythos black' },
  { product_id: 8,  category: 'Car', name: 'Audi Q5 2024 - Grey',        brand: 'Audi',       model: 'Q5',     year: 2024, body_type: 'suv',       fuel_type: 'diesel',   color: 'Daytona Grey',   mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 1049900, vin: 'WAUZZZ8R5NA000008', inventory_status: 'available', description: 'Q5 SUV diesel quattro, daytona grey' },
  { product_id: 9,  category: 'Car', name: 'Audi A6 2024 - Silver',      brand: 'Audi',       model: 'A6',     year: 2024, body_type: 'sedan',     fuel_type: 'hybrid',   color: 'Floret Silver',  mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 1249900, vin: 'WAUZZZ4G5NA000009', inventory_status: 'available', description: 'A6 hybrid sedan, floret silver' },
  { product_id: 10, category: 'Car', name: 'Audi e-tron 2024 - Blue',    brand: 'Audi',       model: 'e-tron', year: 2024, body_type: 'suv',       fuel_type: 'electric', color: 'Plasma Blue',    mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 1499900, vin: 'WAUZZZ4G5NA000010', inventory_status: 'sold',      description: 'e-tron electric SUV, plasma blue' },
  { product_id: 11, category: 'Car', name: 'Seat Ibiza 2024 - Red',      brand: 'Seat',       model: 'Ibiza',  year: 2024, body_type: 'hatchback', fuel_type: 'petrol',   color: 'Desire Red',     mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 349900,  vin: 'VSSZZZ6JZNA000011', inventory_status: 'available', description: 'Ibiza hatchback petrol, desire red' },
  { product_id: 12, category: 'Car', name: 'Seat Ibiza 2024 - White',    brand: 'Seat',       model: 'Ibiza',  year: 2024, body_type: 'hatchback', fuel_type: 'petrol',   color: 'Nevada White',   mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 349900,  vin: 'VSSZZZ6JZNA000012', inventory_status: 'available', description: 'Ibiza hatchback petrol, nevada white' },
  { product_id: 13, category: 'Car', name: 'Seat Arona 2024 - Orange',   brand: 'Seat',       model: 'Arona',  year: 2024, body_type: 'suv',       fuel_type: 'petrol',   color: 'Lava Orange',    mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 429900,  vin: 'VSSZZZ6JZNA000013', inventory_status: 'sold',      description: 'Arona crossover petrol, lava orange' },
  { product_id: 14, category: 'Car', name: 'Seat Leon 2024 - Black',     brand: 'Seat',       model: 'Leon',   year: 2024, body_type: 'hatchback', fuel_type: 'diesel',   color: 'Midnight Black', mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 479900,  vin: 'VSSZZZ5FZNA000014', inventory_status: 'available', description: 'Leon hatchback diesel, midnight black' },
  { product_id: 15, category: 'Car', name: 'Seat Ateca 2024 - Grey',     brand: 'Seat',       model: 'Ateca',  year: 2024, body_type: 'suv',       fuel_type: 'hybrid',   color: 'Urban Silver',   mileage: 0,     condition: 'new',  currency: 'MXN', unit_price: 589900,  vin: 'VSSZZZ5FZNA000015', inventory_status: 'available', description: 'Ateca SUV hybrid, urban silver' },
  { product_id: 16, category: 'Car', name: 'VW Golf 2022 - Blue (Used)', brand: 'Volkswagen', model: 'Golf',   year: 2022, body_type: 'hatchback', fuel_type: 'petrol',   color: 'Indium Blue',    mileage: 28000, condition: 'used', currency: 'MXN', unit_price: 319900,  vin: 'WVWZZZ1KZAW099001', inventory_status: 'available', description: 'Pre-owned Golf, 28000km, excellent condition' },
  { product_id: 17, category: 'Car', name: 'Seat Leon 2021 - Red (Used)',brand: 'Seat',       model: 'Leon',   year: 2021, body_type: 'hatchback', fuel_type: 'diesel',   color: 'Racing Red',     mileage: 45000, condition: 'used', currency: 'MXN', unit_price: 269900,  vin: 'VSSZZZ5FZNA099002', inventory_status: 'available', description: 'Pre-owned Leon, 45000km, good condition' },
]

export async function fetchCars(): Promise<Car[]> {
  // ── Real API (uncomment when endpoint is ready) ───────────────────────────
  // if (!API_URL) {
  //   console.warn('VITE_CARS_API_URL not set — using fallback data')
  //   return FALLBACK_CARS
  // }
  // const res = await fetch(`${API_URL}?category=Car`)
  // if (!res.ok) throw new Error(`Cars API error: ${res.status}`)
  // const data: Car[] = await res.json()
  // return data.filter(p => p.category === 'Car')

  // ── Stub ──────────────────────────────────────────────────────────────────
  await new Promise(r => setTimeout(r, 600))
  return FALLBACK_CARS
}

/**
 * Given an agent message, try to find a matching car in the catalog.
 * Matches on model name, brand, or VIN mentioned in the text.
 */
export function detectCarInMessage(message: string, cars: Car[]): Car | null {
  const lower = message.toLowerCase()
  // Sort longer names first to avoid partial matches (e.g. "Golf" before "Golf GTI")
  const sorted = [...cars].sort((a, b) => b.model.length - a.model.length)

  for (const car of sorted) {
    if (
      lower.includes(car.model.toLowerCase()) ||
      lower.includes(car.name.toLowerCase()) ||
      (car.vin && lower.includes(car.vin.toLowerCase()))
    ) {
      return car
    }
  }
  return null
}
