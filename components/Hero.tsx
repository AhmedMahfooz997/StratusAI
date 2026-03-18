'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '48+', label: 'Workflows Deployed' },
  { value: '$2.4M', label: 'Saved for Clients' },
  { value: '11', label: 'Industries Served' },
  { value: '98%', label: 'Client Retention' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered entrance
    const els = heroRef.current?.querySelectorAll('[data-animate]')
    els?.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.animationDelay = `${i * 0.12}s`
      htmlEl.style.opacity = '0'
      htmlEl.style.animation = `fadeUp 0.7s ease forwards ${i * 0.12}s`
    })
  }, [])

  const handleScrollDown = () => {
    const el = document.querySelector('#services')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      {/* Blue orb glow — top right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(78,150,255,0.12) 0%, rgba(78,150,255,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Cyan orb — bottom left */}
      <div
        className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(56,217,255,0.07) 0%, rgba(56,217,255,0.02) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-24 pb-16">
        {/* Badge */}
        <div
          data-animate
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface text-sm font-dm text-muted"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          Trusted by 48+ growing businesses
        </div>

        {/* Headline */}
        <h1
          data-animate
          className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ink"
        >
          Stop paying for AI&nbsp;tools
          <br />
          <span className="gradient-text">that no one uses.</span>
        </h1>

        {/* Sub */}
        <p
          data-animate
          className="max-w-2xl text-lg md:text-xl font-dm text-muted leading-relaxed"
        >
          StratusAI designs and deploys custom AI automation systems that actually get
          adopted — saving time, cutting costs, and driving measurable results from day one.
        </p>

        {/* CTAs */}
        <div data-animate className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-accent text-white font-dm font-semibold text-base hover:bg-blue-500 transition-colors glow-blue"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
          <a
            href="#results"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-border text-ink font-dm font-medium text-base hover:border-border-active transition-colors"
          >
            See Our Work
          </a>
        </div>

        {/* Stats row */}
        <div
          data-animate
          className="w-full mt-4 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-syne font-bold text-3xl md:text-4xl gradient-text">
                {stat.value}
              </span>
              <span className="text-sm font-dm text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dim hover:text-muted transition-colors animate-float"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
