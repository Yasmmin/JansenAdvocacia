import speechBubble from "@/assets/balao-de-fala.png";
import backgroundInicial from "@/assets/backgroundInicial.png";
import logoInicialHorizontal from "@/assets/logoInicialHorizontal.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundInicial})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        <div className="order-2 md:order-1 mx-auto md:mx-0">
          <h1 className="font-kaisei text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-light reveal">
            Jansen
            <br />
            Advocacia
          </h1>
          <p className="mt-6 text-white/70 text-sm sm:text-base max-w-md reveal delay-100">
            Advocacia estratégica em matéria civil, patrimonial e sucessória
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start reveal delay-150">
            <a
              href="https://wa.me/555192784540?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20escrit%C3%B3rio%20e%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy-deep text-[11px] tracking-[0.2em] font-semibold hover:bg-gold-soft transition-colors"
            >
              <img src={speechBubble} alt="Balão de fala" className="w-4 h-4 object-contain" />
              ENTRE EM CONTATO
            </a>
            <a
              href="#areas"
              className="px-6 py-3 border border-white/40 text-white text-[11px] tracking-[0.2em] font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              ÁREAS DE ATUAÇÃO
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={logoInicialHorizontal}
            alt="Logo inicial"
            className="w-64 sm:w-72 lg:w-[30rem] max-w-full object-contain reveal-image delay-200"
          />
        </div>
      </div>

      <a
        href="https://wa.me/555192784540?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20escrit%C3%B3rio%20e%20gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M20.52 3.48A11.94 11.94 0 0012.04 0C5.46 0 .12 5.34.12 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.74 1.46h.01c6.58 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.45-8.42zM12.05 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 012.9 7c0 5.46-4.44 9.9-9.91 9.9zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 rotate-45 bg-white" />
    </section>
  );
}