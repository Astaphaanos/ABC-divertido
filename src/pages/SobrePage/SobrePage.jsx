import { Link } from 'react-router';
import './SobrePage.css';

const SobrePage = () => {
    return (
        <section className='sobre-section'>
            <div className='cabecalho-sobre'>
                <h1>ABC Divertido</h1>
            </div>

            <div className='descricao-sobre'>
                <span>O que é o ABC Divertido?</span>
                <div className='paragrafos-descricao'>
                    <p>O ABC Divertido é uma plataforma online inovadora que transforma o aprendizado em uma experiência lúdica e envolvente para crianças, ajudando-as a explorar o conhecimento de forma prazerosa. Com uma abordagem interativa, oferecemos uma variedade de jogos e atividades que estimulam o desenvolvimento cognitivo e emocional dos pequenos.<br/>
                    Nossos jogos são projetados para ensinar conceitos fundamentais, como o alfabeto, números e habilidades de raciocínio lógico, enquanto as histórias cativantes incentivam a imaginação e a criatividade. Cada atividade é cuidadosamente elaborada para promover o aprendizado ativo, permitindo que as crianças aprendam brincando.

                    </p>
                    <p>A plataforma é intuitiva e acessível, permitindo que crianças de diferentes idades e níveis de habilidade se divirtam enquanto aprendem. Com um design amigável e interações simples, o ABC Divertido é ideal para pais que desejam proporcionar uma experiência de aprendizado enriquecedora para seus filhos.<br/>
                    No ABC Divertido, estamos comprometidos em criar um ambiente seguro e estimulante para o aprendizado. Junte-se a nós e descubra como o aprendizado pode ser uma aventura emocionante, onde cada conquista é celebrada e cada desafio é uma oportunidade de crescimento. Venha explorar o mundo do conhecimento de forma divertida e interativa!
                    </p>
                </div>
            </div>
            <div className='info-sobre'>
                <h3>Como Funciona?</h3>
                <p>
                O ABC Divertido transforma o aprendizado em uma experiência lúdica e envolvente, tornando o desenvolvimento
                mais leve e prazerosa para as crianças. O site oferece uma variedade de jogos e
                histórias infantis, onde os pequenos podem aprender letras, formar palavras e associar imagens 
                a cores de maneira intuitiva e divertida. As crianças brincam enquanto aprendem, sem sentir 
                que estão fazendo lições tradicionais, e os pais podem acompanhar de perto o progresso, 
                identificando interesses e repetindo as atividades favoritas. Além disso, o site incentiva que o
                aprendizado vá além da tela, com ideias para criar brincadeiras em casa e integrar o conhecimento 
                ao dia a dia da família.
                </p>
            </div>

            <div className='pais-sobre'>
                <h3>Pais, vocês são parte essencial desse processo!</h3>
                <p>O desenvolvimento infantil é um momento especial que se torna ainda mais significativo com a participação 
                ativa dos pais. Quando pais e filhos aprendem juntos, o processo é enriquecido, fortalecendo 
                vínculos e criando um ambiente acolhedor para o aprendizado. O ABC Divertido foi projetado para 
                ser uma ferramenta lúdica e interativa, mas a presença dos pais é essencial para potencializar
                os resultados. Os pais podem ajudar seus filhos a explorar os jogos, reforçar o aprendizado com 
                exemplos do dia a dia e criar momentos únicos de conexão em família.
                </p>
            </div>

            <div className='conheca-jogos-container'>
                <div className='jogos-image'>
                    <img src="/src/assets/sobre-mascote.png" alt="Macaco fofo jogando" />
                </div>
                <div className='jogos-info'>
                    <h3>Jogos do ABC Divertido</h3>
                    <p>Conheça os jogos que reunem diversão, aprendizado e troca de experiência entre adultos e crianças.</p>
                    <button type='button'>
                        <Link to='/'>Acesse</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SobrePage;