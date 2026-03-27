"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function HeroSection() {
  const [address, setAddress] = useState("")
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNext = () => {
    if (step === 1 && address.trim()) {
      setStep(2)
    } else if (step === 2) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Property Images Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 h-64 w-96">
          <Image
            src="/images/property-hero.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-0 top-20 h-64 w-96">
          <Image
            src="/images/property-condo.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:gap-16 lg:py-0">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>Trusted by 500+ Property Owners Nationwide</span>
          </motion.div>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sell Your Property in Days, Not Months.{" "}
            <span className="text-primary">No Fees. No Repairs.</span>
          </h1>

          <p className="mb-8 max-w-xl text-pretty text-lg text-muted-foreground lg:text-xl">
            Our data-driven approach delivers fair, competitive cash offers within 24 hours. 
            Skip the hassle of traditional sales and close on your timeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
            {["No Hidden Fees", "Close in 7-14 Days", "As-Is Condition"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </motion.div>
              )
            )}
          </div>

          {/* Property Type Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {["Single Family", "Condo", "Townhouse", "Multi-Family", "Land"].map((type) => (
              <span
                key={type}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {type}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Lead Capture Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md flex-shrink-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              {/* Progress Indicator */}
              <div className="mb-6 flex items-center gap-2">
                <div
                  className={`h-2 flex-1 rounded-full ${
                    step >= 1 ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <div
                  className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                    step >= 2 ? "bg-primary" : "bg-secondary"
                  }`}
                />
              </div>

              {!isSubmitted ? (
                <>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    Get Your Free Cash Offer
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {step === 1
                      ? "Enter your property address to get started"
                      : "Almost there! Just a few more details"}
                  </p>

                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {step === 1 ? (
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Enter property address..."
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="h-12 border-border bg-secondary pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                        />
                      </div>
                    ) : (
                      <>
                        <Input
                          type="text"
                          placeholder="Your full name"
                          className="h-12 border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                        />
                        <Input
                          type="email"
                          placeholder="Email address"
                          className="h-12 border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                        />
                        <Input
                          type="tel"
                          placeholder="Phone number"
                          className="h-12 border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                        />
                      </>
                    )}
                  </motion.div>

                  <Button
                    onClick={handleNext}
                    className="mt-6 h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {step === 1 ? "Next" : "Get My Offer"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    Request Submitted!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {"We'll contact you within 24 hours with your cash offer."}
                  </p>
                </motion.div>
              )}

              <p className="mt-4 text-center text-xs text-muted-foreground">
                No obligation. 100% free. Your data is secure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
