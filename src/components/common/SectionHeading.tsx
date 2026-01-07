import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-medium tracking-wider uppercase mb-3 ${light ? "text-accent" : "text-accent"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;