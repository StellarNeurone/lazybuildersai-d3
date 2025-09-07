import { Clock, Phone, Calendar, CreditCard } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Wasted time on admin",
      description: "Hours spent on paperwork instead of actual work",
    },
    {
      icon: CreditCard,
      title: "Chasing late payments",
      description: "Constantly following up on overdue invoices",
    },
    {
      icon: Phone,
      title: "Missed calls = lost jobs",
      description: "Can't answer while working, losing potential customers",
    },
    {
      icon: Calendar,
      title: "Scheduling chaos",
      description: "Double bookings and confused customers",
    },
  ]

  return (
    <section className="py-20 gradient-spotlight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">Sound familiar?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <problem.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-pretty">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
