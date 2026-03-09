import Hero from "@/components/Hero";
import MedicareEffecient from "@/components/MedicareEffecient";
import ExpertiesComponent from "@/components/ExpertiesComponent";
import KPIComponent from "@/components/KPIComponent";
import EfficiencySlider from "@/components/EfficiencySlider";
import ReasonsToChoose from "@/components/ReasonsToChoose";
import Associations from "@/components/Associations";
import Testimonials from "@/components/Testimonials";
import Specialties from "@/components/Specialties";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MedicareEffecient />
      <KPIComponent />
      <EfficiencySlider />
      <ReasonsToChoose />
      <Specialties />
      <Testimonials />
      <ExpertiesComponent />

      <Associations />

    </main>
  );
}
