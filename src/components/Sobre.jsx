import { destaques } from "../data/evento";

export default function Sobre() {
  return (
    <section id="sobre" className="max-w-4xl mx-auto px-6 py-16 text-center" aria-labelledby="sobre-heading">
      <h2 id="sobre-heading" className="text-3xl font-bold text-slate-800 mb-6">O Festival</h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Vinte barracas de restaurantes, produtores rurais e cozinheiros da região se reúnem com aulas-show e uma competição gastronômica incrível utilizando ingredientes tradicionais da nossa terra.
      </p>
      
      {/* Números de destaque gerados via map (Exigência do Briefing) */}
      <div className="grid gap-8 sm:grid-cols-3 mt-12">
        {destaques.map((item) => (
          <article key={item.texto} className="bg-slate-50 p-6 rounded-md border border-slate-100 shadow-xs">
            <p className="text-4xl font-extrabold text-tomate mb-2">{item.numero}</p>
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{item.texto}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
