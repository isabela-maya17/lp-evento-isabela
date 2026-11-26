import { useEffect, useRef } from "react";
import { lotesGrafico } from "../data/evento";

function Grafico() {
  const canvasRef = useRef(null);
  const totalVendidos = lotesGrafico.reduce((acc, item) => acc + item.valor, 0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const larguraLogica = 540;
    const alturaLogica = 200;

    canvas.width = larguraLogica * dpr;
    canvas.height = alturaLogica * dpr;
    ctx.scale(dpr, dpr);

    const maior = Math.max(...lotesGrafico.map((d) => d.capacidade));
    const inicioX = 92;
    const larguraMaxBarra = 310;
    const alturaBarra = 30;
    const espacoY = 56;
    const inicioY = 20;

    ctx.clearRect(0, 0, larguraLogica, alturaLogica);

    // Linhas verticais de referência
    ctx.strokeStyle = "#e7e5e4";
    ctx.lineWidth = 1;
    [0, 50, 100, 150].forEach((marca) => {
      const x = inicioX + (marca / maior) * larguraMaxBarra;
      ctx.beginPath();
      ctx.moveTo(x, 12);
      ctx.lineTo(x, alturaLogica - 26);
      ctx.stroke();

      ctx.fillStyle = "#57534e";
      ctx.font = "500 11px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(String(marca), x, alturaLogica - 8);
    });

    lotesGrafico.forEach((item, i) => {
      const y = inicioY + i * espacoY;
      const larguraTrilha = (item.capacidade / maior) * larguraMaxBarra;
      const larguraValor = (item.valor / maior) * larguraMaxBarra;

      ctx.fillStyle = "#1c1917";
      ctx.font = "700 14px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(item.rotulo, 8, y + 20);

      // Fundo da capacidade do lote
      ctx.fillStyle = "#fefce8";
      ctx.fillRect(inicioX, y, larguraTrilha, alturaBarra);
      ctx.strokeStyle = "#e7e5e4";
      ctx.strokeRect(inicioX, y, larguraTrilha, alturaBarra);

      // Barra de vendas
      ctx.fillStyle = item.cor;
      ctx.fillRect(inicioX, y, larguraValor, alturaBarra);

      ctx.fillStyle = "#1c1917";
      ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(
        `${item.valor} / ${item.capacidade}`,
        inicioX + larguraTrilha + 12,
        y + 20
      );
    });
  }, []);

  return (
    <section
      id="ingressos-dados"
      className="bg-creme py-16 border-b border-cafe/10"
      aria-labelledby="grafico-heading"
    >
      <div className="max-w-5xl mx-auto px-5 grid gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <h2 id="grafico-heading" className="text-3xl font-bold text-cafe">
            Ingressos vendidos por lote
          </h2>
          <p className="mt-3 text-cacau leading-relaxed">
            Até agora foram confirmados <strong className="text-cafe">{totalVendidos} ingressos</strong> entre os três lotes disponíveis.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-cafe">
            {lotesGrafico.map((lote) => (
              <li key={lote.rotulo} className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rounded-xs shrink-0"
                  style={{ backgroundColor: lote.cor }}
                  aria-hidden="true"
                />
                <span className="font-semibold">{lote.rotulo}:</span>
                <span className="text-cacau">
                  {lote.valor} de {lote.capacidade} vendidos
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 bg-white border border-cafe/15 rounded-lg p-5">
          <canvas
            ref={canvasRef}
            style={{ width: "100%", maxWidth: "540px", height: "auto", aspectRatio: "540 / 200" }}
            role="img"
            aria-label="Gráfico de barras de ingressos vendidos por lote: 1º Lote com 120 de 150 ingressos, 2º Lote com 80 de 150 ingressos e VIP com 45 de 60 ingressos."
            className="block"
          />
        </div>
      </div>
    </section>
  );
}

export default Grafico;
