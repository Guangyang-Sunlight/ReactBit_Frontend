import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LiquidEther from './LiquidEther';
import { ThemeProvider } from './theme/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import Chat from './pages/Chat'
import Prenumeration from './pages/Prenumeration'
import OmOss from './pages/OmOss'
import './assets/css/header.css'
import './assets/css/footer.css'

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-root">
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0}}>
            <LiquidEther
              colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/prenumeration" element={<Prenumeration />} />
            <Route path="/om-oss" element={<OmOss />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}


