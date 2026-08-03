import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', clinic: '', whatsapp: '', revenue: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formData.name || !formData.clinic || !formData.whatsapp || !formData.revenue) return
    if (formData.whatsapp.replace(/\D/g, '').length < 10) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contato" className="py-12 md:py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter font-display mb-4">Recebemos seu contato</h2>
            <p className="text-lg text-[#94a3b8]">Nossa equipe vai entrar em contato pelo WhatsApp em breve.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-12 md:py-20 lg:py-32 relative overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(180,130,50,0.06)] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter font-display mb-6">
            Pronto para prever{' '}
            <br className="hidden sm:block" />
            o próximo mês?
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Conte onde a operação está hoje. Nossa equipe continua a conversa pelo WhatsApp.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-6 md:p-12 max-w-xl mx-auto bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)] shadow-2xl"
          style={{ position: 'relative' }}
        >
          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
            padding: '1px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            borderRadius: '24px',
          }} />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#64748b] uppercase tracking-widest font-semibold ml-1">Seu nome</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Como podemos chamar você?" className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[rgba(180,130,50,0.5)] focus:ring-1 focus:ring-[rgba(180,130,50,0.2)] transition-all placeholder:text-[#475569]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#64748b] uppercase tracking-widest font-semibold ml-1">Nome da clínica</label>
                <input type="text" required value={formData.clinic} onChange={(e) => setFormData({ ...formData, clinic: e.target.value })} placeholder="Sua clínica" className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[rgba(180,130,50,0.5)] focus:ring-1 focus:ring-[rgba(180,130,50,0.2)] transition-all placeholder:text-[#475569]" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#64748b] uppercase tracking-widest font-semibold ml-1">WhatsApp</label>
              <input type="tel" required value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} placeholder="(00) 00000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[rgba(180,130,50,0.5)] focus:ring-1 focus:ring-[rgba(180,130,50,0.2)] transition-all placeholder:text-[#475569]" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#64748b] uppercase tracking-widest font-semibold ml-1">Faturamento mensal</label>
              <select required value={formData.revenue} onChange={(e) => setFormData({ ...formData, revenue: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[rgba(180,130,50,0.5)] focus:ring-1 focus:ring-[rgba(180,130,50,0.2)] transition-all appearance-none cursor-pointer">
                <option value="" disabled className="bg-[#0a0a0a]">Selecione</option>
                <option value="ate-30k" className="bg-[#0a0a0a]">Até R$ 30 mil</option>
                <option value="30k-60k" className="bg-[#0a0a0a]">R$ 30 mil a R$ 60 mil</option>
                <option value="60k-100k" className="bg-[#0a0a0a]">R$ 60 mil a R$ 100 mil</option>
                <option value="acima-100k" className="bg-[#0a0a0a]">Acima de R$ 100 mil</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button type="submit" className="group w-full transition-all duration-300 overflow-hidden font-medium bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-4 px-8 relative shadow-[0_12px_28px_-8px_rgba(255,162,42,0.7),inset_0_2px_4px_rgb(252,220,134),inset_0_-3px_4px_rgb(255,162,38)] text-amber-900 hover:shadow-[0_15px_33px_-8px_rgba(255,162,42,0.9)] hover:scale-[1.01]">
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
                <span className="relative font-semibold flex items-center justify-center gap-2">Solicitar diagnóstico gratuito <Send size={16} /></span>
              </button>
            </div>

            <p className="text-center text-[10px] text-[#64748b] mt-3">
              Diagnóstico gratuito · Sem compromisso · Seus dados são confidenciais
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
