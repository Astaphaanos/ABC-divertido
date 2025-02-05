import { useState, useEffect } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router";
import BtnFimJogo from '../../../components/BtnFimJogo/BtnFimJogo';
import './JogoMemoria.css';


const images = [
    { id: 1, src:'https://img.icons8.com/plasticine/400/dog.png', matched: false },
    { id: 2, src:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/400/external-horse-animal-flaticons-lineal-color-flat-icons-3.png', matched: false },
    { id: 3, src:'https://img.icons8.com/external-justicon-lineal-color-justicon/400/external-panda-animal-justicon-lineal-color-justicon.png', matched: false },
    { id: 4, src:'https://img.icons8.com/external-justicon-lineal-color-justicon/400/external-cat-dog-and-cat-justicon-lineal-color-justicon-11.png', matched: false },
    { id: 5, src:'https://img.icons8.com/external-justicon-lineal-color-justicon/400/external-lion-animal-justicon-lineal-color-justicon.png', matched: false },
    { id: 6, src:'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/400/external-bird-spring-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png', matched: false },
    { id: 7, src:'https://img.icons8.com/external-flaticons-flat-flat-icons/400/external-fish-prehistoric-flaticons-flat-flat-icons-2.png', matched: false },
    { id: 9, src:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/400/external-cow-animal-flaticons-lineal-color-flat-icons-3.png', matched: false },
];

const JogoMemoria = () => {

    const [cards, setCards] = useState([]);
    const [primeiraEscolha, setPrimeiraEscolha] = useState(null);
    const [segundaEscolha, setSegundaEscolha] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [jogoFinalizado, setJogoFinalizado] = useState(false);


     // Função para embaralhar as cartas
    const embaralharCartas = () => {
      const embaralhar = [...images, ...images]
        .sort(() => Math.random() -0.5)
        .map((card) => ({...card, id: Math.random() }));
      
      setCards(embaralhar);
      setPrimeiraEscolha(null)
      setSegundaEscolha(null)
      setDisabled(false)
      setJogoFinalizado(false) // Oculta o container quando apertar no botão de reiniciar
    }
    
    // Embaralhar as cartas ao carregar o jogo
    useEffect(() => {
       embaralharCartas();
    }, []);
    
  //Lida com a escolha das cartas
  const lidarEscolhar = (card) => {
      if(!disabled && card !== primeiraEscolha) {
          primeiraEscolha ? setSegundaEscolha(card) : setPrimeiraEscolha(card);
      }
  };

  // Compara as cartas escolhidas
  useEffect(() => {
    if (primeiraEscolha && segundaEscolha) {
      setDisabled(true);
      if (primeiraEscolha.src === segundaEscolha.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === primeiraEscolha.src ? { ...card, matched: true } : card
          )
        );
        resetTurno();
      } else {
        setTimeout(() => resetTurno(), 1000);
      }
    }
  }, [primeiraEscolha, segundaEscolha]);

  // Resetar as escolhas e desbloqueia as cartas
  const resetTurno = () => {
    setPrimeiraEscolha(null);
    setSegundaEscolha(null);
    setDisabled(false);
    setJogoFinalizado(false)
  }

  // Verifica se o jogo foi concluído
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setTimeout(() => {
        setJogoFinalizado(true);
      }, 500);
    }
  }, [cards]);
  
  return (
    <div className="jogo_memoria">
       <div className="btn-voltar">
          <Link to="/">
            <button>
            <FaAngleLeft color="black" fontSize={30} className='fa-angle-icon'/>
              Voltar
            </button>
          </Link>
      </div>



      <div className='jogo_memoria_container'>
        <h1>Jogo da memória</h1>
        {/*Mensagem quando o jogo for finalizado */}
        {jogoFinalizado && <BtnFimJogo jogarNovamente={embaralharCartas}/> }
        <div className="card_grid_jogo">
          {cards.map((card) => (
            <div
              className={`card ${card.matched ? 'matched' : ''}`}
              key={card.id}
              onClick={() => lidarEscolhar(card)}
            >
              <img
                src={card.matched || card === primeiraEscolha || card === segundaEscolha ? card.src : 'https://img.icons8.com/glyph-neue/400/dog-footprint.png'}
                alt="card"
                className="card-image"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JogoMemoria;
