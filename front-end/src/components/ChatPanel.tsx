import { useState, useRef, useEffect } from 'react'
import { sendMessage } from '../services/bedrock'
import { detectCarInMessage } from '../services/carsApi'
import { useCars } from '../context/CarContext'
import './ChatPanel.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Props {
  open: boolean
  onClose: () => void
}

const WELCOME: Message = {
  role: 'assistant',
  content: '¡Hola! Soy tu asesor de Volkswagen Financial Services. Puedo ayudarte a encontrar el auto ideal, cotizar un seguro o resolver cualquier duda sobre financiamiento. ¿En qué te puedo ayudar hoy?'
}

export default function ChatPanel({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => `sess-${Date.now()}-${Math.random().toString(36).slice(2)}`)
  const bottomRef = useRef<HTMLDivElement>(null)
  const { cars, setHighlightedCar } = useCars()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const reply = await sendMessage(text, sessionId)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])

      // Detect if the agent mentioned a specific car and highlight it
      const matched = detectCarInMessage(reply, cars)
      if (matched) setHighlightedCar(matched)
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, hubo un problema al conectar con el asistente. Por favor intenta de nuevo.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  return (
    <aside className={`chat-panel${open ? ' open' : ''}`}>
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-avatar">VW</div>
          <div>
            <div className="chat-title">Asesor VW Financial</div>
            <div className="chat-status"><div className="status-dot" />En línea</div>
          </div>
        </div>
        <button className="chat-close" onClick={onClose} aria-label="Cerrar chat">✕</button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role}`}>
            {m.role === 'assistant' && <div className="bubble-avatar">VW</div>}
            <div className="bubble-text">{m.content}</div>
          </div>
        ))}
        {loading && (
          <div className="chat-bubble assistant">
            <div className="bubble-avatar">VW</div>
            <div className="bubble-text typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <textarea
          className="chat-input"
          placeholder="Escribe tu pregunta..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          rows={1}
          disabled={loading}
        />
        <button
          className="chat-send"
          onClick={handleSend}
          disabled={!input.trim() || loading}
          aria-label="Enviar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      <div className="chat-footer-note">
        Powered by AWS Bedrock · Respuestas pueden variar
      </div>
    </aside>
  )
}
