import { Background } from './components/Background'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoBar } from './components/LogoBar'
import { Stats } from './components/Stats'
import { CashSection } from './components/CashSection'
import { PicoFeature } from './components/PicoFeature'
import { PicoShowcase } from './components/PicoShowcase'
import { Cases } from './components/Cases'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Manifesto } from './components/Manifesto'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { WhyAesthetics } from './components/WhyAesthetics'
import { CommissionModel } from './components/CommissionModel'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { ChatWidget } from './components/ChatWidget'

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main id="conteudo" className="relative z-10">
        <Hero />
        <LogoBar />
        <Stats />
        <CashSection />
        <PicoFeature />
        <PicoShowcase />
        <Cases />
        <Process />
        <Services />
        <Manifesto />
        <Team />
        <Testimonials />
        <WhyAesthetics />
        <CommissionModel />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
      {/* Fixed bottom blur */}
      <div className="bottom-blur" />
    </>
  )
}
