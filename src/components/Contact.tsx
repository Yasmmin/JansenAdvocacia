import speechBubble from "@/assets/balao-de-fala.png";

export default function Contact() {
  return (
    <section id="contato" className="bg-navy-deep py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.3em] text-gold mb-3">
          ENTRE EM CONTATO
        </p>
        <h2 className="font-kaisei text-3xl sm:text-4xl text-white font-light mb-4">
          Como podemos ajudar?
        </h2>
        <p className="text-sm text-white/70 mb-10">
          Estamos prontos para ouvir sua demanda e oferecer a orientação jurídica que você precisa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/555192784540?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20escrit%C3%B3rio%20e%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gold text-navy-deep text-[11px] tracking-[0.2em] font-semibold hover:bg-gold-soft transition-colors"
          >
            ATENDIMENTO VIA WHATSAPP
          </a>
          <a
            href="tel:+555121171862"
            className="px-6 py-3 border border-white/40 text-white text-[11px] tracking-[0.2em] font-semibold hover:border-gold hover:text-gold transition-colors"
          >
            LIGAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
}