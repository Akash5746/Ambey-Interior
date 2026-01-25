import Layout from "@/components/layout/Layout";
import HeroSection_2 from "@/components/home/HeroSection_2";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection_2 />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
