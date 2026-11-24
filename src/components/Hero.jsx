import { evento } from "../data/evento";
import BotaoLembrete from "./BotaoLembrete";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white px-6 py-20 text-center flex flex-col items-center justify-center min-h-[50vh]">
      {/* h1 ÚNICO DA PÁGINA (Exigência estrita do Checklist de Acessibilidade) */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl text-balance">
        {evento.nome}
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl">
        {evento.slogan}
      </p>
      
      {/* Ícones com aria-hidden para leitores de tela não lerem os emojis */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm font-medium text-slate-400">
        <span><span aria-hidden="true">🗓️</span> {evento.data} · {evento.horario}</span>
        <span className="hidden sm:inline" aria-hidden="true">|</span>
        <span><span aria-hidden="true">📍</span> {evento.local}</span>
      </div>
      
      <a href="#inscricao" className="mt-10 bg-tomate hover:bg-red-700 text-white font-bold py-3 px-8 rounded-sm text-base transition-colors shadow-md">
        Garantir Ingresso
      </a>

      <BotaoLembrete />
    </section>
  );
}