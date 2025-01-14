import { useState, useEffect } from "react";
import { MdBackspace } from 'react-icons/md'; 
import "./FormePalavras.css";

const palavras = [
  {
    palavra: "Gato",
    imagem: "/images/formar-palavras/gato.png",
  },
  {
    palavra: "Casa",
    imagem: "/images/formar-palavras/casa.png",
  },
  {
    palavra: "Carro",
    imagem: "/images/formar-palavras/carro.png",
  },
  {
    palavra: "Bola",
    imagem: "/images/formar-palavras/bola.png",
  },
  {
    palavra: "Árvore",
    imagem: "/images/formar-palavras/arvore.png",
  },
];

const JogoFormarPalavras  = () => {
    const [indexPalavra, setIndexPalavra] = useState(0);
    const [letras, setLetras] = useState([]);
    const [resposta, setResposta] = useState("");
    const [jogoFinalizado, setJogoFinalizado] = useState(false);
  
    const palavraAtual = palavras[indexPalavra];
    
    // Embaralhar as letras e reiniciar a resposta ao trocar de palavra
    useEffect(() => {
      const letrasEmbaralhadas = palavraAtual.palavra
        .split("")
        .sort(() => Math.random() - 0.5);
      setLetras(letrasEmbaralhadas);
      setResposta("");
    }, [indexPalavra]);
    
     // Adicionar letra clicada
    const handleLetraClick = (letra) => {
        if (
            resposta.split("").filter((l) => l === letra).length <
            letras.filter((l) => l === letra).length
          ) {
            setResposta((prev) => prev + letra);
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
        alert("Tente novamente!");
      }
    };

    // Apagar a última letra
    const apagarLetra = () => {
        if (resposta.length > 0) {
            setResposta((prev) => prev.slice(0, -1));
          }
    };
    
    //Reinicia o Jogo
    const reiniciarJogoPalavras = () => {
      setIndexPalavra(0);
      setJogoFinalizado(false);
    };
      
  return (
    <div className="jogo-formar-palavras">
      {jogoFinalizado ? (

        <div className="parabens-container">
          <h2>Parabéns, você completou o jogo!</h2>
          <button onClick={reiniciarJogoPalavras}>Jogar Novamente</button>
        </div>

      ) : (
        <>
          <img src={palavraAtual.imagem} alt={palavraAtual.palavra} className="imagem-palavra"/>

          <div className="letras-container">
            {letras.map((letra, index) => (
              <button key={index}
               className="btn-letra" 
               onClick={() => handleLetraClick(letra)}
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
  );
};

export default JogoFormarPalavras;
