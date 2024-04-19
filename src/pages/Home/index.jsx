import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Cacatuas from '../../assets/img/CacatuasHomePage.png';
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
        </>
    );
}   