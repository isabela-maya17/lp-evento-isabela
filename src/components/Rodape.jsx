import { evento } from "../data/evento";

export default function Rodape() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800 px-6 py-10 text-center text-sm">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        <p className="font-bold text-white text-base">{evento.nome}</p>
        <p>📍 {evento.local}</p>
        
        <p className="text-slate-300 mt-4 text-xs">
          Evento fictício criado para fins didáticos.
        </p>
      </div>
    </footer>
  );
}