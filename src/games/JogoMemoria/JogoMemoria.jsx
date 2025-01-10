import './JogoMemoria.css';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FaRedo } from 'react-icons/fa';

const images = [
    { id: 1, src:'/images/jogo-memoria/cao.png', matched: false },
    { id: 2, src:'/images/jogo-memoria/cavalo.png', matched: false },
    { id: 3, src:'/images/jogo-memoria/dinossauro.png', matched: false },
    { id: 4, src:'/images/jogo-memoria/gato.png', matched: false },
    { id: 5, src:'/images/jogo-memoria/leao.png', matched: false },
    { id: 6, src:'/images/jogo-memoria/passaro.png', matched: false },
    { id: 7, src:'/images/jogo-memoria/peixe.png', matched: false },
    { id: 9, src:'/images/jogo-memoria/vaca.png', matched: false },
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
  }

  // Verifica se o jogo foi concluído e colocar o canvas-confetti
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setTimeout(() => {
        setJogoFinalizado(true);
        // Disparar os confetes
        confetti({
          particleCount: 150,
          spread: 60,
          origin: { y: 0.6 }, // Ajusta para os confetes "subirem"
          colors: ['#ff0000', '#00ff00', '#0000ff'], 
        });
      }, 500);
    }
  }, [cards]);

  return (
    <div className="jogo_memoria">
      <h1>Jogo da memória</h1>

      {/*Mensagem quando o jogo for finalizado */}
      {jogoFinalizado && (
        <div className="jogo_finalizado_container">
          <div className="jogo_finalizado_info">
            <h2>Parabéns!</h2>
            <button onClick={embaralharCartas}>
                <FaRedo size={24} color="white" />
            </button>
          </div>
        </div>
      )}


      <div className="card_grid_jogo">
        {cards.map((card) => (
          <div
            className={`card ${card.matched ? 'matched' : ''}`}
            key={card.id}
            onClick={() => lidarEscolhar(card)}
          >
            <img
              src={card.matched || card === primeiraEscolha || card === segundaEscolha ? card.src : '/images/back.png'}
              alt="card" 
              className="card-image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JogoMemoria;
