import { useState } from 'react'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoBar } from './components/LogoBar'
import { Stats } from './components/Stats'
import { CashSection } from './components/CashSection'
import { Services } from './components/Services'
import { PicoFeature } from './components/PicoFeature'
import { PicoShowcase } from './components/PicoShowcase'
import { Cases } from './components/Cases'
import { Process } from './components/Process'
import { Manifesto } from './components/Manifesto'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { WhyAesthetics } from './components/WhyAesthetics'
import { CommissionModel } from './components/CommissionModel'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { ChatWidget } from './components/ChatWidget'
import { ContactModal } from './components/ContactModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Background />
      <Header onCtaClick={() => setModalOpen(true)} />
      <main id="conteudo" className="relative z-10">
        <Hero />
        <LogoBar />
        <Stats />
        <CashSection />
        <Services />
        <PicoFeature />
        <PicoShowcase />
        <Cases />
        <Process />
        <Manifesto />
        <Team />
        <Testimonials />
        <WhyAesthetics />
        <CommissionModel />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Fixed bottom blur */}
      <div className="bottom-blur" />
    </>
  )
}
