import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, X, Send } from 'lucide-react'

const steps = [
  { id: 'nome', question: 'Olá! Como posso chamar você?', placeholder: 'Seu nome', type: 'text' },
  { id: 'clinica', question: 'Qual o nome da sua clínica?', placeholder: 'Nome da clínica', type: 'text' },
  { id: 'telefone', question: 'Qual seu WhatsApp com DDD?', placeholder: '(00) 00000-0000', type: 'tel' },
  { id: 'faturamento', question: 'Faturamento mensal atual?', placeholder: '', type: 'select', options: ['Até R$ 30 mil', 'R$ 30 a R$ 60 mil', 'R$ 60 a R$ 100 mil', 'Acima de R$ 100 mil'] },
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [inputValue, setInputValue] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleNext = () => {
    if (!inputValue.trim()) return
    const step = steps[currentStep]
    setAnswers((prev) => ({ ...prev, [step.id]: inputValue }))
    setInputValue('')
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1)
    } else {
      setCompleted(true)
    }
  }

  const handleSelectOption = (option: string) => {
    setInputValue(option)
    setTimeout(() => {
      const step = steps[currentStep]
      setAnswers((prev) => ({ ...prev, [step.id]: option }))
      setInputValue('')
      setCompleted(true)
    }, 200)
  }

  const reset = () => {
    setCurrentStep(0)
    setAnswers({})
    setInputValue('')
    setCompleted(false)
  }

  const step = steps[currentStep]

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => { setIsOpen(!isOpen); if (!isOpen) reset() }}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(255,162,42,0.4)] transition-all hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)' }}
      >
        {isOpen ? <X size={20} className="text-amber-900" /> : <MessageCircle size={20} className="text-amber-900" />}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-[90] w-[340px] rounded-2xl bg-[#0c0c0c] ring-1 ring-white/10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3">
              <img src="/assets/aika-logo.png" alt="AIKA" className="h-6 w-auto" />
              <div>
                <p className="text-white text-sm font-semibold">Diagnóstico AIKA</p>
                <p className="text-[10px] text-[#64748b]">Responde em segundos</p>
              </div>
            </div>

            {/* Chat area */}
            <div className="p-5 min-h-[200px] flex flex-col justify-end">
              {!completed ? (
                <>
                  {/* Messages history */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(answers).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-xs text-[#64748b] mb-1">{steps.find(s => s.id === key)?.question}</div>
                        <div className="text-sm text-white bg-white/5 rounded-xl px-3 py-2 inline-block">{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Current question */}
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                  >
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3">
                      <p className="text-sm text-white">{step.question}</p>
                    </div>
                  </motion.div>

                  {/* Input */}
                  {step.type === 'select' ? (
                    <div className="space-y-2">
                      {step.options?.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(opt)}
                          className="w-full text-left px-4 py-2.5 rounded-xl bg-white/5 ring-1 ring-white/10 text-sm text-white hover:bg-white/10 hover:ring-white/20 transition-all"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type={step.type}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleNext() }}
                        placeholder={step.placeholder}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all"
                        autoFocus
                      />
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                        style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)' }}
                      >
                        <Send size={14} className="text-amber-900" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)' }}>
                    <svg className="w-5 h-5 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">Pronto, {answers.nome}!</p>
                  <p className="text-[#94a3b8] text-xs mb-4">Vamos conversar pelo WhatsApp.</p>
                  <a
                    href={`https://wa.me/5500000000000?text=Olá! Sou ${answers.nome} da ${answers.clinica}. Faturamento: ${answers.faturamento}. Quero o diagnóstico AIKA!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-amber-900"
                    style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)' }}
                  >
                    Abrir WhatsApp <Send size={14} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
