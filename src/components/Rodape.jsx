import { evento } from "../data/evento";

export default function Rodape() {
  return (
    <footer className="bg-cafe text-creme border-t border-cafe/20">
      <div className="max-w-5xl mx-auto px-5 py-10 flex flex-col sm:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="font-display text-lg font-bold text-white">
            {evento.nome}
          </p>
          <p className="mt-1 text-stone-300">{evento.local}</p>
          <p className="text-stone-400">
            {evento.data} · {evento.horario}
          </p>
        </div>

        <div className="sm:text-right flex flex-col justify-between gap-2">
          <a href="#" className="text-stone-200 hover:text-white font-semibold">
            Voltar ao topo ↑
          </a>
          <p className="text-stone-400 text-xs">
            Evento fictício criado para fins didáticos.
          </p>
        </div>
      </div>
    </footer>
  );
}
