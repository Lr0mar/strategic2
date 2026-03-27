"use client"

import { motion } from "framer-motion"
import { MapPin, CheckCircle } from "lucide-react"

const serviceStates = [
  "Florida",
  "Georgia",
  "South Carolina",
  "North Carolina",
  "Ohio",
  "Indiana",
  "Tennessee",
  "Virginia",
  "West Virginia",
  "Pennsylvania",
  "Michigan",
  "Illinois",
  "Kentucky",
  "Iowa",
  "Oklahoma",
]

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            We Buy Properties Nationwide
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our <span className="text-primary">Service Areas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Strategic Pro LLC operates across 15 states in the United States. 
            No matter where your property is located, we are ready to make you a fair cash offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {serviceStates.map((state, index) => (
            <motion.div
              key={state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/30"
            >
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="font-medium text-foreground">{state}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Don&apos;t see your state listed?{" "}
            <a href="#" className="text-primary underline hover:no-underline">
              Contact us
            </a>{" "}
            to discuss your property - we may still be able to help!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
