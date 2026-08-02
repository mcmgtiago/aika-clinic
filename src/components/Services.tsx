import { motion } from 'motion/react'

const services = [
  {
    id: 1,
    title: 'Pico de Faturamento',
    description: 'Grande faturamento em um único dia, sem depender de tráfego pago.',
    badge: 'PRIMEIRO',
    image: '/assets/service-pico.png',
  },
  {
    id: 2,
    title: 'Assessoria completa',
    description: 'Estratégia, tráfego, design e conteúdo integrados todos os meses.',
    image: '/assets/service-assessoria.png',
  },
  {
    id: 3,
    title: 'Criação de branding',
    description: 'Identidade visual que constrói autoridade e reconhecimento no mercado.',
    image: '/assets/service-branding.png',
  },
  {
    id: 4,
    title: 'Marketing pago',
    description: 'Anúncios para atrair pacientes qualificados, não uma lista de curiosos.',
    image: '/assets/service-marketing.png',
  },
  {
    id: 5,
    title: 'Trabalho de base',
    description: 'Contatos ativos e nutridos para sua clínica vender além da campanha atual.',
    image: '/assets/service-base.png',
  },
  {
    id: 6,
    title: 'Secretaria virtual',
    description: 'Atendimento no WhatsApp que agenda, confirma e ajuda a reduzir faltas.',
    image: '/assets/service-secretaria.png',
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative z-10 max-w-[1300px] mx-auto px-6 py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-16"
      >
        <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white/60 tracking-widest font-mono mb-4">
          <span className="w-1.5 h-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,130,50,0.8)]" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
          Como atuamos
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[1.1] font-display">
          Caixa rápido,{' '}
          <span className="text-[#64748b]">base sólida.</span>
        </h2>
        <p className="text-[#94a3b8] mt-4 text-base leading-relaxed max-w-2xl">
          O Pico abre a parceria. As outras frentes transformam o resultado pontual em rotina previsível.
        </p>
      </motion.div>

      {/* Bento Grid 3x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#0c0c0c] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Image area */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.05] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c0c]/30 to-[#0c0c0c]" />
            </div>

            {/* Content — title + description at bottom */}
            <div className="p-6 -mt-4 relative z-10">
              <h3 className="text-lg font-semibold text-white mb-2 font-display tracking-tight">
                {service.title}
                {service.badge && (
                  <span className="ml-2 text-[9px] font-mono tracking-widest align-middle px-2 py-0.5 rounded" style={{ color: 'oklch(0.735 0.129 83)', backgroundColor: 'rgba(180,130,50,0.15)', border: '1px solid rgba(180,130,50,0.3)' }}>
                    {service.badge}
                  </span>
                )}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
