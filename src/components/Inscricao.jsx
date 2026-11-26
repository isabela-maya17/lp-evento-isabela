import { useState } from "react";
import { ingressosInfo } from "../data/evento";

export default function Inscricao() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoIngresso, setTipoIngresso] = useState("inteira");
  const [quantidade, setQuantidade] = useState(1);

  const ingressoSelecionado =
    ingressosInfo.find((item) => item.id === tipoIngresso) || ingressosInfo[0];
  const valorTotal = ingressoSelecionado.preco * quantidade;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() && email.trim() && tipoIngresso) {
      setEnviado(true);
    }
  };

  const resetarFormulario = () => {
    setEnviado(false);
    setNome("");
    setEmail("");
    setQuantidade(1);
  };

  return (
    <section
      id="inscricao"
      className="bg-white py-16 border-b border-cafe/10"
      aria-labelledby="inscricao-heading"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="max-w-2xl mb-10">
          <h2 id="inscricao-heading" className="text-3xl font-bold text-cafe">
            Garanta sua Inscrição
          </h2>
          <p className="mt-2 text-cacau">
            Selecione o tipo de ingresso e preencha seus dados para reservar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6 border border-cafe/15 rounded-lg divide-y divide-cafe/10 bg-creme/40">
            {ingressosInfo.map((opcao) => {
              const selecionado = tipoIngresso === opcao.id;
              return (
                <button
                  key={opcao.id}
                  type="button"
                  onClick={() => {
                    setTipoIngresso(opcao.id);
                    if (enviado) setEnviado(false);
                  }}
                  aria-pressed={selecionado}
                  className={`w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer transition-colors ${
                    selecionado ? "bg-creme" : "hover:bg-creme/60"
                  }`}
                >
                  <div>
                    <p className="font-bold text-cafe flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full border ${
                          selecionado
                            ? "bg-tomate border-tomate"
                            : "border-cafe/40"
                        }`}
                        aria-hidden="true"
                      />
                      {opcao.nome}
                    </p>
                    <p className="mt-1 text-sm text-cacau pl-4.5">
                      {opcao.beneficio}
                    </p>
                  </div>
                  <span className="font-bold text-tomate shrink-0">
                    {opcao.precoFormatado}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 border border-cafe/15 rounded-lg p-6 bg-white">
            {enviado ? (
              <div role="status" className="space-y-4">
                <div className="bg-folha/10 border border-folha/30 text-folha-escura p-4 rounded font-medium">
                  Inscrição confirmada! Nos vemos no festival, <strong>{nome}</strong>.
                </div>
                <dl className="text-sm space-y-2 border-t border-cafe/10 pt-4">
                  <div className="flex justify-between">
                    <dt className="text-cacau">E-mail</dt>
                    <dd className="font-semibold text-cafe">{email}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cacau">Ingresso</dt>
                    <dd className="font-semibold text-cafe">
                      {quantidade}x {ingressoSelecionado.nome}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cacau">Total</dt>
                    <dd className="font-bold text-tomate">
                      R$ {valorTotal.toFixed(2).replace(".", ",")}
                    </dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={resetarFormulario}
                  className="w-full border border-cafe/25 hover:bg-creme text-cafe font-semibold py-2.5 px-4 rounded text-sm transition-colors cursor-pointer"
                >
                  Fazer outra inscrição
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="form-nome" className="text-sm font-bold text-cafe">
                    Nome Completo
                  </label>
                  <input
                    id="form-nome"
                    type="text"
                    required
                    autoComplete="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="border border-cafe/25 rounded px-3 py-2 text-base bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="form-email" className="text-sm font-bold text-cafe">
                    E-mail
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-cafe/25 rounded px-3 py-2 text-base bg-white"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 flex flex-col gap-1">
                    <label htmlFor="form-ingresso" className="text-sm font-bold text-cafe">
                      Tipo de Ingresso
                    </label>
                    <select
                      id="form-ingresso"
                      required
                      value={tipoIngresso}
                      onChange={(e) => setTipoIngresso(e.target.value)}
                      className="border border-cafe/25 rounded px-3 py-2 bg-white text-base"
                    >
                      {ingressosInfo.map((opcao) => (
                        <option key={opcao.id} value={opcao.id}>
                          {opcao.nome} — {opcao.precoFormatado}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="form-qtd" className="text-sm font-bold text-cafe">
                      Quantidade
                    </label>
                    <select
                      id="form-qtd"
                      value={quantidade}
                      onChange={(e) => setQuantidade(Number(e.target.value))}
                      className="border border-cafe/25 rounded px-3 py-2 bg-white text-base"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-sm border-t border-cafe/10">
                  <span className="text-cacau">Total</span>
                  <span className="text-lg font-bold text-tomate">
                    R$ {valorTotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-tomate hover:bg-terracota text-white font-bold py-3 px-6 rounded text-base transition-colors cursor-pointer"
                >
                  Confirmar Inscrição
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
