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
            <section id='primeira-apresentacao'>
                <img src={Cacatuas} alt="Cacatua" id='imagem-homepage' />

                <div>
                    <h1 id='titulo-inicio'>Criatório Comercial de</h1>
                    <h2 id='nome-cacatua'>Cacatuas Galerita</h2>
                    <Link to="/contato" id='botao-contato'>Entrar em Contato</Link>
                </div>
            </section>

            <section id='segunda-apresentacao'>
                <Link to='/cacatuas' className='link-botoes-inicio'>
                    <img src={BotaoCacatua} alt="Filhote de Cacatua" />
                    Conhecer Cacatuas</Link>
                <Link to='/contato' className='link-botoes-inicio'>
                    <img src={BotaoContato} alt="Cacatua no Barril" />
                    Entrar em Contato</Link>
            </section>

            <section id="terceira-apresentacao">
                <h2>Projeto realizado pelas futuras veterinárias:</h2>
                
                <div id='todas-as-bonecas'>
                    <CardBonecas
                    imagemBonecas={AnaLuiza}
                    nomeBonecas='Ana Luiza'
                    instagram='https://www.instagram.com/__.anallu/?hl=pt-br'
                    nomeInstagram='Instagram'
                    portfolio=''
                    nomePortfolio='' />

                    <CardBonecas
                    imagemBonecas={Rayane}
                    nomeBonecas='Rayane Amorim'
                    instagram='https://www.instagram.com/rayane.ramorim/?hl=pt-br'
                    nomeInstagram='Instagram'
                    portfolio=''
                    nomePortfolio='' />

                    <CardBonecas
                    imagemBonecas={Leticia}
                    nomeBonecas='Letícia França'
                    instagram='https://www.instagram.com/leticia.s.franca/?hl=pt-br'
                    nomeInstagram='Instagram'
                    portfolio='https://leticiafranca.com.br/'
                    nomePortfolio='➡ Portfólio' />

                    <CardBonecas
                    imagemBonecas={AnaSantos}
                    nomeBonecas='Ana Clara Santos'
                    instagram='https://www.instagram.com/anasanttoss__/?hl=pt-br'
                    nomeInstagram='Instagram'
                    portfolio=''
                    nomePortfolio='' />

                    <CardBonecas
                    imagemBonecas={AnaBraga}
                    nomeBonecas='Ana Clara Braga'
                    instagram='https://www.instagram.com/anabrag4/?hl=pt-br'
                    nomeInstagram='Instagram'
                    portfolio=''
                    nomePortfolio='' />
                </div>
            </section>
        </>
    );
}   