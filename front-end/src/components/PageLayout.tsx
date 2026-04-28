import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ChatPanel from './ChatPanel'
import ChatFab from './ChatFab'

interface Props { children: React.ReactNode }

export default function PageLayout({ children }: Props) {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="app-shell">
      <div className="main-content">
        <Nav />
        {children}
        <Footer />
      </div>
      {!chatOpen && <ChatFab onClick={() => setChatOpen(true)} />}
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}
