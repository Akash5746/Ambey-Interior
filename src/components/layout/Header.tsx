import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-xl">
                A
              </span>
            </div>
            <div>
              <span className="font-display text-xl font-semibold text-foreground">
                Ambey
              </span>
              <span className="font-display text-xl font-semibold text-accent ml-1">
                Interior
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors link-underline pb-1 ${
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918081904199"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 8081904199</span>
            </a>
            <Button variant="gold" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Button variant="gold" className="w-full" asChild>
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
