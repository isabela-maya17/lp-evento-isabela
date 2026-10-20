import { evento } from '../data/evento';

function Rodape() {
  return (
    <footer className="bg-slate-900 px-4 py-8 text-center text-sm text-slate-400">
      <p>{evento.nome} · {evento.data}</p>
    </footer>
  );
}

export default Rodape;