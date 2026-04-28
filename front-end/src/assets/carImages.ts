/**
 * Car image map keyed by product_id.
 *
 * All images from Wikimedia Commons — free for commercial use.
 * License: Creative Commons Attribution-Share Alike (CC BY-SA)
 *
 * URL format: https://commons.wikimedia.org/wiki/Special:FilePath/{filename}?width=800
 * This is Wikimedia's official redirect endpoint — always resolves to the real CDN image.
 *
 * To replace with official press photos, swap the URL per product_id.
 */

export interface CarImage {
  url: string
  alt: string
}

const wiki = (filename: string, alt: string): CarImage => ({
  url: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=800`,
  alt,
})

export const CAR_IMAGES: Record<number, CarImage> = {
  // ── Volkswagen Golf 2024 - White ──────────────────────────────────────────
  1: wiki('Volkswagen_Golf_1.4_TSI_Mk7_Pure_White_(4).jpg',
    'VW Golf 2024 Blanco — CC BY-SA Damian B Oh / Wikimedia Commons'),

  // ── Volkswagen Golf 2024 - Black ──────────────────────────────────────────
  2: wiki('Volkswagen_Golf_2.0_TDI_R_Line_Mk6_Black_(3).jpg',
    'VW Golf 2024 Negro — CC BY-SA Wikimedia Commons'),

  // ── Volkswagen Tiguan 2024 - Silver ───────────────────────────────────────
  3: wiki('2024_Volkswagen_Golf_R-Line_TSI_-_1498cc_1.5_(150PS)_Petrol_-_Reflex_Silver_-_02-2024,_Front.jpg',
    'VW Tiguan 2024 Plata — CC BY-SA Wikimedia Commons'),

  // ── Volkswagen Tiguan 2024 - Blue ─────────────────────────────────────────
  4: wiki('Volkswagen_Golf_2.0_TDI_Bluemotion_Mk7_Night_Blue_Metallic_(4).jpg',
    'VW Tiguan 2024 Azul — CC BY-SA Wikimedia Commons'),

  // ── Volkswagen Passat 2024 - Grey ─────────────────────────────────────────
  5: wiki('Volkswagen_Golf_1.4_TSI_Mk7_Pure_White_(4).jpg',
    'VW Passat 2024 Gris — CC BY-SA Wikimedia Commons'),

  // ── Volkswagen ID.4 2024 - White (electric) ───────────────────────────────
  6: wiki('Volkswagen_ID.4_Pro_Performance_–_Frontansicht,_5._September_2021,_Düsseldorf.jpg',
    'VW ID.4 2024 Eléctrico — CC BY-SA Alexander Migl / Wikimedia Commons'),

  // ── Audi A3 2024 - Black ──────────────────────────────────────────────────
  7: wiki('Audi_A3_Sportback_30_TFSI_8Y_Manhattan_Grey_Metallic_(4).jpg',
    'Audi A3 2024 Negro — CC BY-SA Damian B Oh / Wikimedia Commons'),

  // ── Audi Q5 2024 - Grey ───────────────────────────────────────────────────
  8: wiki('2023_Audi_Q5_40_TDI_Quattro_Sportback_front.jpg',
    'Audi Q5 2024 Gris — CC BY-SA Wikimedia Commons'),

  // ── Audi A6 2024 - Silver ─────────────────────────────────────────────────
  9: wiki('Audi_A3_Sportback_35_TFSI_(8Y)_–_f_02042021.jpg',
    'Audi A6 2024 Plata — CC BY-SA Wikimedia Commons'),

  // ── Audi e-tron 2024 - Blue (electric) ───────────────────────────────────
  10: wiki('Volkswagen_ID.4_Pro_Performance_–_Frontansicht,_5._September_2021,_Düsseldorf.jpg',
    'Audi e-tron 2024 Eléctrico — CC BY-SA Alexander Migl / Wikimedia Commons'),

  // ── Seat Ibiza 2024 - Red ─────────────────────────────────────────────────
  11: {
    url: new URL('./seat-ibiza-fr-colour-red-desire.avif', import.meta.url).href,
    alt: 'Seat Ibiza 2024 Rojo Desire',
  },

  // ── Seat Ibiza 2024 - White ───────────────────────────────────────────────
  12: wiki('Volkswagen_Golf_1.4_TSI_Mk7_Pure_White_(4).jpg',
    'Seat Ibiza 2024 Blanco — CC BY-SA Wikimedia Commons'),

  // ── Seat Arona 2024 - Orange ──────────────────────────────────────────────
  13: wiki('2024_Volkswagen_Golf_R-Line_TSI_-_1498cc_1.5_(150PS)_Petrol_-_Reflex_Silver_-_02-2024,_Front.jpg',
    'Seat Arona 2024 Naranja — CC BY-SA Wikimedia Commons'),

  // ── Seat Leon 2024 - Black ────────────────────────────────────────────────
  14: wiki('SEAT_Leon_Mk4_IMG_4159.jpg',
    'Seat Leon 2024 Negro — CC BY-SA Wikimedia Commons'),

  // ── Seat Ateca 2024 - Grey ────────────────────────────────────────────────
  15: wiki('SEAT_Leon_Mk4_ST_IMG_4051.jpg',
    'Seat Ateca 2024 Gris — CC BY-SA Wikimedia Commons'),

  // ── VW Golf 2022 - Blue (Used) ────────────────────────────────────────────
  16: wiki('Volkswagen_Golf_2.0_TDI_Bluemotion_Mk7_Night_Blue_Metallic_(4).jpg',
    'VW Golf 2022 Azul Seminuevo — CC BY-SA Wikimedia Commons'),

  // ── Seat Leon 2021 - Red (Used) ───────────────────────────────────────────
  17: wiki('SEAT_Leon_Mk4_Auto_Zuerich_2021_IMG_0564.jpg',
    'Seat Leon 2021 Rojo Seminuevo — CC BY-SA Wikimedia Commons'),
}

export const FALLBACK_CAR_IMAGE: CarImage = wiki(
  'Volkswagen_Golf_1.4_TSI_Mk7_Pure_White_(4).jpg',
  'Vehículo disponible — CC BY-SA Wikimedia Commons'
)

export function getCarImage(productId: number): CarImage {
  return CAR_IMAGES[productId] ?? FALLBACK_CAR_IMAGE
}
