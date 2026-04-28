/**
 * Car image map keyed by product_id.
 *
 * Uses source.unsplash.com — Unsplash's official free keyword CDN.
 * No API key required. Free for commercial use under the Unsplash License.
 * https://unsplash.com/license
 *
 * Format: https://source.unsplash.com/featured/{width}x{height}/?{keywords}
 * Each URL returns a relevant photo matched to the keywords.
 *
 * To replace with official press photos, swap the URL per product_id.
 */

export interface CarImage {
  url: string
  alt: string
}

export const CAR_IMAGES: Record<number, CarImage> = {
  // ── Volkswagen ────────────────────────────────────────────────────────────
  1:  { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,golf,white,hatchback',   alt: 'VW Golf 2024 Blanco' },
  2:  { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,golf,black,hatchback',   alt: 'VW Golf 2024 Negro' },
  3:  { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,tiguan,silver,suv',      alt: 'VW Tiguan 2024 Plata' },
  4:  { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,tiguan,blue,suv',        alt: 'VW Tiguan 2024 Azul' },
  5:  { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,passat,grey,sedan',      alt: 'VW Passat 2024 Gris' },
  6:  { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,electric,suv,white',     alt: 'VW ID.4 2024 Blanco Eléctrico' },
  // ── Audi ──────────────────────────────────────────────────────────────────
  7:  { url: 'https://source.unsplash.com/featured/800x500/?audi,a3,black,hatchback',           alt: 'Audi A3 2024 Negro' },
  8:  { url: 'https://source.unsplash.com/featured/800x500/?audi,q5,grey,suv',                  alt: 'Audi Q5 2024 Gris' },
  9:  { url: 'https://source.unsplash.com/featured/800x500/?audi,a6,silver,sedan',              alt: 'Audi A6 2024 Plata' },
  10: { url: 'https://source.unsplash.com/featured/800x500/?audi,electric,suv,blue',            alt: 'Audi e-tron 2024 Azul Eléctrico' },
  // ── Seat ──────────────────────────────────────────────────────────────────
  11: { url: 'https://source.unsplash.com/featured/800x500/?seat,ibiza,red,hatchback',          alt: 'Seat Ibiza 2024 Rojo' },
  12: { url: 'https://source.unsplash.com/featured/800x500/?seat,ibiza,white,hatchback',        alt: 'Seat Ibiza 2024 Blanco' },
  13: { url: 'https://source.unsplash.com/featured/800x500/?seat,arona,orange,crossover',       alt: 'Seat Arona 2024 Naranja' },
  14: { url: 'https://source.unsplash.com/featured/800x500/?seat,leon,black,hatchback',         alt: 'Seat Leon 2024 Negro' },
  15: { url: 'https://source.unsplash.com/featured/800x500/?seat,ateca,grey,suv',               alt: 'Seat Ateca 2024 Gris' },
  // ── Seminuevos ────────────────────────────────────────────────────────────
  16: { url: 'https://source.unsplash.com/featured/800x500/?volkswagen,golf,blue,used',         alt: 'VW Golf 2022 Azul Seminuevo' },
  17: { url: 'https://source.unsplash.com/featured/800x500/?seat,leon,red,used,car',            alt: 'Seat Leon 2021 Rojo Seminuevo' },
}

export const FALLBACK_CAR_IMAGE: CarImage = {
  url: 'https://source.unsplash.com/featured/800x500/?car,automobile,vehicle',
  alt: 'Vehículo disponible',
}

export function getCarImage(productId: number): CarImage {
  return CAR_IMAGES[productId] ?? FALLBACK_CAR_IMAGE
}
