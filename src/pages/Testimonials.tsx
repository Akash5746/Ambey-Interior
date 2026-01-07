import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

const testimonials = [
  {
    id: 1,
    name: "Sahil Sharma",
    role: "Homeowner",
    location: "Barabanki, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "Ambey Interior transformed our apartment into a stunning modern home. Their attention to detail and understanding of our requirements was exceptional. The team was professional, punctual, and delivered exactly what they promised. Highly recommended!",
    rating: 5,
    project: "3BHK Apartment",
  },
  {
    id: 2,
    name: "Shristi Singh",
    role: "Business Owner",
    location: "Lucknow, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "The team designed our office space beautifully. They understood our brand identity and created an environment that our employees love coming to every day. The project was completed on time and within budget. Excellent work!",
    rating: 5,
    project: "Corporate Office",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "IT Professional",
    location: "Barabanki, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "From modular kitchen to bedroom interiors, Ambey Interior handled everything perfectly. The quality of materials and workmanship exceeded our expectations. Their 3D visualization helped us make better decisions. Worth every rupee spent!",
    rating: 5,
    project: "Complete Home Interior",
  },
  {
    id: 4,
    name: "Sunita Gupta",
    role: "Doctor",
    location: "Lucknow, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "We were amazed by the 3D visualization before the actual work began. It helped us visualize and make informed decisions. The final result was even better than the renders! The team was responsive and addressed all our concerns promptly.",
    rating: 5,
    project: "Villa Interior",
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    role: "Entrepreneur",
    location: "Ayodhya, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "I've worked with several interior designers before, but Ambey Interior stands out for their creativity and execution. They transformed my restaurant into a space that customers love. The attention to lighting and ambiance was perfect!",
    rating: 5,
    project: "Restaurant Design",
  },
  {
    id: 6,
    name: "Neha Agarwal",
    role: "Homemaker",
    location: "Barabanki, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "Our modular kitchen designed by Ambey Interior is simply beautiful and highly functional. Every inch of space has been utilized efficiently. The soft-close drawers, built-in appliances, and quality of materials are top-notch. Love it!",
    rating: 5,
    project: "Modular Kitchen",
  },
];

const stats = [
  { value: "163", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "207+", label: "Happy Families" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-accent mb-3">
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't just take our word for it. Hear from our satisfied clients
              about their experience working with Ambey Interior.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary rounded-2xl p-6 lg:p-8 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.location}
                    </p>
                    <p className="text-xs text-accent mt-1">
                      Project: {testimonial.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Testimonials;
