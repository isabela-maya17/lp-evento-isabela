import { programacao } from '../data/evento';

function Programacao() {
  return (
    <section id="programacao" className="bg-white px-4 py-16 scroll-mt-12">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Programação</h2>
        <ol className="space-y-4">
          {programacao.map((ativ) => (
            <li key={ativ.hora} className="flex gap-4 border-b border-slate-100 pb-3">
              <span className="font-bold text-primaria">{ativ.hora}</span>
              <span className="text-slate-700">{ativ.item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Programacao;