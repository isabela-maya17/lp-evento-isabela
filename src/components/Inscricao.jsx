import { useState } from "react";

export default function Inscricao() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoIngresso, setTipoIngresso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && tipoIngresso) {
      setEnviado(true);
    }
  };

  return (
    <section id="inscricao" className="max-w-xl mx-auto px-6 py-12" aria-labelledby="inscricao-heading">
      <h2 id="inscricao-heading" className="text-3xl font-bold text-center text-slate-800 mb-6">
        Garanta sua Inscrição
      </h2>

      {enviado ? (
        <div role="status" className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md text-center font-medium">
          🎉 Inscrição realizada com sucesso! Nos vemos no festival, {nome}.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="form-nome" className="text-sm font-bold text-slate-700">
              Nome Completo
            </label>
            <input
              id="form-nome"
              type="text"
              required
              autoComplete="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-slate-300 rounded-sm p-2 text-base"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="form-email" className="text-sm font-bold text-slate-700">
              E-mail
            </label>
            <input
              id="form-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-slate-300 rounded-sm p-2 text-base"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="form-ingresso" className="text-sm font-bold text-slate-700">
              Tipo de Ingresso
            </label>
            <select
              id="form-ingresso"
              required
              value={tipoIngresso}
              onChange={(e) => setTipoIngresso(e.target.value)}
              className="border border-slate-300 rounded-sm p-2 bg-white text-base"
            >
              <option value="">Selecione uma opção...</option>
              <option value="inteira">Inteira — R$ 40,00</option>
              <option value="meia">Meia Inscrição — R$ 20,00</option>
              <option value="solidario">Social (1kg de alimento) — R$ 25,00</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 bg-tomate text-white font-bold py-3 px-6 rounded-sm text-base transition-colors hover:bg-red-700 cursor-pointer"
          >
            Confirmar Inscrição
          </button>
        </form>
      )}
    </section>
  );
}