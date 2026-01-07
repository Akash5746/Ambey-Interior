import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long"),
  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 8081904199", "+91 94514 86533"],
    action: "tel:+918081904199",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["akashmi5746@gmail.com", "ambeyinterio2003@gmail.com"],
    action: "mailto:akashmi5746@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Somaiya Nagar, Barabanki,", "Bahadur Pur, Uttar Pradesh 225203"],
    action: "https://maps.app.goo.gl/hMboQWKfVPb4sgjv6",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/akashmi5746@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Unable to send message",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const phoneNumber = "+918081904199";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in your interior design services. Please share more details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Let's Create Something Beautiful
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to transform your space? Get in touch with us for a free
              consultation and quote. We'd love to hear about your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-2xl text-center"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {info.action && i === 0 ? (
                      <a
                        href={info.action}
                        className="hover:text-accent transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name")}
                      className="h-12 bg-secondary border-transparent focus:border-accent"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...register("email")}
                      className="h-12 bg-secondary border-transparent focus:border-accent"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Phone Number"
                      {...register("phone")}
                      className="h-12 bg-secondary border-transparent focus:border-accent"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      {...register("subject")}
                      className="h-12 bg-secondary border-transparent focus:border-accent"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    {...register("message")}
                    className="bg-secondary border-transparent focus:border-accent resize-none"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-[500px] lg:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8!2d81.1867!3d26.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ae0a0a0a0a0a0%3A0x0!2sAmbey+Interior+Design%2C+Somaiya+Nagar%2C+Barabanki%2C+Uttar+Pradesh+225203!5e0!3m2!1sen!2sin!4v1704700000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ambey Interior Location - Somaiya Nagar, Barabanki"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
