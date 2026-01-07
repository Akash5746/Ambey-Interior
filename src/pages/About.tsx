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
    image: "/About_us/image2.png",
  },
  {
    name: "Akash Mishra",
    role: "Senior Interior Architect",
    image: "/About_us/image1.png",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs md:text-sm font-medium tracking-wider uppercase text-accent mb-2 md:mb-3">
                About Us
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6 leading-tight">
                Crafting Beautiful Spaces Since 2023
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Ambey Interior is a premier interior design company based in
                Gurugram, India. For over 15 years, we have been transforming
                ordinary spaces into extraordinary living and working
                environments.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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
              className="relative mt-8 lg:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ambey Interior showroom"
                className="rounded-xl md:rounded-2xl shadow-medium w-full"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-accent text-accent-foreground p-4 md:p-6 rounded-lg md:rounded-xl shadow-gold">
                <p className="font-display text-3xl md:text-4xl font-bold">
                  3+
                </p>
                <p className="text-xs md:text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 md:py-8 lg:py-10 bg-primary">
        <div className="container-custom px-1">
          <div className="flex gap-3 sm:gap-1 md:gap-6 lg:gap-8 justify-between">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center flex-1 min-w-0"
              >
                <stat.icon className="w-7 h-7 sm:w-10 sm:h-10 md:w-15 md:h-20 text-accent mx-auto mb-1 md:mb-1" />
                <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-primary-foreground/80 leading-tight px-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 md:p-8 rounded-xl md:rounded-2xl"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
              className="bg-secondary p-6 md:p-8 rounded-xl md:rounded-2xl"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Eye className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our talented team of designers and architects bring creativity, expertise, and passion to every project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 md:gap-8 justify-items-center max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full"
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display text-lg md:text-xl font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  {member.role}
                </p>
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
