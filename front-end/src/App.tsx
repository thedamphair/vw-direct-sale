import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import VentaSection from './components/VentaSection'
import SegurosSection from './components/SegurosSection'
import PostventaSection from './components/PostventaSection'
import Footer from './components/Footer'
import ChatPanel from './components/ChatPanel'
import ChatFab from './components/ChatFab'
import CarPage from './pages/CarPage'
import InsurancePage from './pages/InsurancePage'
import AfterSalesPage from './pages/AfterSalesPage'

function Layout() {
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
      {!chatOpen && <ChatFab onClick={() => setChatOpen(true)} />}
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/car" element={<CarPage />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/after-sales" element={<AfterSalesPage />} />
    </Routes>
  )
}
