"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "James Miller",
    location: "Tampa, Florida",
    text: "Strategic Pro closed on my Tampa home in 10 days - no repairs needed! The process was incredibly smooth and professional.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    location: "Atlanta, Georgia",
    text: "The most transparent process I have ever seen. They explained everything clearly and delivered exactly what they promised.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    location: "Charlotte, North Carolina",
    text: "I was facing foreclosure and Strategic Pro saved me. They gave me a fair cash offer and closed in just 8 days.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    location: "Nashville, Tennessee",
    text: "After trying to sell my inherited property for months, Strategic Pro made it happen in two weeks. Highly recommended!",
    rating: 5,
  },
  {
    name: "Robert Williams",
    location: "Columbus, Ohio",
    text: "Professional from start to finish. No hidden fees, no last-minute changes. This is how real estate should work.",
    rating: 5,
  },
  {
    name: "Jennifer Brown",
    location: "Indianapolis, Indiana",
    text: "They bought my rental property as-is. No repairs, no cleaning, no stress. The best decision I made this year.",
    rating: 5,
  },
  {
    name: "David Anderson",
    location: "Richmond, Virginia",
    text: "Quick, fair, and professional. Got my cash offer within hours and closed in under two weeks. Amazing experience!",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    location: "Charleston, South Carolina",
    text: "Strategic Pro made selling my condo so easy. The team was responsive and the whole process was stress-free.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real stories from property owners who trusted Strategic Pro with their sales.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling Testimonials */}
        <div className="flex gap-6 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
