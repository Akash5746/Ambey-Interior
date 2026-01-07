import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Sahil Sharma",
    role: "Homeowner, Barabanki, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "Ambey Interior transformed our apartment into a stunning modern home. Their attention to detail and understanding of our requirements was exceptional. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Shristi Singh",
    role: "Business Owner, Lucknow, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "The team designed our office space beautifully. They understood our brand and created an environment that our employees and clients love. Professional and timely delivery.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "IT Professional, Lucknow, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "From modular kitchen to bedroom interiors, Ambey Interior handled everything perfectly. The quality of materials and workmanship exceeded our expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sunita Gupta",
    role: "Doctor, Barabanki, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "We were amazed by the 3D visualization before the actual work began. It helped us make better decisions. The final result was even better than the renders!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-3xl p-8 md:p-12 shadow-soft">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-accent"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-accent fill-accent"
                        />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      "{testimonials[current].content}"
                    </p>
                    <div>
                      <p className="font-display text-lg font-semibold text-foreground">
                        {testimonials[current].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? "w-8 bg-accent"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
