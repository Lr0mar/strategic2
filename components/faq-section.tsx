"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are your closing timelines?",
    answer:
      "We have flexible closing timelines that ensure a seamless transaction between you and us. Whether you need to close quickly or prefer a longer timeline, we work with your schedule.",
  },
  {
    question: "Are there creative payment options like seller financing or novation?",
    answer:
      "Yes, we don't only offer cash. We have other options like seller financing, novation, subject-to, and more. Our team will work with you to find the best solution for your unique situation.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "We've been in the real estate business for 12+ years now and have proven excellent service within that period. Our track record speaks for itself with hundreds of satisfied clients across 15 states.",
  },
  {
    question: "How quick can I get a cash offer on paper?",
    answer:
      "As soon as all of the information has been provided, one of our team members will contact you to verify everything and give you a cash offer within 1-2 hours. We pride ourselves on fast, efficient service.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HelpCircle className="h-4 w-4" />
            Got Questions?
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions about our process, timelines, and payment options.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:info@strategic-pro.com" className="text-primary underline hover:no-underline">
              Email us
            </a>{" "}
            or call{" "}
            <a href="tel:561-562-4225" className="text-primary underline hover:no-underline">
              561-562-4225
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
