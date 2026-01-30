import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/home/CTASection";

const serviceDetails = {
  "residential-interior-design": {
    title: "Residential Interior Design",
    tagline: "Your Dream Home Deserves the Perfect Design",
    image: "/images/services/residential-interior.jpg",
    description:
      "Transform your living space into a sanctuary that reflects your personality and meets all your needs. Our residential interior design services encompass complete home makeovers, from single rooms to entire apartments.",
    whatWeOffer: [
      "Complete home design concepts and layouts",
      "Living room and bedroom design",
      "Kitchen and bathroom design",
      "Custom furniture and storage solutions",
      "Color consultation and material selection",
      "Lighting design and fixtures",
      "3D visualization before execution",
      "Project management from start to finish",
    ],
    process: [
      {
        title: "Initial Consultation",
        desc: "We meet to understand your lifestyle, preferences, and budget for the project.",
      },
      {
        title: "Space Analysis",
        desc: "Our designers carefully analyze your space and create detailed floor plans.",
      },
      {
        title: "Design Proposal",
        desc: "We present 3D renders and design proposals for your approval and feedback.",
      },
      {
        title: "Material Selection",
        desc: "Together, we select premium materials, colors, and finishes that match your style.",
      },
      {
        title: "Execution",
        desc: "Our skilled team executes the design with precision and quality craftsmanship.",
      },
      {
        title: "Final Handover",
        desc: "Complete inspection and handover of your beautifully transformed home.",
      },
    ],
    whyChooseUs: [
      "Customized designs tailored to your lifestyle",
      "Use of high-quality, sustainable materials",
      "Experienced and certified interior designers",
      "Transparent pricing with no hidden costs",
      "Timely project completion",
      "Warranty on workmanship",
      "Post-delivery support and maintenance",
    ],
  },
  "modular-kitchen": {
    title: "Modular Kitchen Design",
    tagline: "Space-Smart, Stylish, and Functional Kitchens",
    image: "/images/services/modular-kitchen.jpg",
    description:
      "The kitchen is the heart of every home. We design modular kitchens that combine style, functionality, and durability. Our solutions maximize space while ensuring easy maintenance and modern aesthetics.",
    whatWeOffer: [
      "Space-optimized kitchen layouts",
      "Modular kitchen cabinets and storage",
      "Premium countertops and finishes",
      "Integrated appliance solutions",
      "Chimney and ventilation systems",
      "Kitchen lighting design",
      "Waterproofing and durability features",
      "Custom hardware and accessories",
    ],
    process: [
      {
        title: "Kitchen Assessment",
        desc: "We measure your kitchen space and understand your cooking habits and preferences.",
      },
      {
        title: "Layout Design",
        desc: "We create efficient kitchen layouts (L-shaped, U-shaped, island) based on your space.",
      },
      {
        title: "Material Selection",
        desc: "Choose from premium materials: plywood, particle board, and various finishes.",
      },
      {
        title: "Appliance Integration",
        desc: "We plan for seamless integration of your cooking appliances and fixtures.",
      },
      {
        title: "Installation",
        desc: "Expert installation with proper waterproofing and quality checks.",
      },
      {
        title: "Testing & Handover",
        desc: "We ensure everything works perfectly before handing over your new kitchen.",
      },
    ],
    whyChooseUs: [
      "Customized modular solutions for every kitchen size",
      "Premium quality materials with durability",
      "Expert cabinet making and craftsmanship",
      "5-year warranty on all cabinets",
      "Easy maintenance and cleaning",
      "Modern designs with timeless appeal",
      "Professional installation by experienced technicians",
    ],
  },
  "bedroom-interior-design": {
    title: "Bedroom Interior Design",
    tagline: "Create Your Perfect Personal Sanctuary",
    image: "/images/services/bedroom-design.jpg",
    description:
      "Your bedroom should be a peaceful retreat. We create elegant, comfortable bedroom designs that help you unwind and rejuvenate. From color schemes to custom furniture, we handle every detail.",
    whatWeOffer: [
      "Bedroom layout and space planning",
      "Custom wardrobe and storage solutions",
      "Bed designs and upholstery options",
      "Bedside and accent furniture",
      "Ambient and reading light solutions",
      "Window treatments and curtains",
      "Wall treatments and color schemes",
      "Add-on features like study areas or vanity",
    ],
    process: [
      {
        title: "Requirement Understanding",
        desc: "We learn about your sleep preferences, style, and any specific needs.",
      },
      {
        title: "Space Planning",
        desc: "Efficient layout design to maximize space and ensure smooth movement.",
      },
      {
        title: "Design Visualization",
        desc: "3D renderings showing furniture placement, colors, and lighting.",
      },
      {
        title: "Furniture Selection",
        desc: "Choose or customize furniture pieces that fit your budget and style.",
      },
      {
        title: "Installation & Styling",
        desc: "Professional installation and styling to complete your bedroom.",
      },
      {
        title: "Quality Check",
        desc: "Final verification to ensure comfort and aesthetic appeal.",
      },
    ],
    whyChooseUs: [
      "Designs focused on comfort and relaxation",
      "Custom furniture built to your specifications",
      "Quality materials ensuring durability",
      "Expert color and lighting consultation",
      "Maximized storage without compromising style",
      "Affordable customization options",
      "After-sales support for any adjustments",
    ],
  },
  "office-interior-design": {
    title: "Office Interior Design",
    tagline: "Productive Workspaces That Inspire Excellence",
    image: "/images/services/office-interior.jpg",
    description:
      "A well-designed office boosts productivity and employee morale. We create functional, inspiring workspaces that reflect your company's culture and values while promoting collaboration and efficiency.",
    whatWeOffer: [
      "Open and modular office layouts",
      "Ergonomic workstations and furniture",
      "Meeting and conference room design",
      "Reception and waiting area design",
      "Breakout and relaxation spaces",
      "Storage and filing solutions",
      "Acoustic and sound management",
      "Lighting and climate control design",
    ],
    process: [
      {
        title: "Company Profile Analysis",
        desc: "Understanding your business, culture, and work requirements.",
      },
      {
        title: "Space Planning",
        desc: "Creating efficient layouts for various functional areas.",
      },
      {
        title: "Ergonomic Design",
        desc: "Designing workstations that prioritize employee comfort and health.",
      },
      {
        title: "Aesthetic Development",
        desc: "Developing design concepts that reflect your brand identity.",
      },
      {
        title: "Implementation",
        desc: "Phased implementation to minimize disruption to your operations.",
      },
      {
        title: "Handover & Training",
        desc: "Complete setup and brief your team on the new office space.",
      },
    ],
    whyChooseUs: [
      "Designs that boost productivity and morale",
      "Ergonomic solutions for employee wellness",
      "Flexible designs that adapt as your business grows",
      "Professional and corporate aesthetic",
      "Acoustic solutions for focused work",
      "Cost-effective implementation strategies",
      "Ongoing support for future modifications",
    ],
  },
  "commercial-interior-design": {
    title: "Commercial Interior Design",
    tagline: "Professional Spaces That Impress and Inspire",
    image: "/images/services/commercial-interior.jpg",
    description:
      "Commercial spaces need to balance aesthetics with functionality. We design retail stores, restaurants, corporate offices, and hospitality spaces that attract customers, engage clients, and reflect your brand excellence.",
    whatWeOffer: [
      "Retail store layout and merchandising design",
      "Restaurant and cafe interior design",
      "Hotel and hospitality space design",
      "Corporate office and workspace design",
      "Showroom and exhibition design",
      "Brand identity integration",
      "Customer flow and experience design",
      "Lighting, flooring, and finish selection",
    ],
    process: [
      {
        title: "Business Objectives Analysis",
        desc: "Understanding your business goals, target audience, and brand identity.",
      },
      {
        title: "Concept Development",
        desc: "Creating design concepts that align with your business vision.",
      },
      {
        title: "Detailed Planning",
        desc: "Floor plans, layouts, and 3D visualizations for client approval.",
      },
      {
        title: "Material & Vendor Selection",
        desc: "Choosing quality materials and partnering with reliable vendors.",
      },
      {
        title: "Full-Scale Execution",
        desc: "Professional execution with quality management and timeline adherence.",
      },
      {
        title: "Launch & Support",
        desc: "Final setup, soft opening support, and post-launch assistance.",
      },
    ],
    whyChooseUs: [
      "Design expertise across various commercial sectors",
      "Strategic space planning for optimal customer/client experience",
      "Brand integration and identity representation",
      "High-quality materials and finishes",
      "Compliance with commercial standards and regulations",
      "Project management by experienced professionals",
      "Ongoing maintenance and support services",
    ],
  },
  "turnkey-interior-solutions": {
    title: "Turnkey Interior Solutions",
    tagline: "Complete Project Management from Start to Finish",
    image: "/images/services/turnkey-solutions.jpg",
    description:
      "Don't stress about managing multiple vendors. Our turnkey solutions handle everything—from design to execution, vendor management to quality checks. We deliver your complete project on time and within budget.",
    whatWeOffer: [
      "Complete project design and planning",
      "Vendor coordination and management",
      "Material procurement and quality assurance",
      "Construction and installation supervision",
      "Timeline and budget management",
      "Quality inspections at every stage",
      "Problem-solving and issue resolution",
      "Final project delivery and handover",
    ],
    process: [
      {
        title: "Project Briefing",
        desc: "Understanding all project requirements, timeline, and budget constraints.",
      },
      {
        title: "Design & Planning",
        desc: "Comprehensive design and detailed project planning with cost estimates.",
      },
      {
        title: "Vendor Selection",
        desc: "Identifying and hiring best vendors for quality and timeline adherence.",
      },
      {
        title: "Material Procurement",
        desc: "Sourcing quality materials and ensuring proper logistics.",
      },
      {
        title: "Execution & Supervision",
        desc: "On-site supervision ensuring quality and timeline adherence.",
      },
      {
        title: "Final Inspection & Handover",
        desc: "Comprehensive inspection and handover with warranty documentation.",
      },
    ],
    whyChooseUs: [
      "Single point of contact for entire project",
      "Complete responsibility and accountability",
      "Transparent budget and timeline management",
      "Quality assurance at every stage",
      "Vendor coordination and problem resolution",
      "Comprehensive warranty on all work",
      "Post-completion support and maintenance",
    ],
  },
  "custom-furniture-woodwork": {
    title: "Custom Furniture & Woodwork",
    tagline: "Bespoke Designs Crafted with Precision and Quality",
    image: "/images/services/custom-furniture.jpg",
    description:
      "Mass-produced furniture can't match the quality and uniqueness of custom pieces. We design and craft bespoke furniture and woodwork tailored to your space, style, and requirements.",
    whatWeOffer: [
      "Custom furniture design and fabrication",
      "Wardrobes and built-in storage solutions",
      "TV units and entertainment centers",
      "Bookshelves and display units",
      "Wooden partitions and room dividers",
      "Doors and wooden paneling",
      "Decorative woodwork and carvings",
      "Finishing and staining options",
    ],
    process: [
      {
        title: "Design Consultation",
        desc: "Understanding your style, space constraints, and functional requirements.",
      },
      {
        title: "Custom Design Creation",
        desc: "Sketches and 3D designs showing dimensions, materials, and finishes.",
      },
      {
        title: "Material Selection",
        desc: "Choosing premium wood types (teak, walnut, oak, pine) and finishes.",
      },
      {
        title: "Fabrication Planning",
        desc: "Detailed production planning ensuring precision and quality.",
      },
      {
        title: "Craftsmanship Execution",
        desc: "Expert craftsmen fabricating pieces with attention to detail.",
      },
      {
        title: "Installation & Finishing",
        desc: "Professional installation and finishing touches at your location.",
      },
    ],
    whyChooseUs: [
      "Unique, bespoke designs tailored to your needs",
      "Master craftsmen with years of experience",
      "Premium quality wood and materials",
      "Attention to detail and precision",
      "Custom finishes and staining options",
      "Durability and timeless appeal",
      "Warranty and after-sales support",
    ],
  },
  "false-ceiling-lighting": {
    title: "False Ceiling & Lighting Design",
    tagline: "Transform Your Space with Creative Ceilings and Lighting",
    image: "/images/services/false-ceiling.jpg",
    description:
      "Ceilings and lighting shape the character of a space. We create stunning false ceiling designs integrated with smart lighting solutions that add dimension, elegance, and functionality to any room.",
    whatWeOffer: [
      "POP and gypsum false ceiling designs",
      "Wooden and panel ceiling designs",
      "Stretch ceiling options",
      "Recessed and panel lighting integration",
      "LED lighting solutions",
      "Decorative ceiling designs",
      "HVAC and ductwork integration",
      "Acoustic ceiling solutions",
    ],
    process: [
      {
        title: "Space Assessment",
        desc: "Analyzing ceiling height, structural elements, and room purpose.",
      },
      {
        title: "Design Concept",
        desc: "Creating ceiling designs that enhance the room's aesthetic.",
      },
      {
        title: "Lighting Planning",
        desc: "Planning lighting placement for functionality and ambiance.",
      },
      {
        title: "Material Selection",
        desc: "Choosing materials based on durability, maintenance, and budget.",
      },
      {
        title: "Installation",
        desc: "Expert installation of false ceiling and lighting systems.",
      },
      {
        title: "Testing & Finalization",
        desc: "Testing lighting systems and final aesthetic adjustments.",
      },
    ],
    whyChooseUs: [
      "Creative and innovative ceiling designs",
      "Energy-efficient LED lighting solutions",
      "Professional installation ensuring longevity",
      "Seamless integration with room aesthetics",
      "Low maintenance and durability",
      "Warranty on installation and materials",
      "Support for future upgrades and modifications",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
              Service Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the service you're looking for.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-sm font-medium tracking-wider uppercase text-accent mb-3"
            >
              Service Details
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              {service.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Image */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="What We Offer"
            description="Complete solutions covering all aspects of your project."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {service.whatWeOffer.map((offer, index) => (
              <motion.div
                key={offer}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-4 items-start"
              >
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">{offer}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="Our Process"
            description="How we bring your vision to life."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent-foreground text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Ambey Interior for This Service"
            description="Experience the difference with our dedicated approach."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-3 items-start bg-secondary rounded-lg p-4 shadow-soft"
              >
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-accent-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our experts to discuss your project.
            </p>
            <Button
              size="lg"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 gap-2 inline-flex"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="Our Other Services"
            description="Explore more solutions from Ambey Interior."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(serviceDetails)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, svc], index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/services/${id}`}>
                    <div className="bg-background rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all group hover:-translate-y-2">
                      <div className="h-40 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceDetail;
