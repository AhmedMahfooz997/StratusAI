'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: "Most Starter projects go from discovery to live deployment in 3–5 weeks. Growth and Enterprise engagements typically take 6–10 weeks for the initial rollout, with ongoing iterations after that. We'll give you a clear timeline after the discovery call.",
  },
  {
    q: 'Do you work with companies of all sizes?',
    a: 'Our Starter plan is designed for small businesses with 5–50 employees, while Growth and Enterprise serve mid-to-large organisations. We focus on businesses where there is clear operational complexity — the more workflows you have, the more impact we can deliver.',
  },
  {
    q: 'What industries do you specialise in?',
    a: "We've delivered solutions across healthcare, logistics, financial services, real estate, professional services, manufacturing, and more. AI automation is industry-agnostic — if you have repetitive workflows, we can automate them.",
  },
  {
    q: 'How do you measure ROI?',
    a: "Before we build anything, we establish baseline metrics — time spent per task, error rates, processing costs, etc. After deployment, we track the delta. We provide monthly reports showing exactly what has improved and by how much.",
  },
  {
    q: 'What happens after deployment?',
    a: 'Every engagement includes a 30-day post-launch monitoring period. Growth and Enterprise clients receive ongoing optimisation, weekly check-ins, and continuous improvements as part of their monthly retainer.',
  },
  {
    q: 'What tools and platforms do you work with?',
    a: 'We are platform-agnostic. We work with n8n, Make, Zapier, custom APIs, OpenAI, Anthropic, Google AI, and more. We select the right tool for your specific requirements — not the tools we happen to know best.',
  },
  {
    q: 'How do I get started?',
    a: "Book a free 30-minute discovery call using the form below. We'll learn about your business, identify the highest-value automation opportunities, and confirm whether we're the right partner for you. No sales pressure — just a genuine conversation.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface">
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight">
            Questions answered
          </h2>
        </div>

        {/* Items */}
        <div className="flex flex-col divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-syne font-semibold text-base md:text-lg text-ink group-hover:text-accent transition-colors duration-150 leading-snug">
                  {faq.q}
                </span>
                <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-colors duration-150">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {open === i && (
                <div className="mt-4 pr-11">
                  <p className="font-dm text-muted leading-relaxed text-[15px]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
