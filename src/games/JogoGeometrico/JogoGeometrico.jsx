import { useEffect, useState } from "react";
import "./JogoGeometrico.css";

const formas = [
  { nome: "Círculo", imagem: "/images/formas-geometricas/circulo.png" },
  { nome: "Triângulo", imagem: "/images/formas-geometricas/triangulo.png" },
  { nome: "Quadrado", imagem: "/images/formas-geometricas/quadrado.png" },
  { nome: "Estrela", imagem: "/images/formas-geometricas/estrela.png" },
];

const JogoFormasGeometricas = () => {
    const [formaAtual, setFormaAtual] = useState(null);
    const [pontuacao, setPontuacao] = useState(0);
    const [quantidadesTentativas, setQuantidadesTentativas] = useState(0)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

  // Inicializa o jogo com uma forma aleatória
  useEffect(() => {
    gerarFormaAleatoria();
  }, []);

    // Função para gerar uma forma aleatória
    const gerarFormaAleatoria = () => {
        const randomIndex = Math.floor(Math.random() * formas.length);
        setFormaAtual(formas[randomIndex]);
    };

      // Função para lidar com o clique do botão
      const lidarEscolha = (nomeForma) => {
        setQuantidadesTentativas((prev) => prev + 1);

        if (nomeForma === formaAtual.nome) {
            setPontuacao((prev) => prev + 1);
        } else {
            alert("Tente Novamente!");
        }
        if (quantidadesTentativas + 1 === 8) {
          setJogoFinalizado(true);
        } else {
          gerarFormaAleatoria();
        }
      }

      // Reiniciar o Jogo
      const reiniciarJogo = () => {
        setPontuacao(0)
        setQuantidadesTentativas(0)
        setJogoFinalizado(false)
        gerarFormaAleatoria();
      }

  return (
    <div className="jogo_formas_container">
      <h1>Jogo das Formas Geométricas</h1>
      <p>Pontuação: {pontuacao}</p>
      
     {jogoFinalizado ? (
        <div className="mensagem_fim_jogo">
          <h2>Parabéns! Você completou o jogo!</h2>
          <button onClick={reiniciarJogo} className="btn-reiniciar">
            Jogar Novamente
          </button>
        </div>
      ) : (
        <>
          {formaAtual && (
            <div className="forma_atual">
              <img
                src={formaAtual.imagem}
                alt={formaAtual.nome}
                className="imagem-forma"
              />
              <p>Qual é a forma acima?</p>
            </div>
          )}

          <div className="opcoes_formas">
            {formas.map((forma, index) => (
              <button
                key={index}
                onClick={() => lidarEscolha(forma.nome)}
                className="btn-forma"
              >
                <img
                  src={forma.imagem}
                  alt={forma.nome}
                  className="imagem-opcao"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default JogoFormasGeometricas;
