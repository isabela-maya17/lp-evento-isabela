import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Grafico from "./components/Grafico";
import Inscricao from "./components/Inscricao";
import Faq from "./components/Faq";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      
      <Cabecalho />
      
      <main id="conteudo-principal" tabIndex="-1">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Grafico />
        <Inscricao />
        <Faq />
      </main>
      
      <Rodape />
    </>
  );
}

export default App;