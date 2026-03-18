'use client'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const scales = {
    sm: { mark: 28, text: 15, gap: 10 },
    md: { mark: 34, text: 18, gap: 12 },
    lg: { mark: 44, text: 22, gap: 14 },
  }

  const s = scales[size]
  const markH = s.mark
  const barH = Math.round(markH * 0.17)
  const barGap = Math.round(markH * 0.14)
  const totalH = barH * 3 + barGap * 2
  const startY = (markH - totalH) / 2

  return (
    <div className={`flex items-center gap-[${s.gap}px] ${className}`} style={{ gap: s.gap }}>
      {/* Mark: three stacked horizontal bars representing atmospheric strata */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox={`0 0 ${s.mark} ${s.mark}`}
        fill="none"
        aria-hidden="true"
      >
        {/* Top bar — widest, full opacity */}
        <rect
          x={0}
          y={startY}
          width={s.mark}
          height={barH}
          rx={barH / 2}
          fill="#4E96FF"
        />
        {/* Middle bar */}
        <rect
          x={Math.round(s.mark * 0.12)}
          y={startY + barH + barGap}
          width={Math.round(s.mark * 0.78)}
          height={barH}
          rx={barH / 2}
          fill="white"
          fillOpacity={0.85}
        />
        {/* Bottom bar — narrowest */}
        <rect
          x={Math.round(s.mark * 0.26)}
          y={startY + (barH + barGap) * 2}
          width={Math.round(s.mark * 0.55)}
          height={barH}
          rx={barH / 2}
          fill="white"
          fillOpacity={0.45}
        />
      </svg>

      {/* Wordmark */}
      <div className="flex items-baseline" style={{ gap: 3 }}>
        <span
          className="font-syne font-800 tracking-wide leading-none text-ink"
          style={{ fontSize: s.text, fontWeight: 800, letterSpacing: '0.06em' }}
        >
          STRATUS
        </span>
        <span
          className="font-syne font-500 text-accent leading-none"
          style={{ fontSize: s.text * 0.85, fontWeight: 500, letterSpacing: '0.04em' }}
        >
          AI
        </span>
      </div>
    </div>
  )
}
