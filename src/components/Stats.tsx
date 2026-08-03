import { useRef, useEffect, useState } from 'react'
import { useInView } from 'motion/react'

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const numericMatch = value.match(/\d+/)
    if (!numericMatch) return
    const targetNumber = parseInt(numericMatch[0], 10)
    const steps = 60
    const increment = targetNumber / steps
    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const current = Math.floor(increment * currentStep)
      setDisplayValue(current + value.replace(/\d+/, ''))
      if (currentStep === steps) {
        setDisplayValue(value)
        clearInterval(timer)
      }
    }, 25)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-6 text-center flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)] hover:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent)] transition-all duration-500 group"
      style={{
        position: 'relative',
      }}
    >
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
        padding: '1px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        borderRadius: '16px',
      }} />
      <span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight font-mono">
        {displayValue}
      </span>
      <span className="text-[10px] font-mono text-[#94a3b8] uppercase tracking-widest font-semibold">
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  const stats = [
    { value: '200+', label: 'Clínicas atendidas' },
    { value: 'R$12M+', label: 'Gerados para clientes' },
    { value: '3.7x', label: 'Crescimento médio' },
    { value: '18', label: 'Meses de operação' },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
