import { motion } from "framer-motion";
import { Award, Clock, Shield, ThumbsUp, Users, Palette } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Award-Winning Designs",
    description: "Recognized for excellence in interior design with multiple industry awards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We value your time and ensure projects are completed within the agreed timeline.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Premium materials and craftsmanship with a 10-year warranty on all work.",
  },
  {
    icon: ThumbsUp,
    title: "Customer First",
    description: "Your satisfaction is our priority. We work until you're completely happy.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled designers and craftsmen with decades of combined experience.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Every design is unique and tailored specifically to your requirements.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Ambey Interior Difference"
          description="We don't just design spaces; we create experiences that transform how you live and work."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors h-full">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;