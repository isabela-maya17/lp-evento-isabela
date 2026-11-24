import { useState } from "react";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <a href="#" className="text-xl font-bold text-tomate tracking-tight">Festival Sabores</a>
          <button 
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            className="sm:hidden text-slate-600 border border-slate-200 p-1.5 px-3 text-sm font-bold cursor-pointer"
          >
            {menuAberto ? "Fechar ✕" : "Menu ☰"}
          </button>
        </div>
        <nav id="menu-principal" className={`${menuAberto ? "block" : "hidden"} sm:block w-full sm:w-auto`}>
          <ul className="flex flex-col sm:flex-row text-center gap-4 sm:gap-6 text-sm font-semibold text-slate-600">
            <li><a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-tomate block py-1">Sobre</a></li>
            <li><a href="#programacao" onClick={() => setMenuAberto(false)} className="hover:text-tomate block py-1">Programação</a></li>
            <li><a href="#atracoes" onClick={() => setMenuAberto(false)} className="hover:text-tomate block py-1">Atrações</a></li>
            <li><a href="#inscricao" onClick={() => setMenuAberto(false)} className="hover:text-tomate block py-1">Inscrição</a></li>
            <li><a href="#duvidas" onClick={() => setMenuAberto(false)} className="hover:text-tomate block py-1">Dúvidas</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}