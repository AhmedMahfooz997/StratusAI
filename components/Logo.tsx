'use client'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const configs = {
    sm: { markW: 36, markH: 20, textSize: 14, aiSize: 12, gap: 9 },
    md: { markW: 46, markH: 26, textSize: 17, aiSize: 14, gap: 11 },
    lg: { markW: 58, markH: 33, textSize: 22, aiSize: 18, gap: 14 },
  }
  const c = configs[size]

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap: c.gap }}
    >
      {/* Stratus cloud mark — wide, flat silhouette with two gentle bumps */}
      <svg
        width={c.markW}
        height={c.markH}
        viewBox="0 0 56 30"
        fill="none"
        aria-hidden="true"
      >
        {/* Cloud base glow */}
        <ellipse cx="28" cy="26" rx="22" ry="4" fill="#4E96FF" fillOpacity="0.15" />

        {/* Main cloud silhouette — stratus shape: wide, flat, two bumps */}
        <path
          d="M9 26
             L47 26
             Q53 26 53 20
             Q53 14 47 13
             Q48 6 40 7
             Q37 2 30 5
             Q26 1 19 5
             Q12 3 10 9
             Q3 10 3 17
             Q3 26 9 26 Z"
          fill="#4E96FF"
        />

        {/* Subtle highlight streak across cloud top — suggests depth */}
        <path
          d="M16 8 Q28 4 40 8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />
      </svg>

      {/* Wordmark */}
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
