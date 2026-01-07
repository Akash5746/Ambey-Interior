import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

const categories = ["All", "Residential", "Commercial", "Kitchen", "Office"];

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Barabanki, Uttar Pradesh",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A contemporary villa design featuring clean lines and open spaces.",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Lucknow, Uttar Pradesh",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "High-end penthouse with panoramic city views and premium finishes.",
  },
  {
    id: 3,
    title: "Tech Startup Office",
    location: "Barabanki, Uttar Pradesh",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dynamic workspace designed for collaboration and creativity.",
  },
  {
    id: 4,
    title: "Premium Kitchen Design",
    location: "Barabanki, Uttar Pradesh",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Modern modular kitchen with smart storage solutions.",
  },
  {
    id: 5,
    title: "Corporate Headquarters",
    location: "Barabanki, Uttar Pradesh",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Professional office space reflecting corporate identity.",
  },
  {
    id: 6,
    title: "Elegant Apartment",
    location: "Greater Noida, Uttar Pradesh",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated apartment design with luxury amenities.",
  },
  {
    id: 7,
    title: "Restaurant Interior",
    location: "Hazratganj, Lucknow",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Warm and inviting restaurant with custom lighting design.",
  },
  {
    id: 8,
    title: "Executive Office Suite",
    location: "Barabanki, Uttar Pradesh",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium executive office with personalized design elements.",
  },
  {
    id: 9,
    title: "Italian Kitchen",
    location: "Ayodhya, Uttar Pradesh",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Classic Italian kitchen with marble countertops and custom cabinetry.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Featured Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of beautifully designed spaces across
              residential, commercial, and hospitality sectors.
            </p>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-foreground hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="flex items-center gap-1 text-white/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-6">
                      <p className="text-accent-foreground mb-4">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-accent-foreground font-medium">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
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

export default Projects;
