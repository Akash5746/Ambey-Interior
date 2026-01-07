import { motion } from "framer-motion";
import {
  ChefHat,
  Bed,
  Sofa,
  Building2,
  Layers,
  Compass,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    description:
      "Transform your kitchen into a smart, efficient, and beautiful culinary space.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Space-optimized storage solutions",
      "Premium quality materials",
      "Customized layouts and finishes",
      "Integrated appliances",
      "Soft-close mechanisms",
      "5-year warranty",
    ],
  },
  {
    icon: Bed,
    title: "Bedroom Interior",
    description:
      "Create your personal sanctuary with our luxurious bedroom designs.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom wardrobes and closets",
      "Premium bed designs",
      "Ambient lighting solutions",
      "Study area integration",
      "Storage optimization",
      "Soundproofing options",
    ],
  },
  {
    icon: Sofa,
    title: "Living Room Interior",
    description:
      "Design living spaces that reflect your lifestyle and welcome your guests.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom TV units and shelving",
      "Sofa and furniture selection",
      "Feature walls and accents",
      "Lighting design",
      "Art and decor curation",
      "Smart home integration",
    ],
  },
  {
    icon: Building2,
    title: "Office Interior",
    description:
      "Create productive workspaces that inspire creativity and collaboration.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Ergonomic furniture solutions",
      "Meeting room designs",
      "Reception area setup",
      "Breakout space planning",
      "Acoustic solutions",
      "Brand integration",
    ],
  },
  {
    icon: Layers,
    title: "False Ceiling",
    description:
      "Add depth and character to your spaces with creative ceiling designs.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "POP and gypsum designs",
      "Integrated lighting",
      "Wooden panel ceilings",
      "Stretch ceiling options",
      "HVAC integration",
      "Acoustic ceilings",
    ],
  },
  {
    icon: Compass,
    title: "3D Interior Design",
    description: "Visualize your dream space before construction begins.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Photorealistic 3D renders",
      "Virtual walkthroughs",
      "Multiple design options",
      "Material visualization",
      "Lighting simulation",
      "Revision support",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Complete Interior Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to completion, we provide end-to-end interior design
              services tailored to your unique requirements and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row md:items-center gap-6 lg:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-t-2xl md:rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 w-12 h-12 md:w-14 md:h-14 bg-accent rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-card p-6 md:p-8 rounded-b-2xl md:rounded-none">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-2 mb-6 text-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button variant="gold" size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/contact" className="flex items-center gap-2">
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Link to="#" className="mt-0 sm:mt-0 text-accent-foreground/90 hover:text-accent flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="Our streamlined process ensures a smooth journey from concept to completion."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We discuss your requirements, preferences, and budget.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Our team creates detailed 3D designs for your approval.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Skilled craftsmen bring the design to life.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final inspection and handover of your dream space.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-card/80 dark:bg-card p-4 md:p-6 rounded-xl shadow-soft hover:shadow-medium transition">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="font-display text-lg md:text-xl font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {item.desc}
                  </p>
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

export default Services;
