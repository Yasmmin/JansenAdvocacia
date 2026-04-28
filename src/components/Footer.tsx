import logoHeader from "@/assets/logoHeader.png";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center md:justify-items-stretch text-center md:text-left text-white/80 text-sm reveal delay-100">
        <div className="md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
            <img src={logoHeader} alt="Jansen Advocacia" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Rigor técnico e visão estratégica na construção de soluções jurídicas.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Navegação</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#inicio" className="hover:text-gold">Início</a></li>
            <li><a href="#areas" className="hover:text-gold">Áreas de atuação</a></li>
            <li><a href="#sobre" className="hover:text-gold">Equipe</a></li>
            <li><a href="#sobre" className="hover:text-gold">Sobre Nós</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Contato</h4>
          <ul className="space-y-2 text-white/70">
            <li>📍 R. Mostardeiro, 366 - Conj 501 - Moinhos de Vento - Porto Alegre/RS</li>
            <li>📞 +55 51 9270-4540</li>
            <li>✉ contato@jansenadvocacia.com.br</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}