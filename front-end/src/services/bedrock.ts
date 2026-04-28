/**
 * Bedrock Agent service
 *
 * TODO (backend team): replace the stub below with a real call to your
 * API Gateway endpoint that proxies to the Bedrock Agent Runtime.
 *
 * Expected endpoint:
 *   POST /chat
 *   Body:  { message: string, sessionId: string }
 *   Reply: { response: string }
 *
 * Required env variable (set in .env):
 *   VITE_CHAT_API_URL=https://your-api-gateway-url/chat
 */

const API_URL = import.meta.env.VITE_CHAT_API_URL as string | undefined

export async function sendMessage(message: string, sessionId: string): Promise<string> {
  if (API_URL) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sessionId }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return data.response as string
  }

  // ── Stub: used when VITE_CHAT_API_URL is not set ─────────────────────────
  await new Promise(r => setTimeout(r, 1200))

  const lower = message.toLowerCase()
  if (lower.includes('tiguan') || lower.includes('suv'))
    return 'El Tiguan Allspace es nuestra SUV más popular. Tiene capacidad para 7 pasajeros, motor 2.0T de 220hp y transmisión DSG. Su precio es $689,900 MXN con mensualidades desde $8,200. ¿Te gustaría cotizar un financiamiento?'
  if (lower.includes('eléctric') || lower.includes('id.4'))
    return 'El ID.4 Pro es nuestro modelo eléctrico estrella. Precio $841,000 MXN, autonomía de 520 km y aplica el descuento ELECTRIC10000 de $10,000 MXN. Además tenemos el Seguro Eléctrico+ especialmente diseñado para él. ¿Te interesa?'
  if (lower.includes('seguro') || lower.includes('cobertura'))
    return 'Tenemos tres planes de seguro:\n• Plan Esencial: $620/mes — RC básica\n• Cobertura Amplia Premium: $1,890/mes — sin deducible\n• Seguro Eléctrico+: $1,340/mes — para eléctricos e híbridos\n\nAl comprar tu auto con nosotros obtienes 20% de descuento. ¿Cuál te interesa?'
  if (lower.includes('financiamiento') || lower.includes('mensualidad') || lower.includes('enganche'))
    return 'Ofrecemos financiamiento desde el 10% de enganche, tasas desde 7.9% anual y hasta 84 meses. También trabajamos con Santander y CaixaBank para opciones externas. ¿Quieres que calcule tu mensualidad para algún modelo?'
  if (lower.includes('hola') || lower.includes('buenos') || lower.includes('buenas'))
    return '¡Hola! Bienvenido a AutoFinance. Puedo ayudarte con información sobre nuestros vehículos Volkswagen, Audi y Seat, seguros, financiamiento y servicios postventa. ¿Por dónde empezamos?'

  return 'Entendido. Déjame conectarte con la información más relevante. ¿Estás buscando un vehículo nuevo, cotizar un seguro o tienes alguna pregunta sobre tu crédito actual?'
}
