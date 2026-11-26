import { destaques } from "../data/evento";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white py-16 border-b border-cafe/10"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 id="sobre-heading" className="text-3xl font-bold text-cafe">
            O Festival
          </h2>
          <p className="mt-4 text-cacau text-lg leading-relaxed">
            Vinte barracas de restaurantes, produtores rurais e cozinheiros da região se reúnem com aulas-show e uma competição gastronômica utilizando ingredientes tradicionais da nossa terra.
          </p>
        </div>

        {/* Números de destaque gerados via map (Exigência do Briefing) */}
        <div className="mt-10 border-t border-b border-cafe/15 divide-y sm:divide-y-0 sm:divide-x divide-cafe/15 grid sm:grid-cols-3">
          {destaques.map((item, index) => (
            <article key={item.texto} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <p
                className={`font-display text-5xl font-extrabold leading-none ${
                  index === 1 ? "text-folha" : "text-tomate"
                }`}
              >
                {item.numero}
              </p>
              <h3 className="mt-3 text-sm font-bold text-cafe uppercase tracking-wider">
                {item.texto}
              </h3>
              <p className="mt-1 text-sm text-cacau">{item.detalhe}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
