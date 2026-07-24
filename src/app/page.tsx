import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechPartners from "@/components/TechPartners";
import PillarsSection from "@/components/PillarsSection";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import AIFeatures from "@/components/AIFeatures";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechPartners />
        <PillarsSection />
        <ArchitectureFlow />
        <AIFeatures />
        <InteractiveCalculator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
