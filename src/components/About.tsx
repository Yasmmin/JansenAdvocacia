import fachada from "@/assets/fachada.png";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[11px] tracking-[0.3em] text-gold mb-3 reveal">SOBRE NÓS</p>
          <h2 className="font-kaisei text-3xl sm:text-4xl text-navy-deep font-light mb-6 reveal delay-100">
            Jansen Advocacia
          </h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed reveal delay-150">
            <p>
              O escritório atua em questões civis, patrimoniais e sucessórias, com leitura precisa do caso, definição de estratégia de atuação. A atuação abrange litígios, negociações e a organização jurídica de interesses patrimoniais, contratuais e sucessórios.
            </p>
            <p>
              A estrutura enxuta permite o acompanhamento direto e a leitura mais próxima de cada caso. Sob a condução do advogado e com o suporte de assessores dedicados, o escritório garante que cada demanda receba critério técnico e agilidade, mantendo o foco nas particularidades que cada situação exige.
            </p>
          </div>
          <a
            href="https://wa.me/555192784540?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20escrit%C3%B3rio%20e%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-6 py-3 mx-auto md:mx-0 border border-navy-deep text-navy-deep text-[11px] tracking-[0.2em] font-semibold hover:bg-navy-deep hover:text-white transition-colors reveal delay-200"
          >
            SABER MAIS
          </a>
        </div>
        <div className="relative reveal-image delay-150">
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold/60" />
          <img src={fachada} alt="Jansen Advocacia" className="relative w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}