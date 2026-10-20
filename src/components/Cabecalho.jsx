import { evento } from '../data/evento';

function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="font-bold text-primaria">{evento.nome}</span>
        <nav>
          <ul className="flex gap-4 text-sm font-medium text-slate-700">
            <li><a href="#sobre" className="hover:text-primaria min-h-[44px] flex items-center">Sobre</a></li>
            <li><a href="#programacao" className="hover:text-primaria min-h-[44px] flex items-center">Programação</a></li>
            <li><a href="#atracoes" className="hover:text-primaria min-h-[44px] flex items-center">Atrações</a></li>
            <li><a href="#inscricao" className="hover:text-primaria min-h-[44px] flex items-center">Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;