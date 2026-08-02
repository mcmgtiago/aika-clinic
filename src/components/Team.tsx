import { motion } from 'motion/react'

const members = [
  { name: 'Fernanda', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda', role: 'Estratégia e Growth' },
  { name: 'Gabi', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gabi', role: 'Design e Branding' },
  { name: 'Rayanne', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rayanne', role: 'Tráfego e Performance' },
]

export function Team() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 py-32 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-widest font-semibold mb-2 block" style={{ color: 'oklch(0.735 0.129 83)' }}>
          Quem faz acontecer
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter font-display">
          Especialistas em um único mercado
        </h2>
        <p className="text-[#94a3b8] mt-4 max-w-md mx-auto">
          Nosso time vive estética. É o que estudamos, criamos e otimizamos todos os dias.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)] group hover:-translate-y-1 transition-all duration-500"
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

            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-white/10 group-hover:border-[rgba(180,130,50,0.4)] group-hover:scale-105 transition-all duration-300 grayscale group-hover:grayscale-0"
            />
            <p className="text-white font-semibold mt-5 text-lg">{member.name}</p>
            <p className="text-[#64748b] text-xs font-mono mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
