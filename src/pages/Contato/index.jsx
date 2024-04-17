import './Contato.style.css';
import React from 'react';
import { useEffect } from 'react';

export function Contato() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1>Contato</h1>
        </>
    );
}