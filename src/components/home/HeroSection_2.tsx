import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";

const HeroSection_2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  const titleText = "AMBEY";
  const subtitleText = "INTERIOR";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-brown-dark mb-10"
    >
      {/* Background Video/Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/60 via-brown-dark/40 to-brown-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxurious interior design"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-4 mb-4"
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-light tracking-[0.3em] uppercase text-sm md:text-base mb-8 font-light"
        >
          Premium Interior Design Solutions
        </motion.p>

        {/* Main Title - Letter by Letter Animation */}
        <div className="overflow-hidden mb-4">
          <motion.div className="flex justify-center">
            {titleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-cream-light tracking-tight"
                style={{
                  textShadow: "0 0 80px rgba(212, 175, 55, 0.3)",
                  lineHeight: 0.9,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle - Letter by Letter Animation */}
        <div className="overflow-hidden mb-12">
          <motion.div className="flex justify-center">
            {subtitleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i + titleText.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gold tracking-[0.1em]"
                style={{ lineHeight: 0.9 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          A Curated Collection of Handcrafted Interior Designs
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button variant="gold" size="xl" asChild className="group">
            <Link to="/contact">
              <span className="relative z-10">Explore Our Work</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream/60"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection_2;
