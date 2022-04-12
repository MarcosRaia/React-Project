import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './Routes/sobre.jsx'
import Ranking from './Routes/ranking.jsx';
import Polos from './Routes/polos';
import Publicacoes from './Routes/publicacoes';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="ranking" element={<Ranking />} />
      <Route path="polos" element={<Polos />} />
      <Route path="publicacoes" element={<Publicacoes />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
