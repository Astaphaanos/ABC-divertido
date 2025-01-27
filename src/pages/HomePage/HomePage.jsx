import './HomePage.css';
import { useNavigate } from "react-router-dom";

const games = [
    {
        id: 1,
        title: "Aventura Geométrica!",
        description: "Reconheça as formas e escolha a certa!",
        image: 'https://img.icons8.com/pastel-glyph/400/7950F2/falling-star--v2.png',
        route: 'formas-geometricas',
        cor: '#B2C8FF'
    },

    {
        id: 2,
        title: "Jogo da memória dos bichinhos",
        description: "Encontre os pares de bichinhos e teste sua memória! Quem consegue lembrar mais rápido?",
        image: 'https://img.icons8.com/color/400/group-of-animals.png',
        route: 'jogo-memoria',
        cor: '#E59F34'
    },

    {
        id: 3,
        title: "Desafio do ABC",
        description: "Forme palavras juntando as letras corretas!",
        image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/400/external-dinosaur-museum-flaticons-lineal-color-flat-icons-2.png",
        route: 'forme-palavras',
        cor: '#F2A2B8'
      },


      {
        id: 4,
        title: "Descubra a cor!",
        description: "Observe as imagens e diga qual é a cor certa!",
        image: "https://img.icons8.com/office/400/paint-palette.png",
        route: 'combine-cores',
        cor: '#F2454F'
      },
]

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className='home_container'>
            <section className='home_section'>
                <h1>Olá Amiguinho! Pronto para a diversão?</h1>

                <div className='home_banner_info'>
                    <h2>Crianças de 2 a 4 anos</h2>
                    <p>Esses jogos estimulam a coordenação motora, o raciocínio lógico e a criatividade de maneira divertida e interativa</p>

                    <div className='games_home_section'>
                        {games.map((game) =>(
                            <div key={game.id} className='games_cards'>
                                <div className='image-container' style={{backgroundColor: game.cor}}>
                                    <img src={game.image} alt={game.nome}/>
                                </div>
                                <h3>{game.title}</h3>
                                <p>{game.description}</p>
                                <button type='button' onClick={() => navigate(game.route)}>
                                    Jogar Agora
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage