"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Joe Mitchell",
      role: "Plumber, Leeds",
      content: "Saved me loads of hassle on invoicing. Now I just focus on fixing pipes, not chasing payments.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Electrician, Bradford",
      content: "The AI receptionist is brilliant. Never miss a call again, even when I'm up a ladder.",
      rating: 5,
    },
    {
      name: "Mike Roberts",
      role: "Builder, Wakefield",
      content: "Best investment I've made. My admin time went from 10 hours a week to basically zero.",
      rating: 5,
    },
    {
      name: "Emma Clarke",
      role: "Painter & Decorator, Huddersfield",
      content: "Professional quotes in minutes, not hours. My customers love how quick I respond now.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 gradient-spotlight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            What West Yorkshire Tradesmen Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl text-center text-pretty mb-6">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Button variant="ghost" size="icon" onClick={prevTestimonial} className="rounded-full">
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button variant="ghost" size="icon" onClick={nextTestimonial} className="rounded-full">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
