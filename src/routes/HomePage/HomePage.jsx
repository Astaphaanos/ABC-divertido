import './HomePage.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <section className='home_section'>

                <div className='mascote_home'>
                   {/*Colocar um mascote ou um background */}
                </div>

                <div className='info_home'>
                    <h1>Olá amiguinho! Preparado para a nossa jornada?</h1>
                    <p>No ABC Divertido a alfabetização é uma jornada cheia de jogos, desafios e diversão para crianças e seus pais!</p>
                </div>

                {/*Colocar onclick aqui */}
                <div className='btn_home'>
                    <Link to='/jogos'>
                        <button type='button'>
                            Jogue Agora
                        </button>
                    </Link>
                    <Link to='/conheca-mais'>
                        <button type='button'>
                            Conheça Mais
                        </button>
                    </Link>
                </div>

            </section>
        </div>
    )
}

export default HomePage