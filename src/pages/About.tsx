import { motion } from "framer-motion";
import { Award, Target, Eye, Users, Calendar, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/home/CTASection";

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "3+" },
  { icon: Building, label: "Projects Completed", value: "163" },
  { icon: Users, label: "Happy Clients", value: "207+" },
  { icon: Award, label: "Awards Won", value: "25+" },
];

const team = [
  {
    name: "Alok Mishra",
    role: "Founder & Lead Designer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Akash Mishra",
    role: "Senior Interior Architect",
    image: "/About_us/image.png",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium tracking-wider uppercase text-accent mb-3">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Crafting Beautiful Spaces Since 2023
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ambey Interior is a premier interior design company based in
                Gurugram, India. For over 15 years, we have been transforming
                ordinary spaces into extraordinary living and working
                environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of skilled designers, architects, and craftsmen work
                together to create interiors that are not just visually stunning
                but also functional and reflective of our clients' personalities
                and lifestyles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ambey Interior showroom"
                className="rounded-2xl shadow-medium w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-gold">
                <p className="font-display text-4xl font-bold">3+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <p className="font-display text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-2xl"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To transform every space into a masterpiece that enhances the
                quality of life for our clients. We strive to deliver
                innovative, sustainable, and personalized interior solutions
                that exceed expectations while maintaining the highest standards
                of craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary p-8 rounded-2xl"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and innovative interior design
                company, known for creating spaces that inspire, comfort, and
                endure. We aim to set new benchmarks in design excellence and
                customer satisfaction across the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our talented team of designers and architects bring creativity, expertise, and passion to every project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8 justify-items-center max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
