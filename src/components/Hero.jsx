import { evento } from '../data/evento';

function Hero() {
  return (
    <section className="bg-primaria px-4 py-20 text-center text-white">
      <h1 className="text-4xl font-extrabold sm:text-5xl">{evento.nome}</h1>
      <p className="mt-4 text-lg text-slate-100">De {evento.data}, na {evento.local}.</p>
      <div className="mt-8">
        <a href="#inscricao" className="inline-block rounded-lg bg-destaque px-6 py-3 font-bold text-slate-900 transition hover:scale-105 min-h-[44px]">
          Garantir minha vaga
        </a>
      </div>
    </section>
  );
}

export default Hero;