import './Cacatuas.style.css';
import Cacatua from '../../assets/img/CacatuasPageCacatuas.png';
import { Link } from 'react-router-dom';
import React from 'react';

export function Cacatuas() {
  return (
    <>
        <section id='primeira-apresentacao'>
                <img src={Cacatua} alt="Cacatua" id='imagem-homepage' />

                <div>
                    <h1 id='titulo-inicio-cacatuas'>Cacatuas galerita</h1>
                    <Link to="/contato" id='botao-contato-cacatuas'>Quero adquirir uma</Link>
                </div>
        </section>
    </>
  );
}