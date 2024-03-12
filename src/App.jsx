import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import AchievementsSection from './components/AchievementsSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import './index.css'

function App() {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />        
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
        </main>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
