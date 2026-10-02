import Banar from "@/features/home/Banar";
import About from "@/features/home/components/About";
import AiSection from "@/features/home/components/AiSection";
import CardsTow from "@/features/home/components/CardsTow";
import ForDoc from "@/features/home/components/ForDoc";
import Hero from "@/features/home/components/hero/hero";
import HowItWork from "@/features/home/components/HowItWork";
import PlatformFeture from "@/features/home/components/PlatformFeture";
import SlutionShifaa from "@/features/home/components/SlutionShifaa";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Banar />
      <CardsTow />
      <SlutionShifaa />
      <HowItWork />
      <PlatformFeture />
      <AiSection />
      <ForDoc />
      <About />
    </main>
  );
}
