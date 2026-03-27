"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <a href="#" className="mb-4 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Strategic Pro LLC"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </a>
            <p className="mb-6 max-w-md text-muted-foreground">
              Strategic Pro LLC is a leading real estate investment and wholesaling firm
              dedicated to providing fair, fast cash offers for properties in any
              condition across the United States.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@strategic-pro.com" className="hover:text-primary transition-colors">
                  info@strategic-pro.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:561-562-4225" className="hover:text-primary transition-colors">
                  561-562-4225
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { name: "Our Process", href: "#process" },
                { name: "About Us", href: "#about" },
                { name: "Reviews", href: "#reviews" },
                { name: "Service Areas", href: "#service-areas" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Strategic Pro LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
