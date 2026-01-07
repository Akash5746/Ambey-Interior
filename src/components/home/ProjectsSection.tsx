import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Ayodhya, Uttar Pradesh",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Lucknow, Uttar Pradesh",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Corporate Office",
    location: "Lucknow, UP",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Premium Kitchen Design",
    location: "Barabanki, Uttar Pradesh",
    category: "Modular Kitchen",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Featured Projects"
          description="Explore our collection of stunning interior transformations across residential and commercial spaces."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                project.featured ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  project.featured ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/projects"
                    className="flex items-center gap-2 text-accent-foreground font-medium text-lg"
                  >
                    View Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
