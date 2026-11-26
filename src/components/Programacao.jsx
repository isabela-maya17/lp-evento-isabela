import { useState } from "react";
import { programacao } from "../data/evento";

const diasFiltro = ["Todos", "Sexta", "Sábado", "Domingo"];

export default function Programacao() {
  const [diaAtivo, setDiaAtivo] = useState("Todos");

  const itensFiltrados =
    diaAtivo === "Todos"
      ? programacao
      : programacao.filter((item) => item.dia === diaAtivo);

  return (
    <section
      id="programacao"
      className="bg-creme py-16 border-b border-cafe/10"
      aria-labelledby="prog-heading"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 id="prog-heading" className="text-3xl font-bold text-cafe">
              Programação do Evento
            </h2>
            <p className="mt-2 text-cacau">
              Horários das aulas-show, competições e música ao vivo.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar programação por dia"
          >
            {diasFiltro.map((dia) => {
              const ativo = diaAtivo === dia;
              return (
                <button
                  key={dia}
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => setDiaAtivo(dia)}
                  className={`px-3.5 py-1.5 rounded text-sm font-semibold border transition-colors cursor-pointer ${
                    ativo
                      ? "bg-tomate text-white border-tomate"
                      : "bg-white text-cafe border-cafe/20 hover:border-tomate"
                  }`}
                >
                  {dia}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista gerada com map (Exigência do Briefing) */}
        <div className="mt-8 bg-white border border-cafe/15 rounded-lg divide-y divide-cafe/10">
          {itensFiltrados.map((item) => (
            <div
              key={item.id}
              className="p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
            >
              <div className="sm:w-32 shrink-0">
                <span className="inline-block font-bold text-sm text-tomate bg-creme border border-tomate/20 px-2.5 py-1 rounded">
                  {item.hora}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-cafe">
                  {item.atividade}
                </h3>
                <p className="text-sm text-cacau mt-0.5">{item.descricao}</p>
              </div>

              <div className="text-xs font-semibold text-folha-escura sm:text-right shrink-0">
                {item.palco}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
