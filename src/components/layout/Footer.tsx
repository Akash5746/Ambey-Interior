import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom pt-10 md:pt-24 lg:pt-32 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">
                  A
                </span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold">
                  Ambey
                </span>
                <span className="font-display text-xl font-semibold text-accent ml-1">
                  Interior
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming spaces into stunning interiors. We bring your vision
              to life with creativity, quality craftsmanship, and attention to
              detail.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-12 col-span-1 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Projects",
                  "Testimonials",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      to={
                        link === "Home"
                          ? "/"
                          : link === "About Us"
                          ? "/about"
                          : `/${link.toLowerCase()}`
                      }
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Modular Kitchen",
                  "Bedroom Interior",
                  "Living Room Interior",
                  "Office Interior",
                  "False Ceiling",
                  "3D Interior Design",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Sutmill tiraha, opposite sutmill gate, Somaiya Nagar,
                  <br />
                  Barabanki, Bahadur Pur, Uttar Pradesh 225203, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+918081904199"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>+91 8081904199</span>
                </a>
              </li>
              <li>
                <a
                  //href="mailto:ambeyinterio2003@gmail.com"
                  href="mailto:akashmi5746@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>ambeyinterio2003@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Ambey Interior. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
