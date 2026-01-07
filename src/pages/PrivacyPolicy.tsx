import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, Database, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl mb-4 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Last updated: January 8, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 lg:py-20 bg-background">
        <div className="container-custom max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-sm md:prose-base lg:prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-8 md:mb-12">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Ambey Interior, we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Information We Collect
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6 text-foreground">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    Personal Information
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We may collect personal information that you provide
                    directly to us, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                    <li>
                      Name and contact information (email address, phone number,
                      mailing address)
                    </li>
                    <li>Project details and design preferences</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Automatically Collected Information
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we may automatically collect
                    certain information about your device, including:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  How We Use Your Information
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  We use the information we collect for various purposes,
                  including:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>
                    Providing and maintaining our interior design services
                  </li>
                  <li>Processing your project requests and consultations</li>
                  <li>
                    Sending you updates, quotes, and project-related information
                  </li>
                  <li>Improving our website and service offerings</li>
                  <li>
                    Responding to your inquiries and providing customer support
                  </li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Information Sharing and Disclosure
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With third-party vendors
                    who assist us in operating our business
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with any
                    merger, sale, or acquisition
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you have given us
                    explicit permission
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties for
                  their marketing purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Data Security
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet or electronic storage
                  is 100% secure.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Your Rights
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Cookies and Tracking Technologies
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience, analyze site traffic, and understand
                  user behavior. You can control cookie settings through your
                  browser preferences.
                </p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Third-Party Links
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to review their privacy policies.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Children's Privacy
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Changes to This Privacy Policy
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the "Last updated" date.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-border">
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                Contact Us
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-2 md:space-y-3">
                <p>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong> ambeyinterior@gmail.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 8081904199
                  </li>
                  <li>
                    <strong>Address:</strong> Barabanki, Uttar Pradesh, India
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
