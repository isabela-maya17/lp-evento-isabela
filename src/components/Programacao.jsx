import { programacao } from "../data/evento";

export default function Programacao() {
  return (
    <section id="programacao" className="bg-slate-50 py-16" aria-labelledby="prog-heading">
      <div className="max-w-3xl mx-auto px-6">
        <h2 id="prog-heading" className="text-3xl font-bold text-center text-slate-800 mb-10">
          Programação do Evento
        </h2>
        
        {/* Lista gerada com map (Exigência do Briefing) */}
        <div className="bg-white border border-slate-200 rounded-md divide-y divide-slate-100 shadow-xs">
          {programacao.map((item) => (
            <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
              <span className="font-bold text-tomate min-w-[90px] text-sm uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-sm text-center">
                {item.hora}
              </span>
              <p className="text-slate-700 font-medium text-base sm:text-lg">
                {item.atividade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
