import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { WhoItsForSection } from "@/components/who-its-for-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorks } from "@/components/how-it-works"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CTABanner } from "@/components/cta-banner"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoItsForSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <ComparisonSection />
      <CTABanner />
      <FAQSection />
      <Footer />
    </main>
  )
}
