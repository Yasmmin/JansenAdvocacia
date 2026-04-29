import { useScrollReveal } from "@/hooks/useScrollReveal";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lawyer from "@/components/Lawyer";

export default function App() {
  useScrollReveal();

  return (
    <div className="bg-white text-navy-deep font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Areas />
        <Lawyer />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
