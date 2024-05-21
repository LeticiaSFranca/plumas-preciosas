import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './Manual.style.css';
import CacatuasManual from '../../assets/img/CacatuasManual.png';
import CacatuaManejo from '../../assets/img/cacatuas/7.png';

export function Manual() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={CacatuasManual} alt="Cacatua" id='imagem-manualpage' />
            </section>

            <section id="segunda-apresentacao-manual">
                <h2>Manual de orientações básicas para criação</h2>
                <h3>Cacatua-da-crista-amarela ( <i>Cacatua galerita</i> )</h3>

                <p>Este manual tem como objetivo passar as orientações básicas sobre manejo e manutenção
                de <i>Cacatuas galerita</i>, que serão criadas como pet. <br />
                Outras dúvidas que não sejam respondidas neste texto podem ser esclarecidas entrando em contato conosco!</p>
                <Link to="/contato" id='btn-contato'>Entrar em Contato</Link>

                
                <h2>IMPORTANTE!</h2>
                <p>NÃO SOLTE ou ABANDONE animais na natureza. Caso não tenha mais interesse em criar
                o seu animal, o Plumas Preciosas se compromete em recebê-lo de volta, sem ônus para a
                empresa.</p>
            </section>

            <section id="terceira-apresentacao">
                <h2>Origem e Evolução</h2>
                <p>As Cacatuas galerita também conhecidas como cacatua-da-crista-amarela, são nativas da
                Austrália sendo uma das espécies mais reconhecíveis dentro do mundo das aves. Essas
                aves têm uma longa história evolutiva na Austrália, onde são encontradas desde florestas
                tropicais até áreas semiáridas. Sua capacidade de adaptação a uma variedade de ambiente
                é notável e reflete em sua habilidade em prosperar em diversas condições. <br /><br />
                
                A origem das cacatuas está entrelaçada com a biodiversidade da Austrália, compartilhando
                seu habitat com uma grande variedade de outras espécies de aves. Ao longo das eras as
                Cacatuas galerita desenvolveram relações de extrema importância para a ecologia do seu
                habitat. <br /><br />
                
                Sua evolução foi moldada por diversos fatores como: mudanças climáticas, pressões
                seletivas e interações com outras espécies. Sua crista amarela por exemplo pode ter
                evoluído como um sinal de saúde e vitalidade para atrair parceiros durante a época de
                acasalamento. Além disso, suas habilidades de vocalização e comportamento social
                também foram modificadas ao longo do tempo para melhor comunicação e interação com
                outros membros de seu grupo. <br /><br />
                
                No entanto, as Cacatuas galerita também enfrentam ameaças significativas, como a perda
                do habitat devido ao desmatamento, poluição e captura ilegal dessas aves para fins de
                comércio (tráfico de animais).</p>

                <h3>Para facilitar o entendimento apresentamos abaixo a tabela com o resumo dos
                principais dados biológicos.</h3>
            </section>

            <section id="quarta-apresentacao">
                <img src={CacatuaManejo} alt="Cacatua-Manejo" id='cacatua-manejo'/>

                <div>
                    <p><b>- Tamanho:</b> Varia de 38 a 51 cm.</p> <br />

                    <p><b>- Peso:</b> 800 a 900g.</p> <br />

                    <p><b>- Distribuição:</b> Comumente encontradas nas Ilhas Moluccas,
                    Austrália e Nova Guiné.</p> <br />

                    <p><b>- Hábitos:</b> São animais mais sedentários, ou seja, não viajam
                    por muito tempo em busca de alimento ou abrigo. Costumam
                    ser vistas em grupos muito extensos.</p> <br />

                    <p><b>- Alimentação:</b> Na natureza alimentam-se de frutas,
                    sementes e grãos secos. Em cativeiro é indicado frutas,
                    sementes e grãos, legumes e ração comercial específica.</p> <br />

                    <p><b>- Expectativa de vida:</b> Em média 40 anos.</p>
                </div>
            </section>
        </>
    );
}