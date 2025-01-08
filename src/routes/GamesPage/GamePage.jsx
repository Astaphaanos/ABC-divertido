import './GamePage.css';

const games = [
    {
        id: 1,
        title: "Combinar letras e imagens",
        description: "Arraste as letras para combinar com as imagens",
        image: ''
    },

    {
        id: 2,
        title: "Joga da memória",
        description: "Combine as cartas para encontrar as palavras corretas",
    },

    {
        id: 3,
        title: "Formar Palavras",
        description: "Complete as palavras com as letras corretas.",
        image: "link-para-imagem-2.jpg",
      },
]

const GamePage = () => {
    return (
        <section className='game_page_section'>
            <div className='info_game'>
                <h1>Jogos Educativos</h1>
                <p>Escolha seu jogo favorito!</p>
            </div>

            <div className='game_section'>
                {games.map((game) =>(
                    <div key={game.id} className='cards_games'>
                        <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
                        <h3>{game.title}</h3>
                        <p>{game.description}</p>
                        <button type='button'>Jogar Agora</button>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default GamePage;