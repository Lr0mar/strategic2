import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyUsSection } from "@/components/why-us-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TrustSignals } from "@/components/trust-signals"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyUsSection />
      <TrustSignals />
      <AboutSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
