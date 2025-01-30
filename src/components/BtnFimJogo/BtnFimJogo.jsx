import React from 'react';
import confetti from 'canvas-confetti';
import { FaRedo } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Importa PropTypes
import './BtnFimJogo.css';

const BtnFimJogo = ({ jogarNovamente }) => {
    // Dispara os confetes
  const dispararConfete = () => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ff0000', '#00ff00', '#0000ff'],
      gravity: 5
    });
  };

  // Chama a função de disparar confete quando o componente é montado
  React.useEffect(() => {
    dispararConfete();
  }, []);

    return(
        <div className="jogo_finalizado_container">
            <div className="jogo_finalizado_info">
                <h2>Parabéns!</h2>
                <button onClick={jogarNovamente}>
                    <FaRedo size={24} color="white" />
                </button>
            </div>
        </div>
    )
}

// Adiciona a validação de props

BtnFimJogo.propTypes = {
    jogarNovamente: PropTypes.func.isRequired, // onRestart deve ser uma função e é obrigatória
};

export default BtnFimJogo;