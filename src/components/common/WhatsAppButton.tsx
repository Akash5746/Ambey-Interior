import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "918081904199";
  const message = encodeURIComponent(
    "Hello! I'm interested in your interior design services. Please share more details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full" />
    </motion.a>
  );
};

export default WhatsAppButton;
