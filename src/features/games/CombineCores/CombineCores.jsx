import { useState } from 'react';
import BtnFimJogo from "../../../components/BtnFimJogo/BtnFimJogo";
import './CombineCores.css';

//Lista de imagens
const perguntas = [
    {id:1, nome: 'maçã', cor: 'Vermelho', imagem: 'https://img.icons8.com/color/150/whole-apple.png'},
    {id:2, nome: 'cenoura', cor: 'Laranja', imagem: 'https://img.icons8.com/emoji/150/carrot-emoji.png'},
    {id:3, nome: 'flamingo', cor: 'Rosa', imagem: 'https://img.icons8.com/color/150/flamingo.png'},
    {id:4, nome: 'banana', cor: 'Amarelo', imagem: 'https://img.icons8.com/color/159/banana.png'},
    {id:5, nome: 'ganso', cor: 'Branco', imagem: 'https://img.icons8.com/color/150/goose.png'},
    {id:6, nome: 'pantera', cor: 'Preto', imagem: 'https://img.icons8.com/color/150/black-jaguar.png'},
    {id:7, nome: 'urso', cor: 'Marrom', imagem: 'https://img.icons8.com/color/150/bear-full-body.png'},
    {id:8, nome: 'cobra', cor: 'Verde', imagem: 'https://img.icons8.com/color/150/snake.png'},
    {id:9, nome: '', cor: 'Azul', imagem: 'https://img.icons8.com/emoji/150/dolphin-emoji.png'},
];

const cores = [
    {nome: "Vermelho", estilo: {color: '#FF0702'}},
    {nome: "Laranja", estilo: {color: '#FF8F00'}},
    {nome: "Rosa", estilo: {color: '#FF8A80'}},
    {nome: "Amarelo", estilo: {color: '#FFE100'}},
    {nome: "Branco", estilo: {color: '#fff'}},
    {nome: "Preto", estilo: {color: '#000'}},
    {nome: "Marrom", estilo: {color: '#795548'}},
    {nome: "Verde", estilo: {color: '#7CB342'}},
    {nome: "Azul", estilo: {color: '#0061FF'}},
]

const CombineCores = () => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [jogoFinalizado, setJogoFinalizado] = useState(false);

    const perguntaAtual = perguntas[indiceAtual];

    const lidarResposta = (corSelecionada) => {
        if (corSelecionada === perguntaAtual.cor) {
            setMensagem('Muito Bem!');

            // Próxima pergunta ou finaliza o jogo
            const proximoIndice = indiceAtual + 1;
              if (proximoIndice < perguntas.length) {
                setIndiceAtual(proximoIndice);
              } else {
                setJogoFinalizado(true);
              }
        } else {
            setMensagem("Tente Novamente")
        }
    };
    
    const reiniciarJogo = () => {
        setJogoFinalizado(false);
        setMensagem('');
        setIndiceAtual(0)
    };

    return(
        <div className='cores_jogo_container'>
            {!jogoFinalizado ? (
        <>
          <h1>Descubra a Cor</h1>
          <div className="pergunta_container">
            <img src={perguntaAtual.imagem} alt={perguntaAtual.nome} className="imagem_pergunta" />
            <p>Qual é a cor do(a) {perguntaAtual.nome}?</p>
          </div>

          <div className="opcoes_container">
            {cores.sort(() => Math.random() - 0.5).map((cor) => (
              <button
                key={cor.nome}
                style={cor.estilo}
                onClick={() => lidarResposta(cor.nome)}
                className="btn_opcoes"
              >
                {cor.nome}
              </button>
            ))}
          </div>

          {mensagem && <div className="mensagem_container">{mensagem}</div>}
        </>
      ) : (
        <BtnFimJogo jogarNovamente={reiniciarJogo}/>
      )}
    </div>
    );
}

export default CombineCores;