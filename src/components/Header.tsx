import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, oklch(0.735 0.129 83), oklch(0.735 0.129 83 / 0.5))',
        }}
      />

      <div className="flex h-20 max-w-[1300px] mx-auto px-6 items-center justify-between relative">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img src="/assets/aika-logo.png" alt="AIKA Clinic" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 font-body">
          <a href="#sobre" className="hover:text-white transition-colors duration-200">A AIKA</a>
          <a href="#cases" className="hover:text-white transition-colors duration-200">Resultados</a>
          <a href="#servicos" className="hover:text-white transition-colors duration-200">Serviços</a>
          <a href="#contato" className="hover:text-white transition-colors duration-200">Contato</a>
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:flex group transition-all duration-300 overflow-hidden font-semibold bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-2.5 px-6 relative shadow-[0_8px_20px_-6px_rgba(255,162,42,0.6),inset_0_2px_3px_rgb(252,220,134),inset_0_-2px_3px_rgb(255,162,38)] text-amber-900 hover:shadow-[0_12px_28px_-6px_rgba(255,162,42,0.8)] hover:scale-[1.02] active:scale-95 text-sm items-center gap-2"
        >
          <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
          <span className="relative">Quero previsibilidade</span>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-neutral-300 hover:text-white transition-colors"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 p-6">
          <nav className="flex flex-col gap-4">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg text-neutral-200 hover:text-white font-display font-medium py-2">A AIKA</a>
            <a href="#cases" onClick={() => setIsMenuOpen(false)} className="text-lg text-neutral-200 hover:text-white font-display font-medium py-2">Resultados</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg text-neutral-200 hover:text-white font-display font-medium py-2">Serviços</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mt-2 text-center font-semibold bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-3 px-6 text-amber-900">Quero previsibilidade</a>
          </nav>
        </div>
      )}
    </header>
  )
}
