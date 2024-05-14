import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cacatuas } from './pages/Cacatuas';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';
import { Manual } from './pages/Manual';
import { Contato } from './pages/Contato';
import BasePage from './pages/BasePage';
import React from 'react';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/cacatuas" element={<Cacatuas />} />
                        <Route path="/manual" element={<Manual />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}