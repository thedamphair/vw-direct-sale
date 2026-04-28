import { useState, useRef, useEffect } from 'react'
import { sendMessage } from '../services/bedrock'
import './InlineAgent.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Props {
  /** Welcome message shown when the agent loads */
  welcomeMessage?: string
  /** Placeholder text for the input */
  placeholder?: string
  /** Quick-action suggestion chips */
  suggestions?: string[]
}

const DEFAULT_WELCOME = '¡Hola! Soy tu asesor de seguros. Puedo ayudarte a elegir el plan ideal para tu vehículo, comparar coberturas o resolver cualquier duda. ¿En qué te puedo ayudar?'

const DEFAULT_SUGGESTIONS = [
  '¿Qué plan me recomiendas?',
  'Quiero cotizar un seguro',
  '¿Cubren vehículos eléctricos?',
  'Comparar coberturas',
]

export default function InlineAgent({
  welcomeMessage = DEFAULT_WELCOME,
  placeholder = 'Pregunta sobre seguros, coberturas, precios...',
  suggestions = DEFAULT_SUGGESTIONS,
}: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: welcomeMessage },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => `ins-${Date.now()}-${Math.random().toString(36).slice(2)}`)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setShowSuggestions(false)
    setMessages(prev => [...prev, { role: 'user', content: trimmed }])
    setInput('')
    setLoading(true)

    try {
      const reply = await sendMessage(trimmed, sessionId)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Lo siento, hubo un problema al conectar con el asistente. Por favor intenta de nuevo.' },
      ])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="inline-agent">
      {/* Header */}
      <div className="ia-header">
        <div className="ia-header-left">
          <div className="ia-avatar">VW</div>
          <div>
            <div className="ia-title">Asesor de Seguros</div>
            <div className="ia-status"><div className="ia-status-dot" />En línea · Responde al instante</div>
          </div>
        </div>
        <div className="ia-badge">IA</div>
      </div>

      {/* Messages */}
      <div className="ia-messages">
        {messages.map((m, i) => (
          <div key={i} className={`ia-bubble ${m.role}`}>
            {m.role === 'assistant' && <div className="ia-bubble-avatar">VW</div>}
            <div className="ia-bubble-text">{m.content}</div>
          </div>
        ))}

        {loading && (
          <div className="ia-bubble assistant">
            <div className="ia-bubble-avatar">VW</div>
            <div className="ia-bubble-text ia-typing">
              <span /><span /><span />
            </div>
          </div>
        )}

        {/* Suggestion chips — only shown at the start */}
        {showSuggestions && !loading && (
          <div className="ia-suggestions">
            {suggestions.map(s => (
              <button key={s} className="ia-chip" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="ia-input-area">
        <textarea
          ref={inputRef}
          className="ia-input"
          placeholder={placeholder}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          rows={1}
          disabled={loading}
        />
        <button
          className="ia-send"
          onClick={() => send(input)}
          disabled={!input.trim() || loading}
          aria-label="Enviar mensaje"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      <div className="ia-footer">
        Powered by AWS Bedrock · Respuestas pueden variar
      </div>
    </div>
  )
}
