import { atracoes } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

export default function Atracoes() {
  return (
    <section id="atracoes" className="max-w-5xl mx-auto px-6 py-16" aria-labelledby="atracoes-heading">
      <h2 id="atracoes-heading" className="text-3xl font-bold text-center text-slate-800 mb-10">
        Cozinheiros e Produtores
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {atracoes.map((atracao) => (
          <CartaoAtracao 
            key={atracao.id} 
            nome={atracao.nome} 
            especialidade={atracao.especialidade} 
            descricao={atracao.descricao} 
          />
        ))}
      </div>
    </section>
  );
}
