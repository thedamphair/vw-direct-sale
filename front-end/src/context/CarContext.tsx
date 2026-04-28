import { createContext, useContext, useEffect, useState } from 'react'
import type { Car } from '../types/car'
import { fetchCars } from '../services/carsApi'

interface CarContextValue {
  cars: Car[]
  loading: boolean
  error: string | null
  highlightedCar: Car | null
  setHighlightedCar: (car: Car | null) => void
}

const CarContext = createContext<CarContextValue | null>(null)

export function CarProvider({ children }: { children: React.ReactNode }) {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [highlightedCar, setHighlightedCar] = useState<Car | null>(null)

  useEffect(() => {
    fetchCars()
      .then(setCars)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <CarContext.Provider value={{ cars, loading, error, highlightedCar, setHighlightedCar }}>
      {children}
    </CarContext.Provider>
  )
}

export function useCars() {
  const ctx = useContext(CarContext)
  if (!ctx) throw new Error('useCars must be used inside <CarProvider>')
  return ctx
}
