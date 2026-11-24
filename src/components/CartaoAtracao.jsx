export default function CartaoAtracao({ nome, especialidade, descricao }) {
  return (
    <article className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl mb-4" aria-hidden="true">
        🧑‍🍳
      </div>
      <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
      <span className="inline-block bg-red-50 text-tomate text-xs font-bold px-2.5 py-0.5 rounded-full mt-1 uppercase tracking-wider">
        {especialidade}
      </span>
      <p className="text-slate-600 text-sm mt-3 leading-relaxed">{descricao}</p>
    </article>
  );
}

