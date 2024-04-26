import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Cacatuas from '../../assets/img/CacatuasHomePage.png';
import BotaoCacatua from '../../assets/img/botao-cacatua.png';
import BotaoContato from '../../assets/img/botao-contato.png';

import AnaBraga from '../../assets/img/bonecas/AnaBraga.png';
import Rayane from '../../assets/img/bonecas/Rayane.png';
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
                    <img src={AnaBraga} alt="Ana Luiza" /> //colocar imagem com nomes
                    <img src={Rayane} alt="Rayane" />
                    <img src={AnaBraga} alt="Letícia" />
                    <img src={Rayane} alt="Ana Santos" />
                    <img src={AnaBraga} alt="Ana Braga" />
                </div>
            </section>
        </>
    );
}   