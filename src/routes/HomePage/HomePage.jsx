import './HomePage.css';

const games = [
    {
        id: 1,
        title: "Qual o nome da imagem?",
        description: "Arraste as letras para combinar com as imagens",
        image: '',
    },

    {
        id: 2,
        title: "Joga da memória dos bichinhos",
        description: "Combine as cartas para encontrar as palavras corretas",
        image: '',
    },

    {
        id: 3,
        title: "Forme as palavras",
        description: "Complete as palavras com as letras corretas.",
        image: "",
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
                                <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
                                <h3>{game.title}</h3>
                                <p>{game.description}</p>
                                <button type='button'>Jogar Agora</button>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HomePage