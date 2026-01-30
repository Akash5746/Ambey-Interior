import { motion } from "framer-motion";
import {
  Home,
  UtensilsCrossed,
  Bed,
  Briefcase,
  Building2,
  Zap,
  Hammer,
  Lightbulb,
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
    id: "residential-interior-design",
    icon: Home,
    title: "Residential Interior Design",
    description:
      "Transform your home into a beautiful, functional space that reflects your personality and lifestyle.",
    image: "/images/services/residential-interior.jpg",
    shortDesc: "Complete home design solutions tailored to your taste",
  },
  {
    id: "modular-kitchen",
    icon: UtensilsCrossed,
    title: "Modular Kitchen Design",
    description:
      "Transform your kitchen into a smart, efficient, and beautiful culinary space with premium finishes.",
    image: "/images/services/modular-kitchen.jpg",
    shortDesc: "Space-optimized, premium kitchen solutions",
  },
  {
    id: "bedroom-interior-design",
    icon: Bed,
    title: "Bedroom Interior Design",
    description:
      "Create your personal sanctuary with our luxurious and comfortable bedroom designs.",
    image: "/images/services/bedroom-design.jpg",
    shortDesc: "Elegant bedroom designs for ultimate comfort",
  },
  {
    id: "office-interior-design",
    icon: Briefcase,
    title: "Office Interior Design",
    description:
      "Create productive workspaces that inspire creativity, collaboration, and professional excellence.",
    image: "/images/services/office-interior.jpg",
    shortDesc: "Inspiring office spaces for productivity",
  },
  {
    id: "commercial-interior-design",
    icon: Building2,
    title: "Commercial Interior Design",
    description:
      "Design sophisticated commercial spaces that impress clients and enhance your brand identity.",
    image: "/images/services/commercial-interior.jpg",
    shortDesc: "Professional commercial space design",
  },
  {
    id: "turnkey-interior-solutions",
    icon: Zap,
    title: "Turnkey Interior Solutions",
    description:
      "Complete end-to-end interior solutions from design to execution, handling everything for you.",
    image: "/images/services/turnkey-solutions.jpg",
    shortDesc: "Complete project management and execution",
  },
  {
    id: "custom-furniture-woodwork",
    icon: Hammer,
    title: "Custom Furniture & Woodwork",
    description:
      "Bespoke furniture and custom woodwork crafted with precision and premium materials.",
    image: "/images/services/custom-furniture.jpg",
    shortDesc: "Handcrafted, bespoke furniture solutions",
  },
  {
    id: "false-ceiling-lighting",
    icon: Lightbulb,
    title: "False Ceiling & Lighting Design",
    description:
      "Add depth, character, and ambient lighting to your spaces with creative ceiling designs.",
    image: "/images/services/false-ceiling.jpg",
    shortDesc: "Creative ceiling and lighting solutions",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-sm font-medium tracking-wider uppercase text-accent mb-3"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6"
            >
              Complete Interior Solutions for Every Space
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From concept to completion, we provide comprehensive interior design services tailored to your unique requirements, budget, and vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <Link to={`/services/${service.id}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-accent/10 to-accent/5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {service.shortDesc}
                      </p>
                      <div className="flex items-center text-accent font-medium text-sm gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Ambey Interior"
            title="Why Choose Us"
            description="We deliver exceptional results backed by expertise, dedication, and premium quality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Designers",
                desc: "Our team consists of experienced professionals with years of expertise in interior design.",
                icon: "🎨",
              },
              {
                title: "Quality Execution",
                desc: "We use premium materials and skilled craftsmen to ensure flawless execution.",
                icon: "✓",
              },
              {
                title: "Personalized Approach",
                desc: "Every project is unique—we tailor our solutions to match your vision and requirements.",
                icon: "⭐",
              },
              {
                title: "Timely Delivery",
                desc: "We respect your time and deliver projects on schedule without compromising quality.",
                icon: "⏱",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden costs. We provide clear, detailed quotations before starting any project.",
                icon: "💰",
              },
              {
                title: "Post-Delivery Support",
                desc: "Our relationship doesn't end at handover. We provide ongoing support and maintenance.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="Our streamlined process ensures excellence at every step."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We understand your vision, requirements, and budget.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Our designers create detailed 3D designs and mockups.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Skilled craftsmen meticulously bring designs to life.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final inspection and handover with your satisfaction guaranteed.",
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
                <div className="bg-card/80 p-6 rounded-xl shadow-soft hover:shadow-medium transition-all hover:bg-card">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="font-display text-xl font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
