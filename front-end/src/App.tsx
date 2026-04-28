import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import VentaSection from './components/VentaSection'
import SegurosSection from './components/SegurosSection'
import PostventaSection from './components/PostventaSection'
import Footer from './components/Footer'
import ChatPanel from './components/ChatPanel'
import ChatFab from './components/ChatFab'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="app-shell">
      <div className="main-content">
        <Nav />
        <Hero />
        <VentaSection />
        <SegurosSection />
        <PostventaSection />
        <Footer />
      </div>

      {/* Floating button to open chat */}
      {!chatOpen && <ChatFab onClick={() => setChatOpen(true)} />}

      {/* Chat sidebar */}
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}
