import { useState } from 'react';

function Inscricao() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <section id="inscricao" className="bg-white px-4 py-16 text-center scroll-mt-12">
        <div className="mx-auto max-w-md rounded-xl bg-emerald-50 p-6 border border-emerald-200">
          <p role="status" className="text-lg font-bold text-emerald-800">
            Pronto! Vamos avisar {email} sobre as novidades da feira.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="bg-white px-4 py-16 scroll-mt-12">
      <div className="mx-auto max-w-md rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Inscrição Gratuita</h2>
        <form onSubmit={enviar} className="space-y-4">
          <label className="block">
            <span className="block text-sm font-semibold text-slate-700 mb-1">E-mail</span>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-primaria focus:outline-none min-h-[44px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-primaria py-3 font-bold text-white transition hover:bg-blue-700 min-h-[44px]"
          >
            Quero receber informações
          </button>
        </form>
      </div>
    </section>
  );
}

export default Inscricao;