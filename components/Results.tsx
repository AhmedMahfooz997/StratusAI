'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Healthcare',
    company: 'Regional Medical Group',
    challenge:
      'Patient intake was handled entirely via phone — staff spent 4+ hours daily on scheduling and data entry.',
    result: '73% reduction in intake time',
    metric: '73%',
    metricLabel: 'Intake Time Reduced',
    detail:
      'Built an AI-powered scheduling and triage workflow that handles 80% of bookings automatically, freeing clinical staff to focus on patient care.',
    tags: ['Workflow Automation', 'AI Agents', 'Integration'],
  },
  {
    industry: 'Logistics',
    company: 'National Distributor',
    challenge:
      'Order processing required manual data extraction from emails, PDFs, and supplier portals — prone to errors and delays.',
    result: '$340K saved in Year 1',
    metric: '$340K',
    metricLabel: 'Annual Cost Savings',
    detail:
      'Deployed an intelligent document processing pipeline with automated order validation, supplier sync, and exception handling.',
    tags: ['Document AI', 'System Integration', 'Automation'],
  },
  {
    industry: 'Professional Services',
    company: 'Financial Advisory Firm',
    challenge:
      'Analysts spent 40% of their week compiling client reports — manually pulling data from 6 different platforms.',
    result: '15 hours reclaimed per analyst, per week',
    metric: '60%',
    metricLabel: 'Reporting Automated',
    detail:
      'Built a custom AI reporting engine that aggregates, analyses, and drafts client reports — reviewed and approved in minutes, not hours.',
    tags: ['AI Agents', 'Custom AI', 'Automation'],
  },
]

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('[data-result]')
            cards?.forEach((card, i) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 120)
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
    <section id="results" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
            Case Studies
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight mb-6">
            Real businesses.<br />Measurable results.
          </h2>
          <p className="text-muted font-dm text-lg leading-relaxed">
            We measure success in outcomes, not deliverables. Here&apos;s what that looks
            like in practice.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              data-result
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className="group flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-border card-hover"
            >
              {/* Industry tag */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-dm font-semibold uppercase tracking-widest text-accent">
                  {study.industry}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-dim group-hover:text-accent transition-colors"
                />
              </div>

              {/* Big metric */}
              <div className="py-6 border-y border-border">
                <div className="font-syne font-extrabold text-5xl gradient-text leading-none mb-2">
                  {study.metric}
                </div>
                <div className="text-sm font-dm text-muted">{study.metricLabel}</div>
              </div>

              {/* Company */}
              <div>
                <p className="font-syne font-semibold text-lg text-ink mb-1">
                  {study.company}
                </p>
                <p className="font-dm text-muted text-sm leading-relaxed mb-4">
                  {study.detail}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-dm bg-raised border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
