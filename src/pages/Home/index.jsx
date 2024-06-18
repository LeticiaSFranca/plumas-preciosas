import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import CardBonecas from '../../components/CardBonecas';
import Cacatuas from '../../assets/img/CacatuasHomePage.png';
import BotaoCacatua from '../../assets/img/botao-cacatua.png';
import BotaoContato from '../../assets/img/botao-contato.png';

import Rayane from '../../assets/img/bonecas/Rayane.png';
import Leticia from '../../assets/img/bonecas/Leticia.png';
import AnaSantos from '../../assets/img/bonecas/AnaSantos.png';
import AnaLuiza from '../../assets/img/bonecas/AnaLuiza.png';
import AnaBraga from '../../assets/img/bonecas/AnaBraga.png';
import './Home.style.css';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="primeira-apresentacao">
                <img src={Cacatuas} alt="Cacatua" id="imagem-homepage" />

                <div>
                    <h1 id="titulo-inicio">Criatório Comercial de</h1>
                    <h2 id="nome-cacatua">Cacatuas Galerita</h2>
                    <Link to="/contato" id="botao-contato">
                        Entrar em Contato
                    </Link>
                </div>
            </section>

            <section id="botoes-home">
                <Link to="/cacatuas" className="link-botoes-inicio">
                    <img src={BotaoCacatua} alt="Filhote de Cacatua" />
                    Conhecer Cacatuas
                </Link>
                <Link to="/contato" className="link-botoes-inicio">
                    <img src={BotaoContato} alt="Cacatua no Barril" />
                    Entrar em Contato
                </Link>
            </section>

            <section id="apresentacao-sobre-nos">
                <h2>Sobre Nós</h2>
                <p>
                    Somos um criatório comercial dedicado à criação e comércio
                    de <b>Cacatuas galerita</b>. Com muita dedicação em prol da
                    conservação e cuidado animal, nossa missão é proporcionar
                    ambientes seguros e aconchegantes para nossas cacatuas,
                    enquanto promovemos a conscientização sobre sua importância
                    e cuidados com a espécie. <br />
                    <br />
                    Nosso compromisso com a excelência se reflete em cada
                    detalhe do nosso criatório, desde a seleção minuciosa dos
                    nossos reprodutores até o acompanhamento dedicado a cada
                    ninhada. Nossas aves são criadas com os mais altos padrões
                    de bem-estar físico e emocional. <br />
                    <br />
                    Além de oferecermos Cacatuas galerita de linhagens
                    respeitadas e saudáveis, também fornecemos suporte contínuo
                    aos nossos clientes, orientando-os sobre todos os tipos de
                    cuidados adequados e diversas maneiras de enriquecimento
                    ambiental para que a sua ave tenha uma vida próspera e
                    feliz. <br />
                    <br />
                    Explore em nosso site para descobrir mais sobre nossas
                    incríveis Cacatuas galerita e como você pode fazer parte da
                    nossa história em busca da conservação e apreciação dessa
                    espécie extraordinária. <br />
                    <br />
                    Seja bem-vindo(a) ao nosso mundo, onde o nosso amor pelas
                    aves é nossa maior inspiração.
                </p>
            </section>

            <section id="apresentacao-bonecas">
                <h2>Projeto realizado pelas futuras veterinárias:</h2>

                <div id="todas-as-bonecas">
                    <CardBonecas
                        imagemBonecas={AnaLuiza}
                        nomeBonecas="Ana Luiza"
                        instagram="https://www.instagram.com/__.anallu/?hl=pt-br"
                        nomeInstagram="Instagram"
                        portfolio=""
                        nomePortfolio=""
                    />

                    <CardBonecas
                        imagemBonecas={Rayane}
                        nomeBonecas="Rayane Amorim"
                        instagram="https://www.instagram.com/rayane.ramorim/?hl=pt-br"
                        nomeInstagram="Instagram"
                        portfolio=""
                        nomePortfolio=""
                    />

                    <CardBonecas
                        imagemBonecas={Leticia}
                        nomeBonecas="Letícia França"
                        instagram="https://www.instagram.com/leticia.s.franca/?hl=pt-br"
                        nomeInstagram="Instagram"
                        portfolio="https://leticiafranca.com.br/"
                        nomePortfolio="➡ Portfólio"
                    />

                    <CardBonecas
                        imagemBonecas={AnaSantos}
                        nomeBonecas="Ana Clara Santos"
                        instagram="https://www.instagram.com/anasanttoss__/?hl=pt-br"
                        nomeInstagram="Instagram"
                        portfolio=""
                        nomePortfolio=""
                    />

                    <CardBonecas
                        imagemBonecas={AnaBraga}
                        nomeBonecas="Ana Clara Braga"
                        instagram="https://www.instagram.com/anabrag4/?hl=pt-br"
                        nomeInstagram="Instagram"
                        portfolio=""
                        nomePortfolio=""
                    />
                </div>
            </section>
        </>
    );
}
