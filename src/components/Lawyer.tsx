import lawyer from "@/assets/FotoFrancisco.png";
import pencilTool from "@/assets/ferramenta-lapis.png";
import diploma from "@/assets/diploma.png";
import pin from "@/assets/pin.png";
import speechBubble from "@/assets/balao-de-fala.png";

export default function Lawyer() {
  return (
    <section className="bg-navy-deep py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[11px] tracking-[0.3em] text-gold mb-12">
          APRESENTAÇÃO PROFISSIONAL
        </p>

        <div className="bg-navy rounded-sm p-6 lg:p-10 grid md:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start relative">
          <div className="mx-auto md:mx-0 relative reveal-image delay-150">
            <img
              src={lawyer}
              alt="Francisco Jansen"
              className="w-64 h-80 lg:w-72 lg:h-96 object-cover"
            />
            <div className="absolute -left-4 -top-4 w-3 h-3 border-t border-l border-gold" />
            <div className="absolute -right-4 -bottom-4 w-3 h-3 border-b border-r border-gold" />
          </div>

          <div>
            <h3 className="font-kaisei text-3xl text-white reveal">Francisco Jansen</h3>
            <p className="text-[11px] tracking-[0.2em] text-gold mt-1 mb-6 reveal delay-100">
              ADVOGADO
            </p>

            <ul className="space-y-2 text-sm text-white/85 mb-6">
              <li className="flex items-center gap-2">
                <img src={pencilTool} alt="Ferramenta lápis" className="w-5 h-5 object-contain" /> OAB/RS 103.774
              </li>
              <li className="flex items-center gap-2">
                <img src={diploma} alt="Diploma" className="w-5 h-5 object-contain" /> Pós graduado em direito e processo civil
              </li>
              <li className="flex items-center gap-2">
                <img src={pin} alt="Pin" className="w-5 h-5 object-contain" /> Porto Alegre | Atendimento em todo o Brasil
              </li>
            </ul>

            <div className="space-y-4 text-sm text-white/75 leading-relaxed reveal delay-100">
              <p>
                Advogado com atuação em matéria civil, patrimonial, empresarial e imobiliária, com foco em disputas contratuais, contencioso estratégico e planejamento patrimonial e sucessório. Assessora famílias, profissionais liberais e empresas em questões patrimoniais, contratuais e sucessórias, tanto na estruturação preventiva quanto na condução de litígios.
              </p>
              <p>
                Professor de Direito Civil na Universidade Luterana do Brasil (ULBRA), participa de grupos de estudo em Análise Econômica do Direito e Economia Comportamental e desenvolve publicações no campo da teoria da decisão. Sua atuação articula prática jurídica, pesquisa e docência.
              </p>
            </div>

            <a
              href="https://wa.me/555192784540?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20escrit%C3%B3rio%20e%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 mx-auto md:mx-0 bg-gold text-navy-deep text-[11px] tracking-[0.2em] font-semibold hover:bg-gold-soft transition-colors reveal delay-200"
            >
              <img src={speechBubble} alt="Balão de fala" className="w-4 h-4 object-contain" />
              ENTRE EM CONTATO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
