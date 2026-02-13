import { HeroSection } from "@/components/sections/HeroSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <ServicesPreview />
      <TeamPreview />
      <BlogPreview />
      <CTASection
        title="¿Listo para dar el primer paso?"
        description="Agenda una cita de valoración con nuestro equipo de especialistas."
        buttonText="Agendar Cita"
        buttonHref="/contacto"
      />
    </>
  );
}
