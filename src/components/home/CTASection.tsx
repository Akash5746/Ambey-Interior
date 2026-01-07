import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  const phoneNumber = "918081904199";
  const message = encodeURIComponent(
    "Hello! I'm interested in getting a free quote for interior design services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="section-padding bg-gradient-to-br from-brown-dark via-primary to-brown relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Get a free consultation and quote for your dream interior. Our
            experts will help you create the perfect space that reflects your
            style and personality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="w-full sm:w-auto rounded-[30px] px-6 py-4 sm:py-5 text-base sm:text-lg transition"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              asChild
              className="w-full sm:w-auto rounded-[30px] px-6 py-4 sm:py-5 text-base sm:text-lg border border-primary-foreground/20 bg-transparent flex items-center justify-center gap-3 transition"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
