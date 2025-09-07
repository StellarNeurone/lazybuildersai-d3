import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter Build",
      price: "£250",
      description: "Perfect for solo tradesmen getting started",
      features: ["Basic AI receptionist", "Simple quote generator", "Email support", "1 month setup support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro Build",
      price: "£750",
      description: "Most popular for growing businesses",
      features: [
        "Advanced AI receptionist",
        "Auto quotes & invoices",
        "Smart scheduling",
        "Priority support",
        "3 months setup support",
        "Custom integrations",
      ],
      cta: "Choose Pro",
      popular: true,
    },
    {
      name: "Full Setup",
      price: "£1,750",
      description: "Complete solution for established trades",
      features: [
        "Everything in Pro",
        "Compliance alerts",
        "Advanced reporting",
        "Dedicated account manager",
        "6 months support",
        "Custom workflows",
        "Team management",
      ],
      cta: "Go Premium",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            One-time setup fee, then just £49/month. No hidden costs, no long contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? "border-primary bg-card shadow-lg" : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Recommended
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-pretty">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl py-3 transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary hover:bg-secondary text-primary-foreground"
                    : "bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
