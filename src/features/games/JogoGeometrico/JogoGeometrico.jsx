import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router";
import "./JogoGeometrico.css";
import BtnFimJogo from "../../../components/BtnFimJogo/BtnFimJogo";

const formas = [
  { nome: "Círculo", imagem: "https://img.icons8.com/sf-regular/400/FA5252/circled.png"},
  { nome: "Triângulo", imagem: "https://img.icons8.com/windows/400/FAB005/triangle-stroked.png" },
  { nome: "Quadrado", imagem: "https://img.icons8.com/windows/400/228BE6/maximize-button.png" },
  { nome: "Estrela", imagem: "https://img.icons8.com/windows/400/7950F2/star--v1.png" },
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
      
      <div className="btn-voltar">
        <Link to="/">
          <button>
            <FaAngleLeft color="black" fontSize={30} className="fa-angle-icon"/>
            Voltar
          </button>
        </Link>
      </div>


      <div className="jogo_formas_section">
        <h1>Jogo das Formas Geométricas</h1>
        <p>Pontuação: {pontuacao}</p>
        
          {jogoFinalizado ? (
          <BtnFimJogo jogarNovamente={reiniciarJogo} />
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
    </div>
  );
};

export default JogoFormasGeometricas;
