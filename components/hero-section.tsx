"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-spotlight-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              You build. We automate the rest.
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-pretty mb-8 max-w-2xl">
              Stop wasting hours on calls, invoices & paperwork — focus on the job instead.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-6 shadow-2xl">
                <div className="bg-background rounded-2xl h-full flex flex-col">
                  <div className="flex items-center justify-center p-4 border-b border-border">
                    <Smartphone className="h-6 w-6 text-primary mr-2" />
                    <span className="font-semibold">Lazy Builders AI</span>
                  </div>
                  <div className="flex-1 p-4 space-y-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-sm font-medium">New Job Alert</div>
                      <div className="text-xs text-muted-foreground">Kitchen renovation - Leeds</div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-3">
                      <div className="text-sm font-medium">Invoice Sent</div>
                      <div className="text-xs text-muted-foreground">£2,450 - Payment pending</div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <div className="text-sm font-medium">Schedule Updated</div>
                      <div className="text-xs text-muted-foreground">Tomorrow: 3 appointments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
