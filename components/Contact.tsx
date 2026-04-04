'use client'

import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, Mail, MessageSquare, User, Building2, Briefcase } from 'lucide-react'

export default function Contact() {
  const [state, handleSubmit] = useForm('mqeggzrg')

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(78,150,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight mb-6">
              Ready to stop<br />experimenting?
            </h2>
            <p className="font-dm text-muted text-lg leading-relaxed mb-10">
              Book a free 30-minute discovery call. We&apos;ll map out exactly where AI can have
              the biggest impact on your business — no pitch deck, no fluff.
            </p>

            {/* What to expect */}
            <div className="flex flex-col gap-4">
              {[
                'Audit of your current workflows and bottlenecks',
                'Identification of your top 3 automation opportunities',
                'Honest assessment of ROI and timeline',
                'No obligation — just a genuine conversation',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-dim border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <span className="font-dm text-muted text-[15px] leading-snug">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: form */}
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent-dim border border-accent/30 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 14l6 6 10-12"
                      stroke="#4E96FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-syne font-bold text-2xl text-ink">Message sent!</h3>
                <p className="font-dm text-muted max-w-xs leading-relaxed">
                  We&apos;ll be in touch within 24 hours to schedule your discovery call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-syne font-bold text-xl text-ink mb-1">
                  Book your discovery call
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-dm text-muted">
                    Full name <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dim" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full pl-10 pr-4 py-3 bg-raised border border-border rounded-xl text-ink font-dm text-sm placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <ValidationError field="name" errors={state.errors} className="text-xs text-red-400 font-dm" />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-dm text-muted">
                    Work email <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dim" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-3 bg-raised border border-border rounded-xl text-ink font-dm text-sm placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <ValidationError field="email" errors={state.errors} className="text-xs text-red-400 font-dm" />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-dm text-muted">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dim" />
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      className="w-full pl-10 pr-4 py-3 bg-raised border border-border rounded-xl text-ink font-dm text-sm placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-dm text-muted">
                    Job title / Role
                  </label>
                  <div className="relative">
                    <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dim" />
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="e.g. Operations Manager, CEO, Head of IT"
                      className="w-full pl-10 pr-4 py-3 bg-raised border border-border rounded-xl text-ink font-dm text-sm placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-dm text-muted">
                    What are you looking to automate? <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-4 text-dim" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Briefly describe your workflow challenges or what you'd like to automate..."
                      className="w-full pl-10 pr-4 py-3 bg-raised border border-border rounded-xl text-ink font-dm text-sm placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    />
                  </div>
                  <ValidationError field="message" errors={state.errors} className="text-xs text-red-400 font-dm" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent text-white font-dm font-semibold text-base hover:bg-blue-500 transition-colors glow-blue-sm disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                        <path d="M16 9a7 7 0 00-7-7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Discovery Call
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs font-dm text-dim text-center leading-relaxed">
                  By submitting, you agree to be contacted about ZyvosAI services.
                  We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
