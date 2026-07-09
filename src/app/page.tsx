import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import MeetInstructorSection from "@/components/MeetInstructorSection";
import GlimpseGallery from "@/components/GlimpseGallery";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ClassesSection />
      <MeetInstructorSection />
      <GlimpseGallery />
    </>
  );
}
