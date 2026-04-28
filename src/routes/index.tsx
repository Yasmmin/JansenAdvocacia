import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import Lawyer from "@/components/Lawyer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jansen Advocacia — Direito Civil, Patrimonial e Sucessório" },
      {
        name: "description",
        content:
          "Advocacia estratégica em matéria civil, patrimonial e sucessória. Atendimento em Porto Alegre e em todo o Brasil.",
      },
      { property: "og:title", content: "Jansen Advocacia" },
      {
        property: "og:description",
        content:
          "Advocacia estratégica em matéria civil, patrimonial e sucessória.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
