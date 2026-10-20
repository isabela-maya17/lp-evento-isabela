import { atracoes } from '../data/evento';
import CartaoAtracao from './CartaoAtracao';

function Atracoes() {
  return (
    <section id="atracoes" className="bg-fundo px-4 py-16 scroll-mt-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Atrações Confirmadas</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atracoes.map((autor) => (
            <CartaoAtracao 
              key={autor.nome} 
              nome={autor.nome} 
              genero={autor.genero} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atracoes;