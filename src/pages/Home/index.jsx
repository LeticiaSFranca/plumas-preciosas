import './Home.style.css';
import { useEffect } from 'react';
import img1 from '../../assets/img/imagem-apresentacao-1.png';
import React from 'react';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={img1} alt="img-1" id='img-apresentacao-1' />
                <h2 id='titulo-inicio'>Criatório Comercial de <i>Cacatua Galerita</i></h2>
            </section>
        </>
    );
}