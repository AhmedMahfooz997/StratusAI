'use client'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const configs = {
    sm: { w: 32, textSize: 13, aiSize: 11, gap: 8 },
    md: { w: 40, textSize: 16, aiSize: 13, gap: 11 },
    lg: { w: 52, textSize: 21, aiSize: 17, gap: 14 },
  }
  const c = configs[size]

  // Bar dimensions derived from mark width
  const bh = Math.round(c.w * 0.14)   // bar height
  const r  = bh / 2                    // border radius
  const g  = Math.round(c.w * 0.13)   // gap between bars

  // Three bars: full width, 72%, 46% — left-aligned, ascending opacity loss
  const bars = [
    { w: c.w,                   y: 0,           fill: '#4E96FF', opacity: 1    },
    { w: Math.round(c.w * 0.72), y: bh + g,      fill: '#ffffff', opacity: 0.7  },
    { w: Math.round(c.w * 0.46), y: (bh + g) * 2, fill: '#ffffff', opacity: 0.4  },
  ]

  const totalH = bh * 3 + g * 2

  return (
    <div className={`flex items-center ${className}`} style={{ gap: c.gap }}>
      <svg
        width={c.w}
        height={totalH}
        viewBox={`0 0 ${c.w} ${totalH}`}
        fill="none"
        aria-hidden="true"
      >
        {bars.map((bar, i) => (
          <rect
            key={i}
            x={0}
            y={bar.y}
            width={bar.w}
            height={bh}
            rx={r}
            fill={bar.fill}
            fillOpacity={bar.opacity}
          />
        ))}
      </svg>

      <div className="flex items-baseline" style={{ gap: 3 }}>
        <span
          className="font-syne text-ink leading-none"
          style={{ fontSize: c.textSize, fontWeight: 800, letterSpacing: '0.07em' }}
        >
          STRATUS
        </span>
        <span
          className="font-syne text-accent leading-none"
          style={{ fontSize: c.aiSize, fontWeight: 500, letterSpacing: '0.05em' }}
        >
          AI
        </span>
      </div>
    </div>
  )
}
