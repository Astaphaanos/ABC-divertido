import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router";
import "./JogoGeometrico.css";
import BtnFimJogo from "../../../components/BtnFimJogo/BtnFimJogo";

const formas = [
  { nome: "Círculo", imagem: "https://img.icons8.com/sf-regular/400/FA5252/circled.png" },
  { nome: "Triângulo", imagem: "https://img.icons8.com/windows/400/FAB005/triangle-stroked.png" },
  { nome: "Quadrado", imagem: "https://img.icons8.com/windows/400/228BE6/maximize-button.png" },
  { nome: "Estrela", imagem: "https://img.icons8.com/windows/400/7950F2/star--v1.png" },
];

const JogoFormasGeometricas = () => {
  const [indiceFormaAtual, setIndiceFormaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [formasEmbaralhadas, setFormasEmbaralhadas] = useState([]);

  // Função para embaralhar as formas aleatoriamente
  const embaralharFormas = () => {
    const formasShuffled = [...formas].sort(() => Math.random() - 0.5);
    setFormasEmbaralhadas(formasShuffled);
    setIndiceFormaAtual(0);
  };

  // Embaralha as formas no início do jogo
  useEffect(() => {
    embaralharFormas();
  }, []);

  // Função para lidar com a escolha do usuário
  const lidarEscolha = (nomeForma) => {
    if (!formasEmbaralhadas.length) return; // Evita erro se ainda não há formas embaralhadas

    if (nomeForma === formasEmbaralhadas[indiceFormaAtual].nome) {
      setPontuacao((prev) => prev + 1);
    } else {
      alert("Tente Novamente!");
    }

    if (indiceFormaAtual + 1 === formasEmbaralhadas.length) {
      setJogoFinalizado(true);
    } else {
      setIndiceFormaAtual((prev) => prev + 1);
    }
  };

  // Reinicia o jogo com uma nova ordem aleatória de imagens
  const reiniciarJogo = () => {
    setPontuacao(0);
    setJogoFinalizado(false);
    embaralharFormas();
  };

  return (
    <div className="jogo_formas_container">
      <div className="btn-voltar">
        <Link to="/">
          <button>
            <FaAngleLeft color="black" fontSize={30} className="fa-angle-icon" />
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
            {formasEmbaralhadas.length > 0 && (
              <div className="forma_atual">
                <img
                  src={formasEmbaralhadas[indiceFormaAtual]?.imagem}
                  alt={formasEmbaralhadas[indiceFormaAtual]?.nome}
                  className="imagem-forma"
                />
                <p>Qual é a forma acima?</p>
              </div>
            )}
            <div className="opcoes_formas">
              {formasEmbaralhadas.length > 0 &&
                formasEmbaralhadas.map((forma, index) => (
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
