import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    const permissao = await Notification.requestPermission();

    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    const registro = await navigator.serviceWorker.ready;

    await registro.showNotification("Festival Sabores da Alta Paulista", {
      body: "O festival está chegando! Venha aproveitar os melhores pratos da região.",
      icon: "/icone-192.png",
    });

    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={ativarLembrete}
        className="border border-[#16a34a] bg-[#16a34a]/15 hover:bg-[#16a34a] text-white font-semibold py-2.5 px-6 rounded-sm text-sm transition-colors"
      >
        <span aria-hidden="true">🔔</span> Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-sm font-medium text-slate-200">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;