function CartaoAtracao({ nome, genero }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900">{nome}</h3>
      <p className="text-slate-600 mt-1">{genero}</p>
    </article>
  );
}

export default CartaoAtracao;