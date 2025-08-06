import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Emergency from "@/components/Emergency";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Emergency />
      <About />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
