import { Button } from "@/components/ui/button"
import { Settings, Zap, TrendingUp, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      title: "Tell us your workflow",
      description: "Quick 15-minute chat about how you currently work",
    },
    {
      icon: Zap,
      title: "We set it up for you",
      description: "Our team configures everything to match your business",
    },
    {
      icon: TrendingUp,
      title: "You get more jobs, less stress",
      description: "Focus on building while AI handles the admin",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 gradient-spotlight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full border-4 border-primary/20">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-pretty">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
