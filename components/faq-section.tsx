"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need to be tech-savvy to use this?",
      answer:
        "Not at all! We handle all the technical setup for you. Once it's running, it's as simple as using your phone. Our team provides full training and ongoing support.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with popular UK accounting software like Xero and QuickBooks, major banks for payment processing, and can connect to your existing calendar and phone systems.",
    },
    {
      question: "Is there a monthly subscription after setup?",
      answer:
        "Yes, there's a simple £49/month subscription that covers hosting, AI processing, phone services, and ongoing support. No hidden fees or long-term contracts.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Most customers are up and running within 24-48 hours of their setup call. We handle everything remotely, so you don't need to take time off work.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 gradient-spotlight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-pretty leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
