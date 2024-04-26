import React from 'react';
import './CardCacatuas.style.css';

function CardCacatuas({ imagemCacatuas, nomeCacatuas, sexoCacatuas }) {
    return (
       <>
            <div className='card-cacatuas'>
                <img src={imagemCacatuas} id="img-card-cacatuas" alt={nomeCacatuas} />
                <div>
                    <h3>{nomeCacatuas}</h3>
                    <hr />
                    <span>{sexoCacatuas}</span>
                </div>
            </div>
       </>
    );
}

export default CardCacatuas;