import handshake from "@/assets/aperto-de-maos.png";
import predio from "@/assets/predio-comercial.png";
import familia from "@/assets/familia.png";
import casa from "@/assets/casa.png";
import escudo from "@/assets/escudo.png";
import chessPiece from "@/assets/peca-de-xadrez 1.png";

type Area = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const iconClass = "w-7 h-7 text-gold";

const areas: Area[] = [
  {
    icon: (
      <img
        src={handshake}
        alt="Aperto de mãos"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Direito Civil",
    description:
      "Atuação em questões patrimoniais e obrigacionais do cotidiano, com enfoque em relações privadas, direitos, deveres e seus efeitos concretos. Abrange consultoria, estruturação jurídica e condução de litígios quando necessário.",
  },
  {
    icon: (
      <img
        src={predio}
        alt="Prédio comercial"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Direito Empresarial",
    description:
      "Assessoria jurídica voltada à atividade empresarial, com atenção à organização de negócios, relações societárias e riscos da operação. Inclui consultoria preventiva, estruturação jurídica e tratamento de controvérsias.",
  },
  {
    icon: (
      <img
        src={familia}
        alt="Família"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Inventários e Sucessões",
    description:
      "Condução de inventários judiciais e extrajudiciais, partilhas, definição de direitos hereditários e solução de impasses sucessórios. A atuação considera a dimensão patrimonial e familiar de cada caso.",
  },
  {
    icon: (
      <img
        src={casa}
        alt="Casa"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Imobiliário e Incorporações Imobiliárias",
    description:
      "Atuação em questões ligadas à propriedade, posse, aquisição, alienação, regularização e exploração econômica de imóveis. Inclui consultoria e contencioso em incorporações imobiliárias.",
  },
  {
    icon: (
      <img
        src={escudo}
        alt="Escudo"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Responsabilidade Civil",
    description:
      "Atuação em demandas envolvendo reparação de danos patrimoniais e extrapatrimoniais, em contextos contratuais ou extracontratuais. Envolve exame técnico dos fatos, do nexo causal e do prejuízo alegado.",
  },
  {
    icon: (
      <img
        src={chessPiece}
        alt="Peça de xadrez"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Demandas Estratégicas e Complexas",
    description:
      "Atuação em casos que exigem análise aprofundada, coordenação de múltiplas questões jurídicas e construção de teses cuidadosas. São demandas que pedem método, critério e direção técnica consistente.",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] tracking-[0.3em] text-gold mb-3">
            NOSSAS ESPECIALIDADES
          </p>
          <h2 className="font-kaisei text-3xl sm:text-4xl lg:text-5xl text-navy-deep font-light">
            Áreas de atuação
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {areas.map((a) => (
            <article
              key={a.title}
              className="border border-gold/40 p-7 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{a.icon}</div>
              <h3 className="font-kaisei text-xl text-navy-deep mb-3">
                {a.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}