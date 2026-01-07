import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Scale,
  Ban,
  RefreshCw,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const TermsAndConditions = () => {
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
              <Scale className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-6">
              Terms and Conditions
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
                Welcome to Ambey Interior. These Terms and Conditions govern
                your use of our website and services. By accessing our website
                or engaging our services, you agree to be bound by these terms.
                Please read them carefully.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Acceptance of Terms
                </h2>
              </div>

              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  By using our website or services, you confirm that you accept
                  these Terms and Conditions and agree to comply with them. If
                  you do not agree with any part of these terms, you must not
                  use our website or services.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground m-0">
                  Our Services
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  Ambey Interior provides interior design and related services,
                  including but not limited to:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>Modular kitchen design and installation</li>
                  <li>Bedroom interior design</li>
                  <li>Living room and office interior design</li>
                  <li>False ceiling and 3D interior design services</li>
                  <li>Consultation and project management</li>
                </ul>
              </div>
            </div>

            {/* Project Agreement */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Project Agreement
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    Quotations and Estimates
                  </h3>
                  <p>
                    All quotations are valid for 30 days from the date of issue.
                    Prices are subject to change based on material costs,
                    project scope modifications, and market conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    Project Scope
                  </h3>
                  <p>
                    The scope of work will be clearly defined in a written
                    agreement. Any changes to the agreed scope may result in
                    additional costs and timeline adjustments.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    Timeline
                  </h3>
                  <p>
                    Project timelines are estimates and may be affected by
                    factors beyond our control, including material availability,
                    weather conditions, and site accessibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Payment Terms
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  Payment terms will be specified in your project agreement.
                  Typically, our payment structure includes:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>
                    <strong>Initial Deposit:</strong> A percentage of the total
                    project cost upon signing the agreement
                  </li>
                  <li>
                    <strong>Progress Payments:</strong> Staged payments based on
                    project milestones
                  </li>
                  <li>
                    <strong>Final Payment:</strong> Due upon project completion
                    and your approval
                  </li>
                </ul>
                <p className="mt-4">
                  Late payments may incur additional charges. We reserve the
                  right to suspend work if payments are not received as agreed.
                </p>
              </div>
            </div>

            {/* Cancellation and Refunds */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Cancellation and Refunds
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>Cancellations must be made in writing</li>
                  <li>
                    Deposits are non-refundable once design work has commenced
                  </li>
                  <li>
                    If you cancel after materials have been ordered, you will be
                    responsible for those costs
                  </li>
                  <li>
                    Work completed up to the cancellation date will be charged
                    at the agreed rates
                  </li>
                  <li>
                    Refunds, if applicable, will be processed within 14 business
                    days
                  </li>
                </ul>
              </div>
            </div>

            {/* Warranties */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Warranties and Guarantees
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>
                    We provide a warranty on our workmanship as specified in
                    your project agreement
                  </li>
                  <li>
                    Manufacturer warranties apply to materials and appliances
                  </li>
                  <li>
                    Warranties do not cover damage resulting from misuse, normal
                    wear and tear, or unauthorized modifications
                  </li>
                  <li>
                    Claims must be made in writing within the warranty period
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground m-0">
                  Client Responsibilities
                </h2>
              </div>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>As our client, you agree to:</p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1.5 md:space-y-2">
                  <li>
                    Provide accurate information about your project requirements
                  </li>
                  <li>Ensure site accessibility for our team and materials</li>
                  <li>
                    Obtain necessary approvals and permissions from property
                    owners or authorities
                  </li>
                  <li>
                    Make timely decisions regarding design choices and material
                    selections
                  </li>
                  <li>Maintain clear communication throughout the project</li>
                  <li>Secure your property and valuables during the project</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Intellectual Property
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  All design concepts, drawings, and specifications created by
                  Ambey Interior remain our intellectual property unless
                  otherwise agreed in writing. You may not reproduce or share
                  these designs without our permission.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Limitation of Liability
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  To the fullest extent permitted by law, Ambey Interior shall
                  not be liable for any indirect, incidental, special, or
                  consequential damages arising from our services. Our total
                  liability shall not exceed the amount paid for the specific
                  service giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Force Majeure */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Force Majeure
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  We shall not be liable for any failure or delay in performing
                  our obligations due to circumstances beyond our reasonable
                  control, including but not limited to natural disasters,
                  pandemics, strikes, or government actions.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Dispute Resolution
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  Any disputes arising from these terms or our services shall be
                  resolved through good faith negotiation. If negotiation fails,
                  disputes shall be subject to the exclusive jurisdiction of the
                  courts in Barabanki, Uttar Pradesh, India.
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Privacy
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Your use of our services is also governed by our Privacy
                  Policy. Please review it to understand how we collect, use,
                  and protect your personal information.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                Changes to These Terms
              </h2>

              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to modify these Terms and Conditions at
                  any time. Changes will be effective immediately upon posting
                  to our website. Your continued use of our services constitutes
                  acceptance of the modified terms.
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
                  If you have any questions about these Terms and Conditions,
                  please contact us:
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

export default TermsAndConditions;
