import heroFestival from "../assets/hero-festival.jpg";
import { evento } from "../data/evento";
import BotaoLembrete from "./BotaoLembrete";

export default function Hero() {
  return (
    <section className="bg-white border-b border-cafe/15">

      {/* Foto ocupando largura total, sem ornamentos */}
      <div className="max-w-5xl mx-auto px-5 pt-8">
        <figure>
          <img
            src={heroFestival}
            alt="Mesa com frango com quiabo, pamonha, queijo e doces de abóbora no festival, com barracas e fogo de chão ao fundo"
            className="w-full max-h-[520px] object-cover object-center rounded-sm"
          />
        </figure>
      </div>

      {/* Texto editorial abaixo da foto */}
      <div className="max-w-5xl mx-auto px-5 py-10 grid gap-6 sm:grid-cols-12 sm:items-start">

        <div className="sm:col-span-8">
          {/* h1 ÚNICO DA PÁGINA (Exigência estrita do Checklist de Acessibilidade) */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cafe tracking-tight leading-[1.1]">
            {evento.nome}
          </h1>
          <p className="mt-4 text-cacau text-lg leading-relaxed">
            {evento.slogan}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#inscricao"
              className="bg-tomate hover:bg-terracota text-white font-bold py-3 px-7 rounded text-sm sm:text-base transition-colors"
            >
              Garantir Ingresso
            </a>
            <a
              href="#programacao"
              className="text-cafe font-semibold text-sm hover:text-tomate transition-colors underline underline-offset-4"
            >
              Ver programação
            </a>
          </div>

          <div className="mt-5">
            <BotaoLembrete />
          </div>
        </div>

        {/* Ficha do evento — coluna direita */}
        <aside className="sm:col-span-4 border-l border-cafe/15 pl-6 space-y-3 text-sm">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cacau">Data</p>
            <p className="mt-0.5 font-semibold text-cafe">{evento.data}</p>
            <p className="text-cacau">{evento.horario}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cacau">Local</p>
            <p className="mt-0.5 font-semibold text-cafe">{evento.local}</p>
            <p className="text-cacau">{evento.endereco}</p>
          </div>
        </aside>
      </div>

    </section>
  );
}
