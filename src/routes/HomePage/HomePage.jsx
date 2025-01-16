import './HomePage.css';
import { Link } from 'react-router-dom'; 

const games = [
    {
        id: 1,
        title: "Qual é a forma geométrica",
        description: "Descubra qual a forma geométrica mostrada",
        image: '/images/formas-geometricas/estrela.png',
        route: 'formas-geometricas'
    },

    {
        id: 2,
        title: "Joga da memória dos bichinhos",
        description: "Combine as cartas para encontrar as palavras corretas",
        image: '/images/jogo-memoria/back-memoria.png',
        route: 'jogo-memoria'
    },

    {
        id: 3,
        title: "Forme as palavras",
        description: "Complete as palavras com as letras corretas.",
        image: "/images/formar-palavras/back-palavras.png",
        route: 'forme-palavras'
      },
]

const HomePage = () => {
    return (
        <div>
            <section className='home_section'>
                <h1>Olá Amiguinho! Pronto para a diversão?</h1>

                <div className='home_banner_info'>
                    <h2>Crianças de 2 a 4 anos</h2>
                    <p>Esses jogos estimulam a coordenação motora, o raciocínio lógico e a criatividade de maneira divertida e interativa</p>

                    <div className='games_home_section'>
                        {games.map((game) =>(
                            <div key={game.id} className='games_cards'>
                                <div className='image-container'>
                                    <img src={game.image} alt=""/>
                                </div>
                                <h3>{game.title}</h3>
                                <p>{game.description}</p>
                                <Link to={game.route}>
                                    <button type='button'>Jogar Agora</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HomePage