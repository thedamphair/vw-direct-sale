export interface Car {
  product_id: number
  category: string
  name: string
  brand: string
  model: string
  year: number
  body_type: string
  fuel_type: string
  color: string
  mileage: number
  condition: 'new' | 'used'
  currency: string
  unit_price: number
  vin: string
  inventory_status: 'available' | 'sold' | 'unavailable'
  description: string
}
