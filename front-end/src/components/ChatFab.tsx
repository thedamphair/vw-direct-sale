import './ChatFab.css'

interface Props { onClick: () => void }

export default function ChatFab({ onClick }: Props) {
  return (
    <button className="chat-fab" onClick={onClick} aria-label="Abrir asistente">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span>Asesor IA</span>
      <div className="fab-dot" />
    </button>
  )
}
