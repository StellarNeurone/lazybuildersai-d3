import { Bot, FileText, Calendar, Shield } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Bot,
      title: "Smart Receptionist",
      description: "AI answers calls, books jobs, and handles customer queries 24/7",
    },
    {
      icon: FileText,
      title: "Auto Quotes & Invoices",
      description: "Generate professional quotes and invoices automatically",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent booking system that prevents double bookings",
    },
    {
      icon: Shield,
      title: "Compliance Alerts",
      description: "Stay on top of certifications and safety requirements",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">Your extra pair of hands.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <solution.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-pretty">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
