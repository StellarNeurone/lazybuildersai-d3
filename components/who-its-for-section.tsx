import { Hammer, Wrench, Zap, PaintBucket, Drill, Settings } from "lucide-react"

export function WhoItsForSection() {
  const tradeTypes = [
    { icon: Hammer, label: "Builders", color: "text-primary" },
    { icon: Wrench, label: "Plumbers", color: "text-primary" },
    { icon: Zap, label: "Electricians", color: "text-primary" },
    { icon: PaintBucket, label: "Painters", color: "text-primary" },
    { icon: Drill, label: "Carpenters", color: "text-primary" },
    { icon: Settings, label: "Handymen", color: "text-primary" },
  ]

  return (
    <section id="who-its-for" className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">
            Who It's For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Micro-builders & tradesmen (1–5 employees) in West Yorkshire
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {tradeTypes.map((trade, index) => (
            <div
              key={trade.label}
              className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <trade.icon className={`w-12 h-12 mb-4 ${trade.color}`} />
              <span className="text-sm font-medium text-center">{trade.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30">
            <span className="text-lg font-medium text-white">
              Anyone spending too much time on{" "}
              <span className="text-primary-foreground font-semibold bg-primary px-2 py-1 rounded">paperwork</span>{" "}
              instead of{" "}
              <span className="text-primary-foreground font-semibold bg-primary px-2 py-1 rounded">building</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
