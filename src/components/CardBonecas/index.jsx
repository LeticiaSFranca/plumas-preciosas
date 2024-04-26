import React from 'react';
import './CardBonecas.style.css';

function CardBonecas({ imagemBonecas, nomeBonecas, instagram, nomeInstagram, portfolio, nomePortfolio }) {
    return (
       <>
            <div className='card-bonecas'>
                <img src={imagemBonecas} id="img-card-bonecas" alt={nomeBonecas} />
                <div>
                    <h3>{nomeBonecas}</h3>
                    <a href={instagram} target="_blank" rel="noopener noreferrer">➡ {nomeInstagram}</a> <br />
                    <a href={portfolio} target="_blank" rel="noopener noreferrer">{nomePortfolio}</a>
                </div>
            </div>
       </>
    );
}

export default CardBonecas;