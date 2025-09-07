import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    "Setup time",
    "Monthly cost",
    "UK compliance",
    "Local support",
    "AI receptionist",
    "Auto invoicing",
    "Learning curve",
  ]

  const comparison = {
    "Lazy Builders AI": ["15 minutes", "£49/month", "✓", "✓", "✓", "✓", "None"],
    "Doing it Yourself": ["Weeks", "Your time", "?", "✗", "✗", "✗", "Steep"],
    "Big SaaS Apps": ["Days", "£100+/month", "Limited", "✗", "✗", "Basic", "Complex"],
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">Why Choose Lazy Builders AI?</h2>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full bg-card rounded-2xl border border-border shadow-lg">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-6 font-semibold">Feature</th>
                <th className="text-center p-6 font-semibold bg-primary/10 rounded-tl-2xl">Lazy Builders AI</th>
                <th className="text-center p-6 font-semibold">Doing it Yourself</th>
                <th className="text-center p-6 font-semibold">Big SaaS Apps</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border last:border-b-0">
                  <td className="p-6 font-medium">{feature}</td>
                  <td className="text-center p-6 bg-primary/5">
                    <span className="inline-flex items-center justify-center">
                      {comparison["Lazy Builders AI"][index] === "✓" ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <span className="font-medium text-primary">{comparison["Lazy Builders AI"][index]}</span>
                      )}
                    </span>
                  </td>
                  <td className="text-center p-6">
                    {comparison["Doing it Yourself"][index] === "✗" ? (
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    ) : comparison["Doing it Yourself"][index] === "?" ? (
                      <span className="text-muted-foreground">?</span>
                    ) : (
                      <span className="text-muted-foreground">{comparison["Doing it Yourself"][index]}</span>
                    )}
                  </td>
                  <td className="text-center p-6">
                    {comparison["Big SaaS Apps"][index] === "✗" ? (
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    ) : (
                      <span className="text-muted-foreground">{comparison["Big SaaS Apps"][index]}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
