import './Cacatuas.style.css';
import Cacatua from '../../assets/img/CacatuasPageCacatuas.png';
import Cacatua1 from '../../assets/img/cacatuas/1.png';
import Cacatua2 from '../../assets/img/cacatuas/2.png';
import Cacatua3 from '../../assets/img/cacatuas/3.png';
import Cacatua4 from '../../assets/img/cacatuas/4.png';
import Cacatua5 from '../../assets/img/cacatuas/5.png';
import Cacatua6 from '../../assets/img/cacatuas/6.png';
import Cacatua7 from '../../assets/img/cacatuas/7.png';
import Cacatua8 from '../../assets/img/cacatuas/8.png';
import Cacatua9 from '../../assets/img/cacatuas/9.png';
import Cacatua10 from '../../assets/img/cacatuas/10.png';
import Cacatua11 from '../../assets/img/cacatuas/11.png';
import Cacatua12 from '../../assets/img/cacatuas/12.png';
import Cacatua13 from '../../assets/img/cacatuas/13.png';
import Cacatua14 from '../../assets/img/cacatuas/14.png';
import Cacatua15 from '../../assets/img/cacatuas/15.png';
import Cacatua16 from '../../assets/img/cacatuas/16.png';

import { Link } from 'react-router-dom';
import CardCacatuas from '../../components/CardCacatuas';
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

        <section id='segunda-apresentacao'>
            <CardCacatuas
            imagemCacatuas={Cacatua1}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            <CardCacatuas
            imagemCacatuas={Cacatua2}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            <CardCacatuas
            imagemCacatuas={Cacatua3}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            <CardCacatuas
            imagemCacatuas={Cacatua4}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            {/* === Separação === */}

            <CardCacatuas
            imagemCacatuas={Cacatua5}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            <CardCacatuas
            imagemCacatuas={Cacatua6}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            <CardCacatuas
            imagemCacatuas={Cacatua7}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            <CardCacatuas
            imagemCacatuas={Cacatua8}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            {/* === Separação === */}

            <CardCacatuas
            imagemCacatuas={Cacatua9}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            <CardCacatuas
            imagemCacatuas={Cacatua10}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            <CardCacatuas
            imagemCacatuas={Cacatua11}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            <CardCacatuas
            imagemCacatuas={Cacatua12}
            nomeCacatuas='Lily'
            sexoCacatuas='Fêmea' />

            {/* === Separação === */}

            <CardCacatuas
            imagemCacatuas={Cacatua13}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            <CardCacatuas
            imagemCacatuas={Cacatua14}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            <CardCacatuas
            imagemCacatuas={Cacatua15}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />

            <CardCacatuas
            imagemCacatuas={Cacatua16}
            nomeCacatuas='Loro'
            sexoCacatuas='Macho' />
        </section>
    </>
  );
}