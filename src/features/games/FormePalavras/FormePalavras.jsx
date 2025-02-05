import { useState, useEffect } from "react";
import { MdBackspace } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router";
import BtnFimJogo from "../../../components/BtnFimJogo/BtnFimJogo";
import "./FormePalavras.css";

const palavras = [
  {
    palavra: "Gato",
    imagem:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/300/external-cat-animal-flaticons-lineal-color-flat-icons-3.png",
  },
  {
    palavra: "Casa",
    imagem:
      "https://img.icons8.com/external-ddara-lineal-color-ddara/300/external-house-real-estate-ddara-lineal-color-ddara.png",
  },
  {
    palavra: "Carro",
    imagem:
      "https://img.icons8.com/external-konkapp-outline-color-konkapp/400/external-car-transportation-konkapp-outline-color-konkapp.png",
  },
  {
    palavra: "Bola",
    imagem: "https://img.icons8.com/plasticine/700/football2.png",
  },
  {
    palavra: "Árvore",
    imagem:
      "https://img.icons8.com/external-justicon-lineal-color-justicon/500/external-tree-tree-justicon-lineal-color-justicon-8.png",
  },
];

const JogoFormarPalavras = () => {
  const [indexPalavra, setIndexPalavra] = useState(0);
  const [letras, setLetras] = useState([]);
  const [resposta, setResposta] = useState("");
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [botoesAtivos, setBotoesAtivos] = useState([]);

  const palavraAtual = palavras[indexPalavra];

  // Embaralhar as letras e reiniciar a resposta ao trocar de palavra
  useEffect(() => {
    if (!palavraAtual || !palavraAtual.palavra) return; // Verificar se palavraAtual existe
    const letrasEmbaralhadas = palavraAtual.palavra
      .split("")
      .sort(() => Math.random() - 0.5);

    setLetras(letrasEmbaralhadas);
    setResposta("");
    setBotoesAtivos(letrasEmbaralhadas.map((_, i) => i)); // Ativar todos os botões
  }, [indexPalavra, palavraAtual]); // Inclua palavraAtual como dependência

  // Adicionar letra clicada
  const handleLetraClick = (letra, index) => {
    if (
      resposta.split("").filter((l) => l === letra).length <
      letras.filter((l) => l === letra).length
    ) {
      setResposta((prev) => prev + letra);
      setBotoesAtivos((prev) => prev.filter((i) => i !== index)); // Desativar botão
    }
  };

  //Verifica se a resposta é a certa
  const verificarResposta = () => {
    if (resposta === palavraAtual.palavra) {
      if (indexPalavra < palavras.length - 1) {
        setIndexPalavra(indexPalavra + 1);
      } else {
        setJogoFinalizado(true);
      }
    } else {
      alert("Algo está errado... Tente novamente!");
    }
  };

  // Apagar a última letra
  const apagarLetra = () => {
    if (resposta.length > 0) {
      const ultimaLetra = resposta.slice(-1);
      const indexParaReativar = letras.findIndex(
        (l, i) => l === ultimaLetra && !botoesAtivos.includes(i)
      );
      if (indexParaReativar !== -1) {
        setBotoesAtivos((prev) => [...prev, indexParaReativar]); // Reativar botão
      }
      setResposta((prev) => prev.slice(0, -1)); // Remover última letra
    }
  };

  //Reinicia o Jogo
  const reiniciarJogoPalavras = () => {
    setIndexPalavra(0);
    setJogoFinalizado(false);
  };

  return (
    <div className="jogo-formar-palavras">
      
      <div className="btn-voltar">
        <Link to="/">
          <button>
            <FaAngleLeft color="black" fontSize={30} className="fa-angle-icon"/>
            Voltar
          </button>
        </Link>
      </div>

      <div className="formar-palavras-container">
        {jogoFinalizado ? (
          <BtnFimJogo jogarNovamente={reiniciarJogoPalavras} />
        ) : (
          <>
            <img
              src={palavraAtual.imagem}
              alt={palavraAtual.palavra}
              className="imagem-palavra"
            />
            <div className="letras-container">
              {letras.map((letra, index) => (
                <button
                  key={index}
                  className="btn-letra"
                  onClick={() => handleLetraClick(letra, index)}
                  disabled={!botoesAtivos.includes(index)} // Desativar botão se inativo
                >
                  {letra}
                </button>
              ))}
            </div>
            <div className="resposta-container">
              <h3>Resposta:</h3>
              <div className="letras-resposta">{resposta}</div>
              <button className="botao-apagar" onClick={apagarLetra}>
                <MdBackspace size={24} color="red" />
              </button>
            </div>
            <button className="botao-verificar" onClick={verificarResposta}>
              Verificar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default JogoFormarPalavras;
