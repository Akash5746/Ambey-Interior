import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Bed, Sofa, Building2, Layers, Compass } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    description: "Smart, space-efficient kitchen designs with premium materials and modern functionality.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Bed,
    title: "Bedroom Interior",
    description: "Cozy and luxurious bedroom designs that ensure comfort and aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Sofa,
    title: "Living Room Interior",
    description: "Elegant living spaces designed for relaxation, entertainment, and family time.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Building2,
    title: "Office Interior",
    description: "Professional workspace designs that boost productivity and reflect your brand.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Layers,
    title: "False Ceiling",
    description: "Creative ceiling designs with modern lighting solutions and architectural details.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Compass,
    title: "3D Interior Design",
    description: "Visualize your dream interior with detailed 3D renderings before execution.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Services"
          title="Complete Interior Solutions"
          description="From concept to completion, we provide turnkey interior design services tailored to your needs and budget."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl overflow-hidden shadow-soft card-hover h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;