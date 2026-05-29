import './App.css'

import Header from './layout/header'
import ChoosePlanSection from './pages/ChoosePlanSection'
import CTASection from './pages/CTASection'
import FeaturesSection from './pages/FeaturesSection'
import HeroSection from './pages/HeroSection'
import TestimonialsSection from './pages/TestimonialsSection'
import VpnMapSection from './pages/VpnMapSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ChoosePlanSection />
      <VpnMapSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default App
