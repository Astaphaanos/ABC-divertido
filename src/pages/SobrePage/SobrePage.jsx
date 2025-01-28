import './SobrePage.css';

const SobrePage = () => {
    return (
        <section className='sobre-section'>
            <div className='cabecalho-sobre'>
                <h1>ABC Divertido</h1>
            </div>

            <div className='descricao-sobre'>
                <h3>O que é o ABC Divertido?</h3>
                <p>O ABC Divertido é uma ferramenta online que utiliza jogos interativos e 
                histórias para ajudar crianças no processo de desenvolvimento.</p>
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
        </section>
    )
}

export default SobrePage;