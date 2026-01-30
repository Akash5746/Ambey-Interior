import { motion } from "framer-motion";
import {
  Award,
  Target,
  Eye,
  Users,
  Calendar,
  Building,
  CheckCircle,
  Lightbulb,
  PenTool,
  Hammer,
  Smile,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/home/CTASection";

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "3+" },
  { icon: Building, label: "Projects Completed", value: "113" },
  { icon: Users, label: "Happy Clients", value: "147+" },
  { icon: Award, label: "Awards Won", value: "5+" },
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

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description:
      "We build relationships on transparency and honesty. No hidden costs, just genuine commitment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore new trends and technologies to bring fresh, modern ideas to your space.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We don't settle for 'good enough'. We strive for perfection in every detail and finish.",
  },
  {
    icon: Smile,
    title: "Client-Centric",
    description:
      "Your vision is our blueprint. We listen, adapt, and deliver spaces that truly reflect you.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We meet to understand your needs, budget, and vision for the space.",
    icon: Users,
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Our designers create 2D/3D layouts and mood boards to visualize the idea.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our skilled craftsmen bring the design to life with precision and care.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Handover",
    description:
      "We deliver your dream space, ready for you to move in and enjoy.",
    icon: CheckCircle,
  },
];

const whyChooseUs = [
  "End-to-End Turnkey Solutions",
  "Budget-Friendly Packages",
  "On-Time Delivery Guarantee",
  "Post-Handover Support",
  "Premium Quality Materials",
  "Transparent Pricing",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center  opacity-80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-accent mb-4 border border-accent/20 px-4 py-1.5 rounded-full bg-accent/5">
              About Ambey Interior
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              We Don't Just Design Spaces, <br className="hidden md:block" /> We
              Craft <span className="text-accent">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto bg-background py-4 rounded-lg">
              Ambey Interior is Barabanki's premier interior design firm,
              dedicated to transforming ordinary houses into extraordinary homes
              since 2023.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats - Floating Banner */}
      <section className="relative mt-20  px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3 opacity-80" />
                <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base opacity-80">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/50 p-8 rounded-2xl border border-secondary h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize luxury interior design. We believe everyone
                deserves a beautiful home, regardless of budget. We strive to
                deliver innovative, sustainable, and personalized interior
                solutions that exceed expectations while maintaining the highest
                standards of craftsmanship per industry benchmarks.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/50 p-8 rounded-2xl border border-secondary h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and recognized name in interior
                architecture, known for creating spaces that inspire, comfort,
                and endure. We aim to set new industry standards for design
                excellence, customer transparency, and execution speed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Fundamentals"
            title="Core Values That Drive Us"
            description="The principles that guide every decision, design, and nail we drive."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-accent/20"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="How We Work"
            title="Our Design Process"
            description="A seamless journey from concept to reality."
          />
          <div className="mt-16 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-secondary p-8 rounded-2xl text-center group hover:border-accent transition-colors"
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-background border border-secondary rounded-full flex items-center justify-center text-xs font-bold text-muted-foreground shadow-sm">
                      {step.number}
                    </span>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Interior Excellence"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Why Ambey Interior?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
                Distinctive Interiors, <br /> Exceptional Quality
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Currently, the interior market is flooded with generic designs.
                We stand out by offering personalized, durable, and
                architecturally sound solutions that respect your budget.
              </p>

              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-background rounded-xl border-l-4 border-accent shadow-sm">
                <p className="italic text-muted-foreground">
                  "Design is not just what it looks like and feels like. Design
                  is how it works."
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  - Steve Jobs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="The Minds Behind"
            title="Meet Our Leaders"
            description="Our talented team brings creativity, expertise, and passion to every project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-2xl  mx-auto mt-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                    <p className="text-white font-medium">
                      "Obsessed with perfection."
                    </p>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm uppercase tracking-wider text-accent font-medium mt-1">
                    {member.role}
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

export default About;
