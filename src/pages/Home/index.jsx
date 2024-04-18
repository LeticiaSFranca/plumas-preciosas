import { useEffect } from 'react';
import React from 'react';
import Cacatuas from '../../assets/img/CacatuasHomePage';
import './Home.style.css';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={Cacatuas} alt="Cacatua" />
            </section>
        </>
    );
}