import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "1º Lote", valor: 120 },
  { rotulo: "2º Lote", valor: 80 },
  { rotulo: "VIP", valor: 200 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 14px sans-serif";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220;
      const y = 20 + i * 50;

      
      ctx.fillStyle = "#dc2626";
      ctx.fillRect(110, y, largura, 30);

      
      ctx.fillStyle = "#0f172a";
      ctx.fillText(item.rotulo, 10, y + 20);
      ctx.fillText(item.valor, 110 + largura + 8, y + 20);
    });
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl font-bold text-slate-900">
        Ingressos vendidos por lote
      </h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras de ingressos vendidos por lote: 1º Lote com 120 ingressos, 2º Lote com 80 ingressos e VIP com 45 ingressos."
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;