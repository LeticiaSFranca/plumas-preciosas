import './Contato.style.css';
import React from 'react';
import Cacatua from '../../assets/img/CacatuasContato.png';
import { useEffect } from 'react';

export function Contato() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={Cacatua} alt="Cacatua" id='imagem-homepage' />

                <div>
                    <h1 id='titulo-inicio-cacatuas'>Fale Conosco</h1>
                    <div></div>
                </div>
            </section>
        </>
    );
}