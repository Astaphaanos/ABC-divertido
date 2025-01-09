import './JogoMemoria.css';
import { useState, useEffect } from 'react';

const images = [
    { id: 1, src:'/images/jogo-memoria/cao.png', matched: false },
    { id: 2, src:'/images/jogo-memoria/cavalo.png', matched: false },
    { id: 3, src:'/images/jogo-memoria/dinossauro.png', matched: false },
    { id: 4, src:'/images/jogo-memoria/gato.png', matched: false },
    { id: 5, src:'/images/jogo-memoria/leao.png', matched: false },
    { id: 6, src:'/images/jogo-memoria/passaro.png', matched: false },
    { id: 7, src:'/images/jogo-memoria/peixe.png', matched: false },
    { id: 8, src:'/images/jogo-memoria/tartaruga.png', matched: false },
    { id: 9, src:'/images/jogo-memoria/vaca.png', matched: false },
];

const JogoMemoria = () => {

    const [cards, setCards] = useState([]);
    const [primeiraEscolha, setPrimeiraEscolha] = useState(null);
    const [segundaEscolha, setSegundaEscolha] = useState(null);
    const [disabled, setDisabled] = useState(false);

    //Embaralhar as cartas ao carregar o jogo
    useEffect(() => {
        const embaralharCartas = [...images, ...images]
            .sort(() => Math.random() -0.5)
            .map((card) => ({...card, id: Math.random() }));
            
            setCards(embaralharCartas);
    }, []);
    
    //Lida com a escolha das cartas
    const lidarEscolhar = (card) => {
        if(!disabled) {
            primeiraEscolha ? segundaEscolha(card) : setPrimeiraEscolha(card);
        }
    };

    //Compara as cartas escolhidas
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


  return (
    <div className="jogo_memoria">
      <h1>Jogo da Memória</h1>
      <div className="card_grid_jogo">
        {cards.map((card) => (
          <div
            className={`card ${card.matched ? 'matched' : ''}`}
            key={card.id}
            onClick={() => lidarEscolhar(card)}
          >
            <img
              src={card.matched || card === primeiraEscolha || card === setSegundaEscolha ? card.src : '/images/back.png'}
              alt="card" 
              className="card-image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JogoMemoria;
