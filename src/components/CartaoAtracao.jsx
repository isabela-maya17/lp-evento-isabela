export default function CartaoAtracao({
  nome,
  especialidade,
  descricao,
  pratoAssinatura,
  origem,
  imagem,
}) {
  return (
    <article className="bg-creme/50 border border-cafe/15 rounded-lg overflow-hidden flex flex-col h-full">
      <img
        src={imagem}
        alt={`${pratoAssinatura}, especialidade de ${nome}`}
        loading="lazy"
        className="w-full aspect-square object-cover border-b border-cafe/10"
      />

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-tomate">
          {especialidade}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold text-cafe">
          {nome}
        </h3>
        <p className="mt-2 text-cacau text-sm leading-relaxed flex-1">
          {descricao}
        </p>
        <p className="mt-3 pt-3 border-t border-cafe/10 text-xs text-cacau">
          <strong className="text-cafe">{pratoAssinatura}</strong> · {origem}
        </p>
      </div>
    </article>
  );
}
