import { motion } from 'motion/react'
import { ArrowRight, Zap } from 'lucide-react'

export function PicoFeature() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)]"
        style={{ position: 'relative' }}
      >
        {/* Border gradient */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-30" style={{
          padding: '1px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: '24px',
        }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left — Video */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[500px] overflow-hidden">
            <video
              src="/assets/video-pico.mp4"
              controls
              preload="metadata"
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay on edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]/80 pointer-events-none hidden lg:block" />
          </div>

          {/* Right — Copy */}
          <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-[rgba(180,130,50,0.08)] w-fit mb-6"
              style={{ borderColor: 'rgba(180,130,50,0.3)' }}
            >
              <Zap size={12} style={{ color: 'oklch(0.735 0.129 83)' }} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-semibold" style={{ color: 'oklch(0.735 0.129 83)' }}>Principal serviço</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter leading-[1.1] font-display mb-4">
              Pico de Faturamento
            </h2>

            <p className="text-[#94a3b8] text-base leading-relaxed mb-4">
              Um dia inteiro de vendas usando a base de pacientes que sua clínica já tem. Sem gastar um real em anúncio. Sem mexer na sua equipe.
            </p>

            <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
              Em 7 a 15 dias, a equipe AIKA prepara toda a ação sobre seus contatos do WhatsApp. No dia do Pico, os clientes chegam prontos pra comprar. Mais de 200 clínicas já faturaram de R$12k a R$134k em um único dia.
            </p>

            {/* Stats mini */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-white">R$134k</div>
                <div className="text-[10px] text-[#64748b] font-mono uppercase tracking-wider mt-1">Recorde/dia</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-white">R$0</div>
                <div className="text-[10px] text-[#64748b] font-mono uppercase tracking-wider mt-1">Investimento mídia</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-white">24h</div>
                <div className="text-[10px] text-[#64748b] font-mono uppercase tracking-wider mt-1">Tempo de ação</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/pico"
              className="group inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-[oklch(0.735_0.129_83)]"
            >
              Conhecer o Pico de Faturamento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
