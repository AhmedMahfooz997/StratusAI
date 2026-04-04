'use client'

import { useEffect, useRef } from 'react'
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We start with a deep audit of your current workflows, tools, and pain points. We map every process and surface the top opportunities where AI will have the biggest measurable impact.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Design',
    description:
      'We architect a custom solution tailored to your exact requirements — selecting the right models, tools, and integration approach before writing a single line of code.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy',
    description:
      'We build, integrate, and thoroughly test against your existing systems. Every deployment is staged to minimize disruption and includes full documentation.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale',
    description:
      'We monitor outcomes, measure ROI, and continuously optimize. As your business grows, we expand your AI capabilities to match — this is a long-term partnership.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = sectionRef.current?.querySelectorAll('[data-step]')
            items?.forEach((item, i) => {
              const el = item as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 120)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 relative bg-surface">
      {/* Top/bottom edge fades */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight mb-6">
            From discovery to<br />production in weeks
          </h2>
          <p className="text-muted font-dm text-lg leading-relaxed">
            A structured process built to keep projects on track and ensure every solution we deploy actually gets used.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                data-step
                style={{
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
                className="relative bg-surface p-8 flex flex-col gap-5 hover:bg-raised transition-colors duration-200"
              >
                {/* Number */}
                <span className="font-syne font-extrabold text-6xl leading-none gradient-text opacity-30">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-dim border border-accent/20">
                  <Icon size={18} className="text-accent" />
                </div>

                <div>
                  <h3 className="font-syne font-bold text-xl text-ink mb-2">{step.title}</h3>
                  <p className="font-dm text-muted text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow (hidden on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-raised border border-border">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M6 3l2 2-2 2" stroke="#4E96FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
