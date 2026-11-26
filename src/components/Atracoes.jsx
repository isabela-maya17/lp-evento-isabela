import { atracoes } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";
import imgCaipira from "../assets/atracao-caipira.jpg";
import imgChurrasco from "../assets/atracao-churrasco.jpg";
import imgConfeitaria from "../assets/atracao-confeitaria.jpg";
import imgProdutor from "../assets/atracao-produtor.jpg";

const imagensAtracoes = {
  caipira: imgCaipira,
  churrasco: imgChurrasco,
  confeitaria: imgConfeitaria,
  produtor: imgProdutor,
};

export default function Atracoes() {
  return (
    <section
      id="atracoes"
      className="bg-white py-16 border-b border-cafe/10"
      aria-labelledby="atracoes-heading"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 id="atracoes-heading" className="text-3xl font-bold text-cafe">
            Cozinheiros e Produtores
          </h2>
          <p className="mt-2 text-cacau">
            Quem estará nas barracas e na cozinha ao vivo durante os três dias.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {atracoes.map((atracao) => (
            <CartaoAtracao
              key={atracao.id}
              nome={atracao.nome}
              especialidade={atracao.especialidade}
              descricao={atracao.descricao}
              pratoAssinatura={atracao.pratoAssinatura}
              origem={atracao.origem}
              imagem={imagensAtracoes[atracao.imagemKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
