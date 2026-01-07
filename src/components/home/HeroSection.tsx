import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-cream-light via-cream to-cream-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Premium Interior Design Solutions
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground">
              Transform Your
              <span className="block text-accent">Living Spaces</span>
              Into Art
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              We create stunning interiors that reflect your personality and
              lifestyle. From modern kitchens to luxurious bedrooms, we bring
              your vision to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="xl"
                className="  text-sm sm:text-base md:text-lg py-6 sm:py-6 gap-2 shadow-lg hover:shadow-xl transition-shadow rounded-xl"
                asChild
              >
                <Link to="/contact">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="flex gap-4 md:gap-8 pt-8 border-t border-border justify-between">
              <div className="flex-1">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  3+
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="flex-1">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  163
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="flex-1">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  98%
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxurious modern living room interior by Ambey Interior"
                className="w-full h-full object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-display font-bold text-xl">
                      ★
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Award Winning Designs
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Best Interior Company 2024
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brown/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
