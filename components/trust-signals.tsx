"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Home } from "lucide-react"

const acquisitions = [
  {
    location: "Single Family in Tampa, FL",
    detail: "Closed in 8 Days",
    icon: Clock,
  },
  {
    location: "Condo in Atlanta, GA",
    detail: "$285K Cash Offer",
    icon: DollarSign,
  },
  {
    location: "Townhouse in Charlotte, NC",
    detail: "Closed in 12 Days",
    icon: Clock,
  },
  {
    location: "Single Family in Nashville, TN",
    detail: "$320K Cash Offer",
    icon: DollarSign,
  },
  {
    location: "Duplex in Columbus, OH",
    detail: "Closed in 7 Days",
    icon: Clock,
  },
  {
    location: "Ranch Home in Indianapolis, IN",
    detail: "$195K Cash Offer",
    icon: DollarSign,
  },
  {
    location: "Condo in Richmond, VA",
    detail: "Closed in 10 Days",
    icon: Clock,
  },
  {
    location: "Single Family in Detroit, MI",
    detail: "$145K Cash Offer",
    icon: DollarSign,
  },
  {
    location: "Townhouse in Charleston, SC",
    detail: "Closed in 9 Days",
    icon: Clock,
  },
  {
    location: "Multi-Family in Pittsburgh, PA",
    detail: "$410K Cash Offer",
    icon: Home,
  },
]

export function TrustSignals() {
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Recent Acquisitions
          </h3>
        </motion.div>

        {/* Ticker */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-card to-transparent" />

          <div className="flex gap-8 animate-ticker">
            {[...acquisitions, ...acquisitions, ...acquisitions].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex flex-shrink-0 items-center gap-3 rounded-lg border border-border bg-background px-4 py-2"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="whitespace-nowrap text-sm font-medium text-foreground">
                    {item.location}
                  </span>
                  <span className="text-sm text-muted-foreground">—</span>
                  <span className="whitespace-nowrap text-sm text-primary">
                    {item.detail}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
