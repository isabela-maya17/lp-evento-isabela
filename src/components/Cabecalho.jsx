import { useState } from "react";
import { evento } from "../data/evento";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#atracoes", label: "Atrações" },
  { href: "#ingressos-dados", label: "Lotes" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-creme sticky top-0 z-50 border-b border-cafe/15">
      <div className="max-w-5xl mx-auto px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="#" className="font-display text-xl font-bold text-tomate tracking-tight">
            {evento.nomeCurto}
          </a>

          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            className="md:hidden text-cafe border border-cafe/25 rounded px-3 py-1.5 text-sm font-semibold cursor-pointer"
          >
            {menuAberto ? "Fechar ✕" : "Menu ☰"}
          </button>
        </div>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${menuAberto ? "block" : "hidden"} md:flex md:items-center md:gap-7 w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm font-semibold text-cafe/80">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="block py-1.5 md:py-0 hover:text-tomate transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#inscricao"
            onClick={() => setMenuAberto(false)}
            className="mt-3 md:mt-0 inline-block text-center w-full md:w-auto bg-tomate hover:bg-terracota text-white text-sm font-bold px-4 py-2 rounded transition-colors"
          >
            Ingressos
          </a>
        </nav>
      </div>
    </header>
  );
}
