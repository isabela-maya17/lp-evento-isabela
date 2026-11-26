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

    if ("serviceWorker" in navigator) {
      const registro = await navigator.serviceWorker.ready;
      await registro.showNotification("Festival Sabores da Alta Paulista", {
        body: "O festival está chegando! Venha aproveitar os melhores pratos da região.",
        icon: "/icone-192.png",
      });
    } else {
      new Notification("Festival Sabores da Alta Paulista", {
        body: "O festival está chegando! Venha aproveitar os melhores pratos da região.",
        icon: "/icone-192.png",
      });
    }

    setMensagem("Lembrete ativado!");
  }

  return (
    <div>
      <button
        type="button"
        onClick={ativarLembrete}
        className="border border-folha text-folha-escura hover:bg-folha hover:text-white font-semibold py-3 px-5 rounded text-sm transition-colors cursor-pointer"
      >
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-sm font-medium text-folha-escura">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
