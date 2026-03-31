import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ContactForm from "@/components/ContactForm";
import VisualSection from "@/components/VisualSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <ContactForm />
      <VisualSection />
    </main>
  );
};

export default Index;
