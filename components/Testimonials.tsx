'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      'ZyvosAI delivered in 6 weeks what our internal team spent 8 months trying to figure out. The ROI was visible within the first month.',
    author: 'Sarah K.',
    role: 'COO',
    company: 'Regional Medical Group',
    initials: 'SK',
  },
  {
    quote:
      "We were sceptical about AI automation — we'd been burned by over-promises before. ZyvosAI was different. They understood our operations inside out and built something we actually use every day.",
    author: 'Marcus T.',
    role: 'Head of Operations',
    company: 'National Logistics Co.',
    initials: 'MT',
  },
  {
    quote:
      "Our analysts used to dread Monday report runs. Now they review and approve in 20 minutes. ZyvosAI didn't just build a tool — they transformed how our team works.",
    author: 'Priya L.',
    role: 'Managing Director',
    company: 'Capital Advisory Partners',
    initials: 'PL',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('[data-quote]')
            cards?.forEach((card, i) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
            Client Voices
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight">
            Don&apos;t take<br />our word for it
          </h2>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              data-quote
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#4E96FF"
                    aria-hidden="true"
                  >
                    <path d="M8 1l1.854 4.146H14l-3.427 2.708 1.281 4.292L8 9.574l-3.854 2.572 1.281-4.292L2 5.146h4.146L8 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-dm text-ink text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent-dim border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="font-syne font-bold text-accent text-xs">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-syne font-semibold text-ink text-sm">{t.author}</p>
                  <p className="font-dm text-muted text-xs">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
