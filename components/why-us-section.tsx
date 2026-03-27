"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Coins, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Professionalism",
    description:
      "Licensed professionals with years of experience in real estate transactions. We handle everything with integrity and transparency.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Get a cash offer within 24 hours and close in as little as 7 days. No waiting for bank approvals or buyer financing.",
  },
  {
    icon: Coins,
    title: "Fair Market Valuations",
    description:
      "Our data-driven approach ensures you receive competitive offers based on current market conditions and comparable sales.",
  },
  {
    icon: BarChart3,
    title: "Hassle-Free Closing",
    description:
      "No repairs, no staging, no showings. We buy properties in any condition and handle all the paperwork for you.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function WhyUsSection() {
  return (
    <section id="process" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose <span className="text-primary">Strategic Pro</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We&apos;ve simplified the selling process to give you the best experience possible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
