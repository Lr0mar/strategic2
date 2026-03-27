"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "David",
    role: "Acquisition Manager & Real Estate Expert",
    bio: "10+ years of experience in real estate acquisitions. Expert in property valuations, market analysis, and closing complex transactions.",
    initials: "D",
  },
  {
    name: "Leidy",
    role: "Operations & Realty & Closings",
    bio: "Licensed Realtor in Florida. Specializes in seamless closings and investor relations with precision and professionalism.",
    initials: "L",
  },
  {
    name: "Monica",
    role: "Operations & Legal",
    bio: "15+ years of experience managing operations and legal aspects of real estate transactions. Ensures every deal is compliant and smooth.",
    initials: "M",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              The Strategy Behind the{" "}
              <span className="text-primary">Pro</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Strategic Pro LLC has established itself as a leader in real estate
                acquisitions and sales across the United States. Our approach combines cutting-edge market
                analytics with decades of hands-on experience to deliver
                exceptional results for property owners.
              </p>
              <p>
                We&apos;ve built our reputation on transparency, fair dealings, and a
                genuine commitment to making property transactions as seamless as
                possible. Whether you&apos;re facing foreclosure, relocating, or
                simply want a quick sale, we&apos;re here to help.
              </p>
              <p>
                Our team of experts works tirelessly to ensure every client
                receives a competitive offer and a closing experience that
                exceeds expectations.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8">
              {[
                { value: "500+", label: "Properties Acquired" },
                { value: "$50M+", label: "Total Volume" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Property Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 overflow-hidden rounded-xl"
            >
              <Image
                src="/images/property-hero.jpg"
                alt="Beautiful property sold by Strategic Pro"
                width={600}
                height={300}
                className="h-48 w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8 text-xl font-semibold text-foreground">
              Meet the Team
            </h3>
            <div className="grid gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {member.name}
                    </h4>
                    <p className="mb-1 text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
