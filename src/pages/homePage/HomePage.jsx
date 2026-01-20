import React from 'react'
import Navbar from '../../components/NAV/Navbar.jsx'
import CircularFlow from './components/CircularFlow.jsx'

function HomePage() {
  return (
    <div className="h-screen bg-[#1a1a1a] text-white transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* Single-screen onboarding (no scroll) */}
      <main className="pt-24 h-[calc(100vh-6rem)] relative overflow-hidden">
        {/* Subtle background pattern (existing palette) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-amber-950/10 pointer-events-none"></div>

        <div className="relative z-10 h-full">
          <CircularFlow />
        </div>
      </main>
    </div>
  )
}

export default HomePage


