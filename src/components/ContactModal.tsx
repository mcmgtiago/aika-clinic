import { useState, useEffect } from 'react'
import { X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ nome: '', clinica: '', telefone: '', faturamento: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg rounded-3xl bg-[#0c0c0c] ring-1 ring-white/10 p-8 md:p-10 shadow-2xl">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>

              {!submitted ? (
                <>
                  <h2 className="text-2xl font-semibold text-white font-display tracking-tight mb-2">
                    Diagnóstico gratuito
                  </h2>
                  <p className="text-sm text-[#94a3b8] mb-8">
                    Preencha e nossa equipe entra em contato pelo WhatsApp em até 24h.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5 block">Seu nome</label>
                        <input
                          type="text"
                          required
                          value={form.nome}
                          onChange={(e) => setForm({ ...form, nome: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[oklch(0.735_0.129_83)] focus:ring-1 focus:ring-[oklch(0.735_0.129_83)]/20 transition-all"
                          placeholder="João"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5 block">Clínica</label>
                        <input
                          type="text"
                          required
                          value={form.clinica}
                          onChange={(e) => setForm({ ...form, clinica: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[oklch(0.735_0.129_83)] focus:ring-1 focus:ring-[oklch(0.735_0.129_83)]/20 transition-all"
                          placeholder="Nome da clínica"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5 block">WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[oklch(0.735_0.129_83)] focus:ring-1 focus:ring-[oklch(0.735_0.129_83)]/20 transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5 block">Faturamento mensal</label>
                      <select
                        required
                        value={form.faturamento}
                        onChange={(e) => setForm({ ...form, faturamento: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[oklch(0.735_0.129_83)] focus:ring-1 focus:ring-[oklch(0.735_0.129_83)]/20 transition-all appearance-none"
                      >
                        <option value="" className="bg-[#0a0a0a]">Selecione</option>
                        <option value="ate-30" className="bg-[#0a0a0a]">Até R$ 30 mil</option>
                        <option value="30-60" className="bg-[#0a0a0a]">R$ 30 mil a R$ 60 mil</option>
                        <option value="60-100" className="bg-[#0a0a0a]">R$ 60 mil a R$ 100 mil</option>
                        <option value="acima-100" className="bg-[#0a0a0a]">Acima de R$ 100 mil</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-4 group transition-all duration-300 overflow-hidden font-semibold bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-4 px-8 relative shadow-[0_12px_28px_-8px_rgba(255,162,42,0.7)] text-amber-900 hover:shadow-[0_15px_33px_-8px_rgba(255,162,42,0.9)] hover:scale-[1.01] active:scale-95 text-sm"
                    >
                      <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
                      <span className="relative flex items-center justify-center gap-2">Agendar diagnóstico gratuito <Send size={14} /></span>
                    </button>
                    <p className="text-center text-[10px] text-white/30 mt-3">Sem compromisso · Diagnóstico em 24h</p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)' }}>
                    <svg className="w-7 h-7 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white font-display mb-2">Diagnóstico agendado!</h3>
                  <p className="text-sm text-[#94a3b8]">Nossa equipe vai entrar em contato pelo WhatsApp em até 24h.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
