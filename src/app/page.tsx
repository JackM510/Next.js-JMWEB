import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
    </main>
  );
}
