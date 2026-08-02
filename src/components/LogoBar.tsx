import { useEffect } from 'react'

const logos = [
  { icon: 'simple-icons:spacex', label: 'SpaceX' },
  { icon: 'simple-icons:uber', label: 'Uber' },
  { icon: 'simple-icons:visa', label: 'Visa' },
  { icon: 'simple-icons:grab', label: 'Grab' },
  { icon: 'simple-icons:bose', label: 'Bose' },
  { icon: 'simple-icons:discover', label: 'Discover' },
  { icon: 'simple-icons:dji', label: 'DJI' },
  { icon: 'simple-icons:nikon', label: 'Nikon' },
  { icon: 'simple-icons:sony', label: 'Sony' },
  { icon: 'simple-icons:nasa', label: 'NASA' },
]

function IconifyIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      className="flex h-16 w-16 items-center justify-center text-[#64748b] hover:text-white transition-colors duration-300"
      dangerouslySetInnerHTML={{
        __html: `<iconify-icon icon="${icon}" width="52" height="52" aria-label="${label}"></iconify-icon>`
      }}
    />
  )
}

export function LogoBar() {
  // Load Iconify script
  useEffect(() => {
    if (!document.getElementById('iconify-script')) {
      const script = document.createElement('script')
      script.id = 'iconify-script'
      script.src = 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js'
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section className="relative z-10 py-16 border-y border-white/5">
      <div className="max-w-[1300px] mx-auto px-6">
        <p className="text-center text-xs font-mono text-[#64748b] uppercase tracking-widest font-semibold mb-10">
          Clínicas que confiam na AIKA
        </p>
      </div>

      {/* Infinite ticker with real logos */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="ticker-track flex gap-16 items-center py-2">
          {/* First set */}
          <div className="flex gap-16 shrink-0 items-center">
            {logos.map((logo) => (
              <IconifyIcon key={logo.label} icon={logo.icon} label={logo.label} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-16 shrink-0 items-center">
            {logos.map((logo) => (
              <IconifyIcon key={`dup-${logo.label}`} icon={logo.icon} label={logo.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Ticker animation CSS */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 40s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
