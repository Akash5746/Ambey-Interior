import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg text-center"
      >
        <span className="text-[150px] font-display font-bold text-secondary leading-none">404</span>
        <h1 className="font-display text-3xl font-semibold text-foreground mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back home.
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/"><Home className="w-5 h-5" /> Back to Home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
